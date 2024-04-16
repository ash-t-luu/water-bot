import * as fs from 'fs';
import * as path from 'path';
import { Client, Events, GatewayIntentBits, Collection, Interaction } from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.login(process.env.DISCORD_TOKEN);

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter((file: any) => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        // const command = require(filePath);
        import(filePath).then(commandModule => {
            for (const exportName in commandModule) {
                if (Object.prototype.hasOwnProperty.call(commandModule, exportName)) {
                    const command = commandModule[exportName];
                    if ('data' in command && 'execute' in command) {
                        client.commands.set(command.data.name, command);
                    } else {
                        console.log(`[WARNING] The command "${exportName}" in ${filePath} is missing a required "data" or "execute" property.`);
                    }
                }
            }
        });
    };
};

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'Error executing this command', ephemeral: true });
        } else {
            await interaction.reply({ content: 'Error while executing this command', ephemeral: true });
        }
    }
});

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

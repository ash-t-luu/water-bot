const fs = require('fs');
const path = require('path');
const { Client, Events, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js');

require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const embed = new EmbedBuilder()
    .setTitle('Drink your water 🩵💧!')
    .setColor(0x00FFFF);

client.once(Events.ClientReady, async () => {
    const channel = client.channels.cache.get('1217198002058301632');
    try {
        const webhooks = await channel.fetchWebhooks();
        const webhook = webhooks.find(wh => wh.token);

        if (!webhook) {
            return console.log('No webhook was found that I can use!');
        }

        await webhook.send({
            content: ' ',
            username: 'water bot',
            avatarURL: 'https://cdn2.vectorstock.com/i/1000x1000/26/66/cute-smiling-happy-water-drop-vector-27762666.jpg',
            embeds: [embed],
        });
    } catch (error) {
        console.error('Error trying to send a message: ', error);
    }
});

client.login(process.env.DISCORD_TOKEN);

// client.once(Events.ClientReady, readyClient => {
//     console.log(`Ready! Logged in as ${readyClient.user.tag}`);
// });

// client.login(process.env.DISCORD_TOKEN);

// client.commands = new Collection();

// const foldersPath = path.join(__dirname, 'commands');
// const commandFolders = fs.readdirSync(foldersPath);

// for (const folder of commandFolders) {
//     const commandsPath = path.join(foldersPath, folder);
//     const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));
//     for (const file of commandFiles) {
//         const filePath = path.join(commandsPath, file);
//         const command = require(filePath);
//         if ('data' in command && 'execute' in command) {
//             client.commands.set(command.data.name, command);
//         } else {
//             console.log(`[WARNING] The command at ${filePath} is missing a required 'data' or 'execute' property.`);
//         }
//     }
// }

// client.on(Events.InteractionCreate, async interaction => {
//     if (!interaction.isChatInputCommand()) return;

//     const command = interaction.client.commands.get(interaction.commandName);

//     console.log(interaction);

//     if (!command) {
//         console.error(`No command matching ${interaction.commandName} was found.`);
//         return;
//     }

//     try {
//         await command.execute(interaction);
//     } catch (error) {
//         console.error(error);
//         if (interaction.replied || interaction.deferred) {
//             await interaction.followUp({ content: 'Error executing this command', ephemeral: true });
//         } else {
//             await interaction.reply({ content: 'Error while executing this command', ephemeral: true });
//         }
//     }
// });


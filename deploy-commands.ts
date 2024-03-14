import { REST, Routes } from 'discord.js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();
import { startReminders } from './commands/utility/start';
import { stopReminders } from './commands/utility/stop';
// import { commands } from './commands/utility/index';

// const commands: string[] = [];
// const foldersPath = path.join(__dirname, 'commands');
// const commandFolders = fs.readdirSync(foldersPath);
// console.log('commandfolders: ', commandFolders);

// for (const folder of commandFolders) {
//     console.log('folder: ', folder);
//     // Grab all the command files from the commands directory you created earlier
//     const commandsPath = path.join(foldersPath, folder);
//     console.log('cpath: ', commandsPath);
//     const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
//     console.log('cfile: ', commandFiles);

//     // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
//     for (const file of commandFiles) {
//         const filePath = path.join(commandsPath, file);
//         console.log('fpath: ', filePath);
//         // const command = require(filePath);
//         try {
//             import(filePath).then(commandModule => {
//                 for (const exportName in commandModule) {
//                     if (Object.prototype.hasOwnProperty.call(commandModule, exportName)) {
//                         if (exportName !== 'getTimeout') {
//                             const command = commandModule[exportName];
//                             if ('data' in command && 'execute' in command) {
//                                 console.log(command);
//                                 commands.push(command.data.toJSON());
//                             } else {
//                                 console.log(`[WARNING] The command "${exportName}" in ${filePath} is missing a required "data" or "execute" property.`);
//                             }
//                         }
//                     }
//                 }
//             })
//             .catch(error => {
//                 console.error(`Error loading command module ${filePath}:`, error);
//             });
//         } catch (error) {
//             console.error(`Error loading command file ${filePath}:`, error);
//         }
//     }
// }

// const rest = new REST().setToken(process.env.DISCORD_TOKEN);

// (async () => {
//     try {
//         console.log('commands: ', commands);
//         console.log(`Started refreshing ${commands.length} application (/) commands.`);

//         const data: any = await rest.put(
//             Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
//             { body: commands },
//         );

//         console.log(`Successfully reloaded ${data.length} application (/) commands.`);
//     } catch (error) {
//         console.error(error);
//     }
// })();

// console.log(Object.values(commands));
// const commandsData = Object.values(commands).map((command) => command.data);

// const commandsData = Object.values(commands).flatMap((command) => {
//   if ('data' in command) {
//       return [command.data];
//   }
// });

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      {
        body: [startReminders.data, stopReminders.data],
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
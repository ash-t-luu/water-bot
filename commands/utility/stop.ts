import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../../types/command';
import { getTimeout } from './start.js';

export const stopReminders: Command = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('STOP water reminders 🛑'),
    execute: async (interaction) =>{
        await interaction.reply('reminders has stopped. good job today!');
        const timeout = getTimeout();
        clearInterval(timeout);
    },
};
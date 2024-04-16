import { SlashCommandBuilder } from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();
import { Command } from '../../types/command';

let timeout: ReturnType<typeof setInterval>;

export const startReminders: Command = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('START water reminders 🟢'),
    execute: async (interaction) => {
        timeout = setInterval(() => {
            const client = interaction.client;
            client.users.send(process.env.A_ID, {
                content: ' ',
                tts: false,
                embeds: [{
                    title: 'Drink water 🩵💧!',
                    description: ' ',
                    color: 0x00FFFF,
                }],
            })
                .catch(() => {
                    console.error('User has DMs closed or has no mutual servers with the bot.');
                });
        }, 4_500_000);
        await interaction.reply('reminders has started. you got this!');
    },
};

export const getTimeout = () => {
    return timeout;
}

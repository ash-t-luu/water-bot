const { SlashCommandBuilder } = require('discord.js');

let timeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('START water reminders 🟢'),
    async execute(interaction) {
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
        }, 3_600_000);
        await interaction.reply('reminders has started. you got this!');
    },
    getTimeout: function () {
        return timeout;
    },
};
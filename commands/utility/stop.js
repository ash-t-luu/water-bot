const { SlashCommandBuilder } = require('discord.js');
const { getTimeout } = require('./start.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('STOP water reminders 🛑'),
    async execute(interaction) {
        await interaction.reply('reminders has stopped. good job today!');
        const timeout = getTimeout();
        clearInterval(timeout);
    },
};
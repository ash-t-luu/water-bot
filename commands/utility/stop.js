const { SlashCommandBuilder } = require('discord.js');
const { getTimeout } = require('./start.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stopp')
        .setDescription('STOP: Exit Drink Water Reminder.'),
    async execute(interaction) {
        await interaction.reply('Reminders has stopped.');
        const timeout = getTimeout();
        clearInterval(timeout);
    },
};
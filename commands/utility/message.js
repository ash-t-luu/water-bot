const { client } = require('discord.js');

module.exports = {
    async execute(interaction) {
        client.users.send(interaction.user.id, 'content');
        await interaction.reply(`This command was run by ${interaction.user.username}, who's ID is ${interaction.user.id}.`);
    },
};
const { EmbedBuilder, WebhookClient } = require('discord.js');
require('dotenv').config();

const webhookClient = new WebhookClient({ id: process.env.WEBHOOK_ID, token: process.env.WEBHOOK_TOKEN });

const embed = new EmbedBuilder()
    .setTitle('Drink your water 🩵💧!')
    .setColor(0x00FFFF);

webhookClient.send({
    content: ' ',
    username: 'water bot',
    avatarURL: 'https://cdn2.vectorstock.com/i/1000x1000/26/66/cute-smiling-happy-water-drop-vector-27762666.jpg',
    embeds: [embed],
});
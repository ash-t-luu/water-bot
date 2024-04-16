import { EmbedBuilder, WebhookClient } from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

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

/* WEBHOOK LOGIC in index.js - not utilizing atm

const embed = new EmbedBuilder()
    .setTitle('Drink water 🩵💧!')
    .setColor(0x00FFFF);

client.once(Events.ClientReady, async () => {
    const channel = client.channels.cache.get(process.env.CHANNEL_ID);
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

*/
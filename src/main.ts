require('dotenv').config();
import { Client, Intents, Interaction } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('起動完了');
});

client.on('messageCreate', (msg) => {
    if (msg.content === 'ping') {
        msg.channel.send('pong')
    }
})

client.login(process.env.AUTH_TOKEN);



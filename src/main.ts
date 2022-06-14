require('dotenv').config();
import { Client, Intents, Interaction, TextChannel } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', async () => {
    console.log('起動完了');
    await (client!.channels!.cache!.get(process.env.CHANNEL_ID!)! as TextChannel).send('明日の天気は')
    process.exit()
});

client.login(process.env.AUTH_TOKEN);

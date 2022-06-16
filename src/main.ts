import 'dotenv/config'
import { Client, Intents, Interaction, TextChannel } from 'discord.js';
import fetch from 'node-fetch';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
type WeatherResponse = {
    daily: {
        weathercode: Array<number>;
    }
}

client.once('ready', async () => {
    console.log('起動完了');
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=34.3993&longitude=132.7140&daily=weathercode&timezone=Asia%2FTokyo')
    const data = (await response.json()) as WeatherResponse;
    const weathercode = data.daily.weathercode[1]
    const rainJudge = [61, 63, 65, 66, 67, 80, 81, 82]
    if (rainJudge.includes(weathercode)) {
        await (client!.channels!.cache!.get(process.env.CHANNEL_ID!)! as TextChannel).send('明日は雨です')
    }
    process.exit()
});

client.login(process.env.AUTH_TOKEN);

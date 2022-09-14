const {Client, GatewayIntentBits, Routes, SlashCommandBuilder } = require('discord.js');
const { config } = require('dotenv');
config({path: '../.env/'});
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})
// create commands and register them as json objects for rest
const slashCmd = [
    new SlashCommandBuilder().setName('tracker').setDescription('audit fivem logs')
    .addStringOption(option =>
		option.setName('operation')
			.setDescription('choose an operation')
			.setRequired(true)
			.addChoices(
				{ name: 'single', value: 'single'},
				{ name: 'batch', value: 'multi' },
				{ name: 'test', value: 'batch' },
			)
    )
    
]
const slashArr = []
for (cmd of slashCmd) { slashArr.push(cmd.toJSON()); }

bot.once('ready', async() => {
    console.log(`---------------- ${bot.user.tag} is now online ! ----------------`);
    //require('./msgCreate.js');
    require('./intCreate.js');
    const {REST} = require('@discordjs/rest');
    const restSession = new REST({version: '10'}).setToken(process.env.DISCORD_API_TOKEN)
    var guild = process.env.DISCORD_GUILD_ID;
    var client = process.env.DISCORD_CLIENT_ID;
    try {
        await restSession.put(Routes.applicationGuildCommands(client, guild), { body: slashArr })
    }catch (e) {
        console.log(e)
    }
    
});

module.exports.bot = bot;
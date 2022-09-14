// When client recieves a message, this event is triggered
const {bot} = require('./client.js');
const { msgEmbed } = require('./msgEmbed.js')

//const {initLoop} = require('../exports/initLoop.js')
const role = process.env.DISCORD_ADMIN

bot.on('messageCreate', async message => {
    // ignore bots
    if (message.author.bot) return;
    // ignore messages not from guild  
    const msg = message.content;
    // define your desired prefix
    const prefix = '/';
    if (!msg.startsWith(prefix)) return;
    // past the prefix, we split each word by the space for arguments
    let args = message.content = message.content.substring(prefix.length).split(" ");
    
    switch(args[0]){
        case 'tracker': 
            if (!message.member.roles.cache.find(r => r.id === role)) return message.reply('```diff\n'+`- ERROR - missing required permissions ...`+'```').catch(e => console.log(e));
            
            var m = msgEmbed()
            message.channel.send({ 
                content: '><> Choose an operation to perform ><>', 
                ephemeral: true, 
                embeds: [], 
                components: [m] 
            }).catch((e) => console.error(e))
            
        break;


        case 'del':
			if (!message.member.roles.cache.some(r => r.name === "Admin")) return message.channel.send('```diff\n'+`- ERROR - missing required permissions ...`+'```') .then (message => message.delete({ timeout: 5000, }));
			if (!args[1]) return message.reply('Error, please define number of messages to clear').catch(e => console.log(e)).then(msg => msg.delete(5000))
			if (args[1] > 20) return message.channel.send('```diff\n'+`- ERROR - maximum limit is 20 messages ...`+'```') .then (msg => msg.delete(5000))
			if (isNaN(args[1])) return message.channel.send('You must use a number!') .then (msg => msg.delete(5000))
		        message.channel.bulkDelete(args[1]).catch(e => console.log(e))	
        break;
    }


})

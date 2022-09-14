const { bot } = require('./client.js') 
const { playerModel } = require('../db/playerModel.js')

updateVc = () => {
    playerModel.find(function (err, players) {
        if (err) return console.error(err);
        let guild = bot.guilds.cache.get(process.env.DISCORD_GUILD_ID)
        console.log(`[VC update] total unique playercount is ${players.length}`);
        guild.channels.edit(process.env.DISCORD_VC_ID,{name: `Unique Players: ${players.length}`})
        .catch((e)=>{
            console.log(e)
            console.log('error setting name of guildchannel ... check env variable and try again');
        });
    });
    return;
}
module.exports = {
    updateVc
}

/**
 * @function updateVc Updates voice channel after checking current DB length  
 */
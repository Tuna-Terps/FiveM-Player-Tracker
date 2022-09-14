// When client recieves a interaction, this event is triggered

const { bot } = require('./client.js');
const { initLoop } = require('../exports/initLoop.js');
const { updateVc } = require('../discord/updateVc.js')

bot.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	var iUserRoles = interaction.member._roles
	if (iUserRoles.indexOf('863935649240842275') === -1) return;
	let value = interaction.options._hoistedOptions[0].value
	// select menu, decided to opt for slash commands
	//if (!interaction.isSelectMenu()) return;
	//let value = interaction.values[0]
	switch(value){
		case 'single':	
			initLoop(true, 'base');
		break;
		case 'multi':	
			initLoop(false, 'base');
		break;
		case 'batch':	
			initLoop(false, 'batch');
		break;
		case 'update_vc':	
			updateVc();	
		break;
	}
	//await interaction.editReply('Operation request success');
});
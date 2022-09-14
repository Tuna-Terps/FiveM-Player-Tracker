const { playerModel } = require('./playerModel.js')

playerSearch = async (name, identifier) => {
    playerModel.findOne({fiveId: identifier}, (err, playerDoc) => {
        if (err) return;
        if (!playerDoc) {
            const newPlayer = new playerModel({
                fiveId: identifier,
                playerValue: name
            })
            newPlayer.save(function(err, saved){
                if (err) return console.log(err);
                if (saved) console.log(`${name} was saved to the DB with ID: ${identifier}`);
            })
        }
        else console.log(`Player ${name} with ID: ${identifier} already exists in the DB`);
    })
}

module.exports = {
    playerSearch
}

/**
 * @function playerSearch Searches for existing model in the database
 * @param { String } name This is the connecting name, this is non-unique [ formatted string from parseLog ]
 * @param { String } identifier This is the player's fivem license, this is unique [ formatted string from parseLog ]
 */
const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    // this will be the player's fivem license
    fiveId: { type: String, unique: true },
    // this will be the username the player connects with [todo: command to manually change]
    playerValue: { type: String, }
});

let playerModel
try {
    playerModel = mongoose.model('Player', playerSchema);
} catch (error) {
    playerModel = mongoose.model('Player', playerSchema);
} 

module.exports.playerModel = playerModel;
/**
 * @const playerModel This is the player model defined for the database
 * @property { String } playerValue This is the connecting name, this is non-unique [ formatted string from parseLog ]
 * @property { String } fiveId This is the player's fivem license, this is unique [ formatted string from parseLog ]
 */
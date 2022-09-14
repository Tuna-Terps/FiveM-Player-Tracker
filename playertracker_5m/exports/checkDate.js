const fs = require('fs')
const {initLoop} = require('./initLoop.js')
checkDate = () => {
    fs.readFile('./date.txt', 'utf-8', function(err, data) {
        if (err) throw err;
        if (data.length <= 0){
            let dCurr = new Date();
            // write a date to the file
            fs.writeFile('./date.txt', dCurr.toString(), 'utf-8', function(err, data) {
                if (err) throw err;
                console.log('[Initial] - Finished Saving Date !');
                console.log('Beginning audit . . .')
                initLoop(false, 'base')
            })
            return true;
        }
        else {
            // we need to parse the mm,dd,yy, etc to declare a new date object, which is compared here to the current time
            let mM = data.slice(4,7);let dayNum = data.slice(8,-46);let dYear = data.slice(-46, -41);let tZone = data.slice(-32,-24);let time = data.slice(-42,-33);
            let now = Date.now();
            let then = new Date(`${mM} ${dayNum}, ${dYear}  ${time} ${tZone}`).valueOf();
            // miliseconds => seconds => minutes => hours
            let diff = (((now - then)/1000)/60)/60;
            console.log(`DIFFERENCE: ${Math.round(diff)} hours since last update . . .`)
            if (Math.round(diff) >= 24) {
                console.log('[Function] - invoking function . . .')
                let dataStr = data.toString();
                let dCurr = new Date();
                let newD = data.replace(dataStr, dCurr);
                fs.writeFile('./date.txt', newD, 'utf-8', function(err, data) {
                    if (err) throw err;
                    console.log('[Update] - Finished Saving Date !');
                })
                console.log('Beginning audit . . .')
                initLoop(true, 'base')
                return true;
            } 
            else return false;
        }
    })
}
module.exports = {
    checkDate
}

/**
 * @function checkDate checks if we have had a change since last interval; 
 * @return true if we make a change, otherwise its false 
 */
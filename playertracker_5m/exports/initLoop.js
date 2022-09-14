/**
* @function initLoop Toggle one or multi file read
* 
* This is basically the function which will handle if we loop all or one file    
*/
const fs = require('fs');
const { readLogs } = require('./readLogs.js')


initLoop = (noBatch, pathParam) => {
    if (pathParam === 'base') { path = `../${process.env.FIVEM_PROFILE}/logs/`; intent = 'txt'; }
    else if (pathParam === 'batch')  {  path = './batch/'; intent = 'txt'; }   
    else if (pathParam === 'json') { path = `../${process.env.FIVEM_PROFILE}/data/`; intent = 'json';}
    else { path = './batch'; intent = 'txt';}

    (() => {   data = fs.readdirSync(path); }) ();
    if (noBatch) {
        for (const name of data) {
            if (name === 'server.log' || name === 'playersDB.json') return readLogs(name, intent, path);
        }
    } 
    else {
        for (const name of data) {
            if (name.startsWith('server') && name != 'server.history') {
                readLogs(name, intent, path)
            }
        }   
    }
    return
}
module.exports = {
    initLoop
}

/**
 * @function initLoop Handle a single, or multiple file read 
 * @param { boolean } noBatch  true for single file, false for multi
 * @param { string } pathParam  path from cd to file  
 */
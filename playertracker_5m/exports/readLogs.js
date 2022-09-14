const reader = require('readline');
const fs = require('fs');

const { parseLog } = require('./parseLog.js');
const {playerSearch} = require('../db/playerSearch');

readLogs = (fileName, fileType, pathParam) => {
    if (fileType != 'txt')  return;
    else if (fileType == 'json') return parseJson(fileName, pathParam);

    console.log(`[TEXT] Beginning to read: ${fileName} at ${pathParam}`)
    const interface = reader.createInterface({
        input: fs.createReadStream(`${pathParam}/${fileName}`, {encoding: 'utf8'}),
    })
    interface.on('line', (input) => {
        if (input.includes('joined with ide')) {
            var res = parseLog(input)
            var name = res[0]
            var id = res[1]
            playerSearch(name, id)
        } 
        else return;
    })
    interface.on('close', () => {
        console.log('interface closing')
        interface.close();
    });
    return
}

module.exports = {
    readLogs
}
/**
 * @function readLogs Read function, intended to handle txt, json, and sql  
 * @param { String } fileName This is the file's name including extension
 * @param { String } fileType This is the file's extension
*/
parseLog = (input) => {
    var name = input.slice(input.indexOf(']', 14)+2, input.lastIndexOf('[')-26)
    var id = input.slice(input.lastIndexOf('[')+1, -1)
    var arr = id.split(';')
    arr[0].startsWith('license') ? num = 0 : num = 1;
    var pars_id =  arr[num].split(':')
    //const name_ws = name.trim()
    return [name, pars_id[1]]
    
}
module.exports = {
    parseLog
}

/**
 * @function parseLog Parse text input to formatted strings 
 * @param { String } input This is each line of text 
 */
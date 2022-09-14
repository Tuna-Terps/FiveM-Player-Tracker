require('dotenv').config({path: __dirname + '/.env/'})
// db, declare default connection
const mongoose = require('mongoose');
// log into the database
mongoose
.connect(`mongodb+srv://`+`${process.env.MONGO_USER}`+`:`+`${process.env.MONGO_PW}`+`@${process.env.MONGO_CL_NAME}.${process.env.MONGO_URL_ID}`+'.mongodb.net/'+`${process.env.MONGO_DBN}`+'?retryWrites=true&w=majority')
.catch((e) => console.log(e))
.then(() => { console.log('db connect success!') });
//
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('connected', () => { console.log('database ready . . .') });
//
// import bot client, authorize
const {bot} = require('./discord/client.js');
bot
.login(process.env.DISCORD_API_TOKEN)
.catch((e) => console.log(e))
.then(async() => {
    console.log(`bot authenticated !`);
    then = performance.now();
    console.log(`init took ${then.toFixed(2)} milliseconds`)
    // logs 
    const {checkDate} = require('./exports/checkDate.js');
    const { updateVc } = require('./discord/updateVc.js');
    await checkDate();
    updateVc();
    
    

})

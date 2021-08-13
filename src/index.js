const Aoijs = require("aoi.js")

 

const bot = new Aoijs.Bot({

  sharding: false, //true or false 

  shardAmount: 2, //Shard amount 

  mobile: false, //true or false - Discord Mobile Status

  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server

  token: "BOT_TOKEN_HERE", //Discord Bot Token

  prefix: [`$getServerVar[prefix]`], //Change PREFIX to your Prefix

  autoUpdate: false, // set to true if version should be updated automatically after a package update

})
bot.variables({
    prefix: "=", 
    chatbot: "empty"
 }) 

 

bot.onMessage() // Allows Commands to Executed


bot.loadCommands(`./commands/`) //Allows Commands executed by `commands` folder
bot.readyCommand({
channel:"",
code: `$log[Ready on client $client[tag]]`
})





    

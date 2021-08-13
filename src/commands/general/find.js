module.exports = {
name: "find", 

    code: `
$argsCheck[>1;:x:Please type something to search for] 
$djsEval[const fs = require('fs') 
const Discord = require('discord.js') 
const dir = './assets/sc3d/' 

const files = fs.readdirSync(dir)


const found = new Discord.MessageEmbed() 
.setTitle("Results for **__$replaceText[$toLowercase[$message]; ;_]__**") 
.setColor("RANDOM") 
.setDescription(files.filter(e => e.includes("$replaceText[$toLowercase[$message]; ;_]")).join("\\n")) //this is written by fourk

.setFooter("Requested by $username") 
message.channel.send(found) 
 
 
] 
$suppressErrors[:x: I found many results for what you requested, please be more specific] 
$argsCheck[>1;:x:Please type something to search for] 
`

}

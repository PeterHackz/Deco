module.exports = {
name: "uptime", 

 aliases: ['stats','ping'],

 description: "Check the bot's information/stats",

 usage: "",

 category: "information",

 code: `$title[$username[$clientID] Stats]

 $color[GREEN]

 $thumbnail[$userAvatar[$clientID]]

$description[**__Bot Info__**

▪︎Name: \`Deco-Bot\`

▪︎ID: \`$clientID\`

▪︎Birthday: \`$creationDate[$clientID]\`

▪︎Owner: \`S.B#9838\`

▪︎Prefix: "$getServerVar[prefix]"

▪︎Total Commands: \`$commandsCount\`

▪︎Latency: \`$botPing ms\`

▪︎Uptime: \`$uptime\`
▪︎Servers: \`$serverCount\`

▪︎Users: \`$allMembersCount\`

▪︎RAM Usage: \`$ram MB\`

▪︎Memory Usage: \`$djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB\`

**__CPU Info__**

▪︎CPU Usage: \`$cpu%\`

▪︎CPU Model: \`$djsEval[require ('os').cpus()[0].model;yes]\`

▪︎CPU Platform: \`$djsEval[require ('os').platform();yes]\`

**__Package Info__**

▪︎Aoi.js: \`v1.0.6\`

▪︎Node.js: \`$nodeVersion\`

]
 $addTimestamp

 $cooldown[5s;{description:A bit too fast there. Wait for **%time%**!}{color:GREEN} ]`

 }

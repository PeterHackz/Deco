//remove this command if your server doesn't automatically start after crashing
module.exports = {

name: 'restart', 

code: `

$djsEval[setTimeout(() => {process.exit()}, 1000)]

	

$description[<a:load:849024540616818728> ┃ ***__RESTARTING__***] 

$color[32cd32]



$onlyForIDs[$botOwnerID;:x: You're not my Owner] 

`

} 

module.exports = {

name: 'set-prefix',

  code: `

$description[<@$authorID> just changed my prefix in this server! 

My new prefix is \`$message[1]\`] 

$setServerVar[prefix;$message[1]] 

$color[RANDOM]

$onlyIf[$charCount[$message[1]]<=5;:x: Prefix can\'t be more than 5 characters]

$argsCheck[>1;:x: Please provide something to be the new prefix] 

$onlyPerms[admin;:x: You\'re not an admin to use this command] 

`

}

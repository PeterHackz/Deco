module.exports = {
name: 'send', 
code: `
Here is \`$replaceText[$toLowercase[$message]; ;_]\`!
$attachment[./assets/sc3d/$replaceText[$toLowercase[$message]; ;_];$replaceText[$toLowercase[$message]; ;_]] 
$argsCheck[>1;:x:Please name a file] 
$suppressErrors[:x: File not found] 
`
   } 

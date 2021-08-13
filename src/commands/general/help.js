module.exports = {
    name: 'help', 
    code: `
$title[Help Panel] 
$description[\`$getServerVar[prefix]help\` => shows this message
\`$getServerVar[prefix]invite\` => send link to invite me to your server
\`$getServerVar[prefix]find <type something to find>\` => give found results for what you type to search
\`$getServerVar[prefix]send <full file name>\` => send you the file
\`$getServerVar[prefix]stats\` => Show stats about me
\`$getServerVar[prefix]set-prefix <new prefix> (admin only)\` => Change my prefix in the server 
\`$getServerVar[prefix]eval <some code > (developer only)\` => evaluate the given code
\`$getServerVar[prefix]restart (developer only)\` => restart me] 
$footer[Requested by $username] 
$color[RANDOM] 
`
   } 

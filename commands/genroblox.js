
module.exports.run = async(client, message, args) => {
const axios = require('axios')
const site = 'https://byps.cc/gen/api/generate.php?type=Roblox'
  
 axios.get(`https://proxy-test.seven7four4.repl.co/proxy/${site}`)
    .then(reply => {
            message.sendInline(reply.data, { allowedMentions: { repliedUser: false } })});
  }

module.exports.config = {
  name: 'genroblox'
}
module.exports.run = async(client, message, args) => {
const axios = require('axios')
const site = 'https://insult.mattbas.org/api/insult'
  
 axios.get(`https://proxy-test.seven7four4.repl.co/proxy/${site}`)
    .then(reply => {
            message.sendInline(reply.data, { allowedMentions: { repliedUser: false } })});
  }

module.exports.config = {
  name: 'insult'
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
    event: "message", // Event
    once: false,
    async run (message, client) {
if((message.author.bot) || (message.author.id === 1006199225740185732)) return
let db = client.db
if(await db.has(`${message.guild.id}_chatchannel`) && getRandomInt(20) === 5) {
let channelid = await db.get(`${message.guild.id}_chatchannel`)
if (!channelid) return
      client.brain.chatSend(message)
        }
}
};
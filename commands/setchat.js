module.exports.run = async(client, message, args) => {
let db = client.db
if(!args[0]) return message.channel.send(client.em("", "how about you mention a channel or give a channel id loser"))
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
if (!channel) return message.channel.send(client.em('', 'aint a channel'))

db.set(`${message.guild.id}_chatchannel`, `${channel.id}`)
message.channel.send(client.em('your did it', `i now talk in ${channel}`))
}
module.exports.config = {
  name: 'setchat',
  aliases: ['sc']
}
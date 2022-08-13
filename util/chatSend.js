const axios = require('axios');
const smartestchatbot = require('smartestchatbot')
const scb = new smartestchatbot.Client()
const talkedRecently = new Set();

require("./inline.js");


const chatSend = async (message) => {
   try {
     if (talkedRecently.has(message.author.id)) {
      return;
  } else {
      talkedRecently.add(message.author.id);
      setTimeout(() => {
          talkedRecently.delete(message.author.id);
      }, 10000);
  }
    let uid = message.author.id
    let msg = message.content
        message.channel.startTyping()
     console.log(msg)
          await axios.get(`https://api.simsimi.net/v2/?text=${msg}&lc=en&cf=false`)
      .then(reply => {
        if ((reply.data.success != "I don't know what you're saying. Please teach me.")) {
            message.channel.stopTyping();
            message.sendInline(reply.data.success, { allowedMentions: { repliedUser: false } })}
        else {
          scb.chat({message: msg, name: "Atp's waitress", owner:"Atp Zombie", user: message.author.id, language:"automatic", gender:"female", master: "Atp Zombie", scmaster: "Atp Zombie", friend: "Atp Zombie", scgender: "female", family: "Atp" , job: "talking", os: "Windows", friends: "Zombies", build: "2.0", class: "cool girl", company: "none", birthplace: "at home", email: "bot@national.shitposting.agency", ethics: "atp's big balls", location: "somewhere in Nevada", species: "hot woman", version: "idk", boyfriend: "Atp Zombie"})
          .then(response => {
            message.channel.stopTyping();
            message.sendInline(response, { allowedMentions: { repliedUser: false } })}
          )
        };
    })
 } catch (error) {
        message.channel.stopTyping();
    }
};

const blacklist = async (args) => {
  try {
    client.blacklisted.add(args)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
    chatSend,
    blacklist
};

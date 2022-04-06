const express = require("express");
const app = express()
const Database = require("@replit/database")
const db = new Database()

app.listen(4076, () => {
  console.log("U.E.P is awake owo!");
})

app.get("/", (req, res) => {
  res.send("Hello Everything! This is the mind of U.E.P!");     
})

db.set("countgame", "1").then(() => {});
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
});
const fs = require("fs");
const prefix = '>'
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for(file of commands){
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
  
  if(message.content.startsWith(prefix)){
    const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if(!command) return message.channel.send({content:"I am aware you are calling me perhaps, but I don't recognize what you're talking. @_@"})
    command.run(client, message, args)
  }
  else{
    if(!(message.author.username === "U.E.P") &&   (message.content.toLowerCase().includes('uep') || message.content.toLowerCase().includes('u.e.p'))){
      if(!message.content.startsWith(prefix) && (message.content.toLowerCase() === "uep" || message.content.toLowerCase() === "u.e.p")){
        const args = "uep"
        const commandName = args
        const command = client.commands.get(commandName)
        command.run(client, message, args)
      }
      else{
        const args = "uepAlternate"
        const commandName = args
        const command = client.commands.get(commandName)
        command.run(client, message, args)
      }  
    }
  }
  
})

client.login(process.env.token);
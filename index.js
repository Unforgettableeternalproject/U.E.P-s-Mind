const express = require("express")
const app = express()
const Database = require("@replit/database")
const db = new Database()
const banned = ["fuck", "shit", "cunt", "idiot", "gay", "lesbian", "suck", "ass", "幹", "三小", "他媽", "婊子", "wtf", "fk", "cum", "bitches", "dick", "pussy", "anal", "asshole", "nigger", "penis", "bullshit", "fucker" , "mf", "motherfucker", "hoe", "fucking", "slut", "crap", "bastard", "vagina", "peko"]
const usersMap = new Map()
const LIMIT = 4
const DIFF = 2500
const TIME = 3000

app.listen(4076, () => {
  console.log("U.E.P is awake owo!")
})

app.get("/", (req, res) => {
  res.send("Hello Everything! This is the mind of U.E.P!")   
})

//db.set("countgame", "1").then(() => {});
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  allowedMentions: ["users"]
})
const fs = require("fs");
const prefix = '>'
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for(file of commands){
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

const functions = fs.readdirSync("./Functions").filter(file => file.endsWith(".js"))
for(file of functions){
    const functionName = file.split(".")[0]
    const function_ = require(`./Functions/${functionName}`)
    client.commands.set(functionName, function_)
}

client.on("messageCreate", async message => {
    let foulCount = await db.get(`foulCount_${message.author.id}`)
  
    if(usersMap.has(message.author.id) && !(message.author.id === "960860193913188382")) {
        console.log(usersMap.get(message.author.id).msgCount)
        let userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {
              message.reply("Someone just spammed the chat like crazy!! (ﾟДﾟ*)ﾉ");
              message.channel.bulkDelete(LIMIT+3);
              client.commands.get("deduct_").run(client, message, ['Spam'])
              await db.set(`foulCount_${message.author.id}`, foulCount + 1)
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
  }
  
  if(message){
    for(word of message.content.toLowerCase().trim().split(/ +/g)){
        if(banned.includes(word)){
          client.commands.get("deduct_").run(client, message, ['Foul'])
          await db.set(`foulCount_${message.author.id}`, foulCount + 1)
          return message.channel.send("I sensed that someone is saying bad words! <( ￣^￣)")
        }
    }
  }

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
        client.commands.get("uep_").run(client, message, [''])
      }
      else{
        client.commands.get("uepAlternate_").run(client, message, [''])
      }  
    }
  }
  
})

client.login(process.env.token)
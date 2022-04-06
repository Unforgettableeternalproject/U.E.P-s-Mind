const Database = require("@replit/database");
const db = new Database();
const Discord = require("discord.js");
const timeout = 8640000;

exports.run = async (client, message, args) => {
  const check = await db.get(`daily_${message.author.id}`);
  if(check !== null && timeout - (Date.now() - check) > 0){
    const ms = require("pretty-ms")
    const timeLeft = ms(timeout - (Date.now() - check))
    if(message.author.username === "Bernie") message.channel.send("I'm sorry, but even if you are the creator, U.E.Points are only available once per day. ~(>_<。)＼")
    else message.channel.send("Sorry, but U.E.Points can only be claimed once per day. ( •̀ ω •́ )✧")

    const da = new Discord.MessageEmbed()
    .setTitle("Come back after...")
    .setColor("#c5ad09")
    .setDescription(`${timeLeft}, and you can have more U.E.Points!`)
    .setTimestamp()
    message.channel.send({embeds:[da]})
  }
  else{
    let reward = 10
    let currentbalance = await db.get(`UEPoint_${message.author.id}`)
    let display = currentbalance

    if(display === null) display = 0
    
    message.channel.send(`Hello, ${message.author.username}! Here's your daily U.E.Point! Come back next day! φ(゜▽゜*)♪`)
    
    const da = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}'s Daily U.E.Point!`)
    .setColor("#c5ad09")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(message.author.displayAvatarURL())
    .addField("U.E.Point", `+${reward} U.E.Points! You currently have ${display+reward} U.E.Point(s)`)
    .setFooter("You can get U.E.Points via typing >daily, and E.X.Points are earned thro  ugh special events.")
    .setTimestamp()
    message.channel.send({embeds:[da]})
    await db.set(`UEPoint_${message.author.id}`, currentbalance + reward)
    await db.set(`daily_${message.author.id}`, Date.now())
  }
}

exports.name = "daily"
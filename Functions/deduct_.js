const Discord = require("discord.js")
const Database = require("@replit/database")
const db = new Database()

exports.run = async (client, message, args) => {
    console.log(args)
    let bills
    let mi
    let currentbalance = await db.get(`UEPoint_${message.author.id}`)
    let foulCount = await db.get(`foulCount_${message.author.id}`)
    
    if(parseInt(foulCount) < 2) bills = 2
    else if (parseInt(foulCount) < 5) bills = 5
    else if (parseInt(foulCount) < 8) bills = 10
    else{
      message.channel.send("You have against the rules too many times today and I shall not tolerate it anymore. (* ￣︿￣)")
      if(message.member.permissions.has("ADMINISTRATOR"))
      {
        return message.channel.send("It seems like I could't do anything to you, as a moderator, you should know your place better.")
      }
      else{
        mi = new Discord.MessageEmbed()
          .setTitle("Broken too much rules!!!")
          .setColor("DARK_RED")
          .setAuthor(message.author.username, message.author.displayAvatarURL())
          .setThumbnail(message.author.displayAvatarURL())
          .addField("U.E.Point", `<:U_:961257545916366918> -${currentbalance} U.E.Points! You currently have 0 U.E.Point(s)`)
          .setFooter("This is what you get when not obeying the rules!")
          .setTimestamp()
        message.channel.send({embeds:[mi]})
        await db.set(`UEPoint_${message.author.id}`, 0)
        message.member.kick()
        return message.channel.send("Alright, " + message.author.username + ", you have been grounded.")
      }
    }

    if(currentbalance-bills < 0) display = 0
    else display = currentbalance-bills
    

    if(args[0] === 'Foul'){
        console.log("-++--")
        mi = new Discord.MessageEmbed()
        .setTitle("Foul Language Detected!!")
        .setColor("DARK_RED")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .addField("U.E.Point", `<:U_:961257545916366918> -${bills} U.E.Points! You currently have ${display} U.E.Point(s)`)
        .setFooter("You will lose U.E.Points by saying foul words, so please be well-behaved.")
        .setTimestamp()
    }
    if(args[0] === 'Spam'){
        console.log("+--++")
        mi = new Discord.MessageEmbed()
        .setTitle("Spam Detected!!")
        .setColor("DARK_RED")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .addField("U.E.Point", `<:U_:961257545916366918> -${bills} U.E.Points! You currently have ${display} U.E.Point(s)`)
        .setFooter("You will lose U.E.Points by spamming too much, so please be well-behaved.")
        .setTimestamp()
    }
    
    message.channel.send({embeds:[mi]})
    if(currentbalance-bills >= 0) await db.set(`UEPoint_${message.author.id}`, currentbalance - bills)
    else await db.set(`UEPoint_${message.author.id}`, 0)
}

exports.name = "muep"
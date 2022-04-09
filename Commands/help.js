exports.run = (client, message, args) => {
    let toSay = args.join(" ")
    if(!toSay) toSay = '1'
  
    const Discord = require("discord.js");
    let help
    switch(toSay)
      {
        case '1':
          help = new Discord.MessageEmbed()
          .setTitle("Here am I helping, what do you want me to do?")
          .setAuthor("U.E.P Speaking", "")    
          .setThumbnail("https://media.discordapp.net/attachments/406441438054711297/960929875974303784/U.E.P-.png?width=676&height=676")
          .setColor("#c5ad09")
          .addField("'uep'(Does not need the prefix)", "Say hello to me, and I will say it back!")
          .addField("'me'", "I will give you my knowledge about...you, my observation of you.")
          .addField("'creator'", "The creator of mine is Bernie, if you want to know about him I can tell you.")
          .addField("'count'", "I love counting! It's a fun game when I am all alone.")
          .addField("'repeat (message)'", "If you want to, I can repeat your words.")
          .addField("'sw'", "This is quite interesting, I can show you your current soul worth, it's like...a wallet?")
          .addField("'daily'", "If you talk to me everyday, I will give you 10 U.E.Points, which can be used to...do something.")
          .addField("'info'", "I can give you some infomations about this server!")
          .setDescription("You should add '>' to most of the command to make me see, except when you are calling my name, it's not a command but a greeting! Use >help (number) to cycle pages!")
          .setFooter("I will be able to do more soon...I guess, I need to get used to how things work in reality after all. Page 1/2")
          break;
          
        case '2':
          help = new Discord.MessageEmbed()
          .setTitle("Here am I helping, what do you want me to do?")
          .setAuthor("U.E.P Speaking", "")    
          .setThumbnail("https://media.discordapp.net/attachments/406441438054711297/960929875974303784/U.E.P-.png?width=676&height=676")
          .setColor("#c5ad09")
          .addField("'help (pages)'", "Just another me telling you all this...it is literally ->this command<-?")
          .addField("'clear (amount)' <HELPERs and above only>", "I can delete some previous if you need me to~")
          .addField("'grant (type) (mention) (amount)' <creator only>", "Currently only Bernie can use, but this will be fully implement later. o((>ω< ))o")
          .addField("'revoke (type) (mention) (amount)' <creator only>", "Currently only Bernie can use, but this will be fully implement later. o((>ω< ))o")
          .setDescription("You should add '>' to most of the command to make me see, except when you are calling my name, it's not a command but a greeting! Use >help (number) to cycle pages!")
          .setFooter("I will be able to do more soon...I guess, I need to get used to how things work in reality after all. Page 2/2")
          break;
          
        default:
          help = new Discord.MessageEmbed()
          .setTitle("Here am I helping, what do you want me to do?")
          .setAuthor("U.E.P Speaking", "")    
          .setThumbnail("https://media.discordapp.net/attachments/406441438054711297/960929875974303784/U.E.P-.png?width=676&height=676")
          .setColor("#c5ad09")
          .setDescription("This page isn't finished yet!")
          .setFooter("I will be able to do more soon...I guess, I need to get used to how things work in reality after all. Page ?/2")
      }
    message.channel.send({embeds:[help]})
  }

exports.name = "help"
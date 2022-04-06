exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    if(message.author.username === "Bernie"){
      message.channel.send("You are my creator! Did you forget? Wait is that even possible? I was you prondest work QAQ")
    }
    else{
      let creator = new Discord.MessageEmbed()
      .setTitle("Bernie#9586, his username")
      .setAuthor("U.E.P Speaking")     
.setThumbnail("https://media.discordapp.net/attachments/406441438054711297/960929875974303784/U.E.P-.png?width=676&height=676")
      .setDescription("He like to share his works with friends, I am not sure about strangers though.")
      .setColor("#c5ad09")
      .addField("If you'd like to visit, here's his link tree:", "https://linktr.ee/unforgettableeternalproject")
      .setFooter("That's...mostly about Bernie, talk to him in person if you want more infomation.")
      message.channel.send({embeds:[creator]})
    }
}

exports.name = "creator"
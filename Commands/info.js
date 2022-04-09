const Discord = require("discord.js")

exports.run = (client, message, args) =>{
    let info = new Discord.MessageEmbed()
    .setTitle("I am not good at explaining but I can try")
    .setAuthor("U.E.P Speaking")
    .setThumbnail("https://media.discordapp.net/attachments/406441438054711297/960929875974303784/U.E.P-.png?width=676&height=676")
    .setColor("#c5ad09")
    .setDescription("This is a server made by Bernie, and I am U.E.P, an embodiment of the primal force [Polymerization]. In this server, you can do whatever you want, just follow the rules, or I will punish you (ノ｀Д)ノ. Below are some special words you might have heard, but never know what it's for.")
    .addField("The Counsel of the World", "Gods, a.k.a bots, though I am also a bot, but i am built different. （︶^︶）")
    .addField("The Governor", "The head admins of this server, Bernie is one of them.")
    .addField("The Eradicator", "The moderators, they appears quite often, but some of them are fierce.")
    .addField("The Peacemaker", "The helpers, be free to talk to them, they are kind and friendly.")
    .addField("Other Special Roles", "I don't really know what they are, maybe you should ask Bernie? ψ(._. )>")
    .addField("U.E.Point", "The positive half of your soul, can be exchanged for something valuable(Currently not implemented yet), you can get it from >daily command and some nice behavior, and lose it from bad behaviors. ಠ_ರೃ")
    .addField("E.X.Point", "The negative half of your soul, can be used to defy some severe punishments, you can get it through server events, giving from moderators, you won't lose it in any ways beside using it.")
    .setFooter("That's it, I am tired QQ...")
    message.channel.send({embeds:[info]})
}

exports.name = "info"
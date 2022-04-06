exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    let me = new Discord.MessageEmbed()
    .setTitle("As I have observed, you are a human person!")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(message.author.displayAvatarURL())
    .setColor("#c5ad09")
    .setDescription("Uhh...A human person is good, yes, I love humans, they are cute, you are cute too...I guess?")
    .setFooter("okay I guess this is enough cya next time!")
    message.channel.send({embeds:[me]})
}


exports.name = "me"
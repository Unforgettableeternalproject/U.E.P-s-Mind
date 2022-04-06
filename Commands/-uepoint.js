const Discord = require("discord.js")

exports.run = async (client, message, bills) => {
    let currentbalance = await db.get(`UEPoint_${message.author.id}`)
    let display = currentbalance

    if(display === null) display = 0
    const mi = new Discord.MessageEmbed()
    .setTitle("Foul Language Detected!!")
    .setColor("DARK_RED")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(message.author.displayAvatarURL())
    .addField("U.E.Point", `-${bills} U.E.Points! You currently have ${display-bills} U.E.Point(s)`)
    .setFooter("You will lose U.E.Points by spamming too much foul words, so please be well-behaved.")
    .setTimestamp()
    message.channel.send({embeds:[mi]})
    await db.set(`UEPoint_${message.author.id}`, currentbalance - bills)
}

exports.name = "muep"
const Database = require("@replit/database");
const db = new Database();
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let uepo = await db.get(`UEPoint_${message.author.id}`)
    let expo = await db.get(`EXPoint_${message.author.id}`)

    if(uepo === null) uepo = 0
    if(expo === null) expo = 0
    let uepoint = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}'s soul worth!`)
    .setColor("#c5ad09")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(message.author.displayAvatarURL())
    .addField("U.E.Point", `<:U_:961257545916366918> You currently have ${uepo} U.E.Point(s)`)
    .addField("E.X.Point", `You currently have ${expo} E.X.Point(s)`)
    .setDescription("This is your soul worth, which is a combination of U.E.Points and E.X.Points! If you need more infomations, use >info command.(～￣▽￣)～")
    .setFooter("You can get U.E.Points via typing >daily, and E.X.Points are earned through special events.")
    .setTimestamp()

    message.channel.send({embeds:[uepoint]})
}

exports.name = "sw"
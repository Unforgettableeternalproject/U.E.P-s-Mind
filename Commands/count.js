const Database = require("@replit/database");
const db = new Database();
const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let cot = await db.get("countgame")
    db.set("countgame", `${parseInt(cot, 10) + 1}`).then(() => {});
    //cot = await db.get("countgame")
    //if(cot === null) cot = 0
    let count = new Discord.MessageEmbed()
    .setTitle("U.E.P's little counting game")
    .setThumbnail("https://media.discordapp.net/attachments/406441438054711297/960929875974303784/U.E.P-.png?width=676&height=676")
    .addField("Below is the variable I will be counting", "Current number: " + cot.toString())
    .setColor("#c5ad09")
    .setFooter("It's fun, right?", "")
    message.channel.send({embeds:[count]})
}

exports.name = "count"
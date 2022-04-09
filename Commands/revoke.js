const Discord = require("discord.js")
const Database = require("@replit/database")
const db = new Database()

exports.run = async (client, message, args) => {

    if(message.author.id !== "399948654674444308" || message.author.bot) return message.channel.send({content:"I am sorry, but only the creator can use this command currently. (；′⌒`)"})
  
    let mention = message.mentions.users.first()

    if (!mention || mention.id === "960860193913188382") return message.channel.send("I don't see who you are refering to...? <(' ')>")
    if (args.length < 3) return message.channel.send("You did not enter a specific amount...")
    let currency = ['ue-', 'ex-', 'fo-']
    let change
    let points = args[0]
    let amount = parseInt(args[2], 10)

    if (!currency.map(m => m.toLowerCase()).includes(points.toLowerCase())) {
      message.channel.send(`I don't see what currency are you refering to...? (⊙_⊙)？`);
      return;
    }

    if (points === "ue-"){
      change = await db.get(`UEPoint_${mention.id}`)
      await db.set(`UEPoint_${mention.id}`, change - amount)
      const gr = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} has revoked ${amount} U.E.Points from ${mention.username}... ╯︿╰`)
      .setColor("DARK_RED")
      .setAuthor(mention.username, mention.displayAvatarURL())
      .setThumbnail(mention.displayAvatarURL())
      .addField("U.E.Point", `<:U_:961257545916366918> -${amount} U.E.Points! You currently have ${change - amount} U.E.Point(s)`)
      .setFooter("You can lose U.E.Points by having bad behaviors, or by executions from moderators.")
      .setTimestamp()
      message.channel.send({embeds:[gr]})
      return
    } 
  
    if (points === "ex-"){
      change = await db.get(`EXPoint_${mention.id}`)
      await db.set(`EXPoint_${mention.id}`, change - amount)
      message.channel.send(`This should not be possible by now though, \n-${amount} E.X.Points, you currently have ${change - amount} E.X.Point(s).\nSorry for the simplicity, I don't really know what she would say...`);
      return
    } 

    if (points === "fo-"){
      change = await db.get(`foulCount_${mention.id}`)
      await db.set(`foulCount_${mention.id}`, change - amount)
      message.channel.send(`Successfull revoked ${mention.username}'s foul count by ${amount}!`);
      return
    } 
}

exports.name = "revoke"
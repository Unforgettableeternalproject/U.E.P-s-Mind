const banned = "fuck, shit, cunt, idiot, gay, lesbian, suck, ass, 幹, 三小, 他媽, 婊子, wtf, fk, cum, bitches, dick, pussy, anal"

const Database = require("@replit/database")

exports.run = async (client, message, args) => {
  
  const db = new Database()
  const command = client.commands.get("-uepoint")
  
  let foulCount = await db.get(`foulCount_${message.author.id}`)
  
  for(word of args){
    if(banned.includes(word.toLowerCase())){
      if(parseInt(foulCount, 10) < 5 || foulCount === null) command.run(client, message, 2)
      else command.run(client, message, 5)
      await db.set(`foulCount_${message.author.id}`, foulCount + 1)
      return message.channel.send("Hey  that's inappropriate! I refuse to repeat that!")
    } 
  }
  
  let toSay = args.join(" ")
  if(!toSay) return message.channel.send("Surely I can repeat your words, but I don't see any...(´･ω･`)?")

  message.channel.send("Uhh okay...\nYou said: " + toSay)
}

exports.name = "repeat"
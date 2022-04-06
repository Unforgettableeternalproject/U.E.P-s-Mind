const banned = "fuck, shit, cunt, idiot, gay, lesbian, suck, ass, 幹, 三小, 他媽, wtf, fk, cum, bitches, dick, pussy"

exports.run = (client, message, args) => {
  let toSay = args.join(" ")
  if(!toSay) return message.channel.send("Surely I can repeat your words, but I don't see any...(´･ω･`)?")

  if(banned.includes(toSay.toLowerCase())) return message.channel.send("Hey that's inappropriate! I refuse to repeat that!")
    
  message.channel.send("Uhh okay...\nYou said: " + toSay)
}

exports.name = "repeat"
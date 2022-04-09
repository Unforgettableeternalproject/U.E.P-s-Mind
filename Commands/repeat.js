const banned = ["fuck", "shit", "cunt", "idiot", "gay", "lesbian", "suck", "ass", "幹", "三小", "他媽", "婊子", "wtf", "fk", "cum", "bitches", "dick", "pussy", "anal", "asshole", "nigger", "penis", "bullshit", "fucker" , "mf", "motherfucker", "hoe", "fucking", "slut", "crap", "bastard", "vagina", "peko"]

const Database = require("@replit/database")

exports.run = async (client, message, args) => {
  
  let toSay = args.join(" ")
  if(!toSay) return message.channel.send("Surely I can repeat your words, but I don't see any...(´･ω･`)?")

  message.channel.send("Uhh okay...\nYou said: " + toSay)
}

exports.name = "repeat"
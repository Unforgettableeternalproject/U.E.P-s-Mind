exports.run = (client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Sorry, but it seems that you do not have the lowest permission to use this command.")

    let amount = parseInt(args.join(" "), 10)
    if(!amount) amount = 5
    message.channel.bulkDelete(amount+1);

    return message.channel.send(`Deleted ${amount} previous messages!`)
}

exports.name = "clear"
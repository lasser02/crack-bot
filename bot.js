const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bin Ready!");
    bot.user.setActivity("with servers | c!help")
});

bot.on('message', msg  => {
    if (msg.author.bot || !msg.content.startsWith("c!")) return;
    const args  = msg.content.slice("c!".length).split(" ");
    const command = args.shift().toLowerCase();
   
    if (command == "hru") {
    if (!args[0]) return msg.channel.send("i'm good thx for asking")
    const saytxt = args.join(" ");
    msg.channel.send(saytxt)
    };

bot.on('message', msg  => {
    if (msg.author.bot || !msg.content.startsWith("c!")) return;
    const args  = msg.content.slice("c!".length).split(" ");
    const command = args.shift().toLowerCase();
   
    if (command == "say") {
    if (!args[0]) return msg.channel.send("syntax: c!say <Text>")
    const saytxt = args.join(" ");
    msg.channel.send(saytxt)
    };
});

bot.login(process.env.BOT_TOKEN)

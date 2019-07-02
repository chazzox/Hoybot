const {botToken} = require('./config.json');
const disc = require('discord.js');
const hoyBot = new disc.Client();
const botPref = "hb!"
const totalBreen = 5


const commands = {
    "giveGod" : {
    execute: (msg) => {
        msg.channel.send('breen', {
            files: [
                `./theBreen/${Math.floor(Math.random() * (+totalBreen - +1)) + 1}.png`
            ]
        })
        console.log(`${msg.author.username} just used the breen`)
    }
}}

hoyBot.on('ready', () => {
  console.log(`eat my ass! ${hoyBot.user.tag} is up!`)
});

hoyBot.on('message', msg =>{
    if(msg.content.startsWith(botPref)){
        let suffix = msg.content.split(" ")[1]
        try{
        commands[suffix].execute(msg)
        }
        catch(err){
            msg.channel.send("command not recognised")
        }
    }
});

hoyBot.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = hoyBot.channels.get(guild.systemChannelID || channelID);
    channel.send(`sup cunts dont have command list, will soon`);
});

hoyBot.login(botToken);
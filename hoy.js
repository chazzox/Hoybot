const {botPref,botToken,logChannelID} = require('./config.json');
const disc = require('discord.js');
const fs = require('fs');
const hoyBot = new disc.Client();
const totalBreen = 5

const commands = {
    "giveGod":{
        lol: (msg) => {
            msg.channel.send('breen', {
                files: [
                    `./assets/theBreen/${Math.floor(Math.random() * (+totalBreen - +1)) + 1}.png`
                ]
            })
            console.log(`${msg.author.username} just used the breen`)
        },
        "description": "sends a pic of lord and saviour syntax: hb! giveGod"
    },
    "send": {
        lol: (msg,args) => {
            const idChannel = args[0]
            const channelMSG = (args.slice(1)).join(" ")
            try {
                hoyBot.channels.get(idChannel).send(channelMSG)
            } catch (e) {
                msg.channel.send(`${e}`)
                msg.channel.send(`id="${idChannel}" and msg="${channelMSG}"`)
                msg.channel.send(`args recieved: ${args}`)
            }
        },
        "description":"sends a message to a given id, bot is required to be in this server is in syntax: hb! send <channelID> <mesage>"
    },
    "list":{
        lol: (msg)=>{
            for(var guildIndex of hoyBot.guilds){
                msg.channel.send(`\`channels that are in guild with name: ${guildIndex[1]} and id: ${guildIndex[0]}\``)
                var channelText= "```"
                for (var channelIndex of hoyBot.guilds.get(guildIndex[0]).channels){
                    if(channelIndex[1].type ==="text"){
                        channelText += (`channel name: "${hoyBot.channels.get(channelIndex[0]).name}" id: "${channelIndex[0]}" \n`)
                    }
                }
                channelText += "```"
                msg.channel.send(channelText)
                channelText= ""
            }
        },
        "description":"lists the servers and channels the bot can send to, useful for the send function syntax hb! list"
    },
    "help":{
        lol:(msg)=>{
            for (let prop in commands){
                msg.channel.send(`\`${prop} = ${commands[prop].description}\``)
            }
        },
        "description":"provides information about all the bot commands"
    },
    "log":{
        lol:(msg)=>{
            console.log("in the workings")
        },
        "description": `sends a specified amount of lines of the log file to server. syntax: "hb! log 100"
        or: "hb! log **". to send all`
    }
}

hoyBot.on('ready', () => {
    // this is the botactivity that you can see if you click on the bot when online
    console.log(`eat my ass! ${hoyBot.user.tag} is up!`)
    hoyBot.user.setActivity('b̳͓̞̏̏̉ͮ̅͒ͤr͚̼̤̅̈́ͤ̊͐̆̒̕͝ͅe͛̐ͥ̔ͭ̆̚͏̯͎̤̮͍ę͍͕͚͔̻ͭ̀n͖̞͓̠̟̽̄̿̉͆ͥ on all platforms', { type: 'Streaming' })
});

hoyBot.on('message', msg =>{
    if(!msg.content.startsWith(botPref)){return;}
    const rawMsg = msg.content;
    let commandOBJ = rawMsg.split(' ').map(s => s.trim())
    commandOBJ.shift()
    const mainCom = commandOBJ[0]
    if(commandOBJ.length>3){
        msg.channel.send(`bruh "${rawMsg.replace("hb! ", "")}" really do be and invalid function`)
        return
    }
    if (!commands.hasOwnProperty(mainCom)){
        msg.channel.send(`bruh "${rawMsg.replace("hb! ", "")}" really do be and invalid function`)
        return 
    }
    try{
        console.log(commandOBJ.length);
        commands[commandOBJ[0]][commandOBJ[1]].lol(msg)
    }
    catch(err){
        console.log("this was probably not a duel segment command, see later logs to check if a serious error has occured")
        try{
            commands[commandOBJ[0]].lol(msg)
        }
        catch(err){
            console.log(err)
        }
    }
});

hoyBot.on('guildCreate',(newGuild)=>{
    newGuild.defaultChannel.send("reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

});

hoyBot.login(botToken)
const {botPref,botToken,logChannelID} = require('./config.json');
const disc = require('discord.js');
const hoyBot = new disc.Client();
const totalBreen = 5

const commands = {
    "giveGod":{
        lol: (msg) => {
            msg.channel.send('breen', {
                files: [
                    `./theBreen/${Math.floor(Math.random() * (+totalBreen - +1)) + 1}.png`
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
        "description":"lists the servers and channels the bot can send to, useful for the send function  syntax hb! list"
    },
    "help":{
        lol:(msg)=>{
            for (let prop in commands){
                msg.channel.send(`\`${prop} = ${commands[prop].description}\``)
            }
        },
        "description":"provides information about all the bot commands"
    }
}

hoyBot.on('ready', () => {
  console.log(`eat my ass! ${hoyBot.user.tag} is up!`)
});

hoyBot.on('message', msg =>{
    if(!msg.content.startsWith(botPref)){return;}
    const rawMsg = msg.content
    // this line will split the command sent by user into it's multiple parts, 
    // then trim the entire array of the white space
    const commandOBJ = rawMsg.split(' ').map(s => s.trim())
    if (!commands[commandOBJ[1]]){
        msg.channel.send(`${commandOBJ[1]} is not a functin of the bot`)
        return
    }
    try{
        commands[commandOBJ[1]].lol(msg, commandOBJ.slice(2))
    }
    catch (err){
        console.log(err)
        msg.channel.send(`bot crashed, rebooting`)
    }
})



hoyBot.login(botToken)
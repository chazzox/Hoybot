const {botToken} = require('./config.json');
const {botPref} = require('./config.json');
const disc = require('discord.js');
const hoyBot = new disc.Client();
const totalBreen = 5
const codeBlock = "\`"

const commands = {
    "giveGod":{
        execute: (msg) => {
            msg.channel.send('breen', {
                files: [
                    `./theBreen/${Math.floor(Math.random() * (+totalBreen - +1)) + 1}.png`
                ]
            })
            console.log(`${msg.author.username} just used the breen`)
        }
    },
    "send": {
        execute: (msg) => {
            msg.channel.send('send what lol')
            console.log(`${msg.author.username} just used the send`)
        }
    },
    "log":{
        execute:(msg,args) =>{
            console.log(`was just told to log`)
        }
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
    console.log(`command used: "${commandOBJ[1]}"`)
    try{
        commands[commandOBJ[1]].execute(msg,args)
    }
    catch(err){
        console.log(err)
        msg.channel.send(`an error happend lol`)
    }
});



hoyBot.login(botToken); 
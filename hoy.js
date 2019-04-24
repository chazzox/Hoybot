const Discord = require('discord.js');
const client = new Discord.Client();
const optReg = /^([1-3])$/
const readlineSync = require('readline-sync');
var optn;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  menu()
});

client.on('message', msg =>{
  if(optn=="2"){
    if (msg.content === 'ping') {
      msg.channel.send('lol fuck right off cunt, im busy taking crack ' + msg.author);
    }
    else if (msg.content.toLowerCase() === '!av') {
        msg.reply(msg.author.avatarURL)
    }
  }
});

function sendMsg() {
  idChannel = readlineSync.question('Enter id: ');
  channelMSG = readlineSync.question('Enter msg: ');
  client.channels.get(idChannel).send(channelMSG)
  while (channelMSG!="/stop"){
    channelMSG = readlineSync.question('Enter msg: ');
    try {
      client.channels.get(idChannel).send(channelMSG)
    } catch (e) {
      console.log(e);
  }

}}

function menu(){
  console.log("1 - send message to server (looping)")
  console.log("2 - function like normal bot")
  console.log("3 - cu time")
  optn = readlineSync.question('Enter optn: ');
  while(optReg.test(optn)==false){
    optn = readlineSync.question('Invalid, try again: ')
  }
  if(optn=="1"){
    sendMsg()
  }
  else if(optn=="3"){}
}

client.login('NTI1MDI5NzA0NjAwOTExODgy.XLzEaQ.xGlMAVT31nInlpqHmH_l1grYeoM');
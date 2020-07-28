const { botPref, botToken } = require('./config.json');
const disc = require('discord.js');
const hoyBot = new disc.Client();
const commands = require('./commands');

hoyBot.on('ready', () => {
	// this is the botactivity that you can see if you click on the bot when online
	console.log(`eat my ass! ${hoyBot.user.tag} is up!`);
	hoyBot.user.setActivity('you', { type: 'WATCHING' });
});

hoyBot.on('message', (msg) => {
	if (!msg.content.startsWith(botPref)) {
		return;
	}
	const rawMsg = msg.content;
	let commandOBJ = rawMsg.split(' ').map((s) => s.trim());
	commandOBJ.shift();
	if (!commands.hasOwnProperty(commandOBJ[0])) {
		msg.channel.send(`bruh "${rawMsg.replace('hb! ', '')}" really do be and invalid function`);
		return;
	}
	try {
		console.log(commandOBJ.length);
		commands[commandOBJ[0]][commandOBJ[1]].lol(msg);
	} catch (err) {
		console.log(err)
		console.log('this was probably not a duel segment command, see later logs to check if a serious error has occured');
		try {
			commands[commandOBJ[0]].lol(msg);
		} catch (err) {
			console.log(err);
		}
	}
});

hoyBot.on('guildCreate', (newGuild) => {
	newGuild.defaultChannel.send('reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
});

hoyBot.login(botToken);

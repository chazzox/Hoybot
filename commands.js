module.exports = commands = {
	send: {
		lol: (msg, args) => {
			const idChannel = args[0];
			const channelMSG = args.slice(1).join(' ');
			try {
				hoyBot.channels.get(idChannel).send(channelMSG);
			} catch (e) {
				msg.channel.send(`${e}`);
				msg.channel.send(`id="${idChannel}" and msg="${channelMSG}"`);
				msg.channel.send(`args recieved: ${args}`);
			}
		},
		description:
			'sends a message to a given id, bot is required to be in this server is in syntax: hb! send <channelID> <mesage>'
	},
	list: {
		lol: (msg) => {
			for (var guildIndex of hoyBot.guilds) {
				msg.channel.send(`\`channels that are in guild with name: ${guildIndex[1]} and id: ${guildIndex[0]}\``);
				var channelText = '```';
				for (var channelIndex of hoyBot.guilds.get(guildIndex[0]).channels) {
					if (channelIndex[1].type === 'text') {
						channelText += `channel name: "${hoyBot.channels.get(channelIndex[0]).name}" id: "${
							channelIndex[0]
						}" \n`;
					}
				}
				channelText += '```';
				msg.channel.send(channelText);
				channelText = '';
			}
		},
		description: 'lists the servers and channels the bot can send to, useful for the send function syntax hb! list'
	},
	help: {
		lol: (msg) => {
			for (let prop in commands) {
				msg.channel.send(`\`${prop} = ${commands[prop].description}\``);
			}
		},
		description: 'provides information about all the bot commands'
	},
	log: {
		lol: (msg) => {
			console.log('in the workings');
		},
		description:
			'sends a specified amount of lines of the log file to server. syntax: "hb! log 100" or: "hb! log **". to send all'
	}
};

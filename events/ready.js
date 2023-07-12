const { Events } = require('discord.js');
const chalk = require('chalk');


module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.startTime = Date.now();
		console.log(chalk.greenBright(`[!]`), `Logged in as ${client.user.tag}`);
		console.log(chalk.greenBright(`[!]`), `Loaded ${client.commands.size} commands`);
		console.log(chalk.greenBright(`[!]`), `Started at ${client.startTime}`);
		console.log(chalk.greenBright(`[!]`), `Loaded ${client.guilds.cache.size} guilds`);
		console.log(chalk.greenBright(`[!]`), `Ready!`);
	},
};
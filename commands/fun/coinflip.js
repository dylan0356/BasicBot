const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Flips a coin against a user or the bot'),
	options: [
		{
			name: 'user',
			description: 'The user to flip against',
			type: 'USER',
			required: false,
		}
	],
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		const coin = Math.floor(Math.random() * 2) + 1;

		if (!user) {
			if (coin == 1) {
				await interaction.reply('Heads!');
			} else {
				await interaction.reply('Tails!');
			}
		}
		else {
			if (coin == 1) {
				await interaction.reply(`${user.username} wins!`);
			}
			else {
				await interaction.reply(`${interaction.user.username} wins!`);
			}
		}
        
	},
};
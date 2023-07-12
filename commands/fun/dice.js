const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { embedColor } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Gives a random number between 1-6'),
	async execute(interaction) {
        const roll = Math.floor(Math.random() * 6) + 1;
        embed = new EmbedBuilder()
			.setTitle(`You rolled a ${roll}`)
			.setTimestamp()
			.setColor(embedColor);

		await interaction.reply({ embeds: [embed] });
	},
};
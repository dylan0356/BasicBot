const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('emotes')
		.setDescription('Lists all emotes in the server'),
	async execute(interaction) {
        const emotes = interaction.guild.emojis.cache.map(e => e.toString()).join(" ");
        await interaction.reply(emotes);
	},
};
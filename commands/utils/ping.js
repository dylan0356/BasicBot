const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
        const ping = interaction.client.ws.ping;
        embed = new EmbedBuilder()
            .setTitle(`Pong! ${ping}ms`)
            .setTimestamp()
            .setColor(embedColor);

        await interaction.reply({ embeds: [embed] });
	},
};
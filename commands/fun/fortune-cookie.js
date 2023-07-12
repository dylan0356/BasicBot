const { SlashCommandBuilder, EmbedBuilder  } = require('discord.js');
const { embedColor } = require('../../config.json');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fortune')
		.setDescription('Gives a random fortune'), 
	async execute(interaction) {
        const fortunes = fs.readFileSync('data/fortune-cookies.txt', 'utf8').split('\n');
        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        embed = new EmbedBuilder()
            .setTitle("Your fortune:")
            .setDescription(fortune)
            .setTimestamp()
            .setColor(embedColor);

        await interaction.reply({ embeds: [embed] });
	},
};
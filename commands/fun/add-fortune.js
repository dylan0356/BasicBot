const { SlashCommandBuilder, EmbedBuilder  } = require('discord.js');
const { embedColor } = require('../../config.json');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('add-fortune')
		.setDescription('Adds a fortune cookie to the list')
        .addStringOption(option =>
            option.setName('fortune')
                .setDescription('The fortune to add')
                .setRequired(true)),
	async execute(interaction) {
        const fortunes = fs.readFileSync('data/fortune-cookies.txt', 'utf8').split('\n');
        const fortune = interaction.options.getString('fortune');
        fortunes.push(fortune);
        fs.writeFileSync('data/fortune-cookies.txt', fortunes.join('\n'));
        embed = new EmbedBuilder()
            .setTitle("Fortune added!")
            .setDescription(fortune)
            .setTimestamp()
            .setColor(embedColor);

        await interaction.reply({ embeds: [embed] });

	},
};
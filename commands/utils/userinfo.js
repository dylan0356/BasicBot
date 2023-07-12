const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { embedColor } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Gets info on a user'),
    options: [
        {
            name: 'user',
            description: 'The user to get info on',
            type: 'USER',
            required: false,
        }
    ],
	async execute(interaction) {
        let user;
        if (!interaction.options.getUser('user')) {
            user = interaction.user;
        } else {
            user = interaction.options.getUser('user');
        }
        const embed = new EmbedBuilder()
            .setTitle(`Info on ${user.username}`)
            .setThumbnail(user.avatarURL())
            .setTimestamp()
            .setColor(embedColor);

        embed.addFields(
            {
                name: 'Username',
                value: user.username,
                inline: true,
            },
            {
                name: 'Discriminator',
                value: user.discriminator,
                inline: true,
            },
            {
                name: 'ID',
                value: user.id.toString(),
                inline: true,
            },
            {
                name: 'Bot',
                value: user.bot.toString(),
                inline: true,
            },
            {
                name: 'Created At',
                value: user.createdAt.toString(),
                inline: true,
            },
        );
        await interaction.reply({ embeds: [embed] });
	},
};
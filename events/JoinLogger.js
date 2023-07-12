const { Events, EmbedBuilder } = require('discord.js');
const { welcomeChannelID } = require('../config.json');

const Sequelize = require('sequelize');

const User = require('../models/user');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false,
});

const Users = User(sequelize, Sequelize.DataTypes);

module.exports = {
    //Events for join
	name: Events.GuildMemberAdd,
	async execute(interaction) {
        const channel = interaction.guild.channels.cache.get(welcomeChannelID);
        channel.send(`Welcome to the server, ${interaction}!`);

        const user = await Users.findOne({ where: { discord_id: interaction.id } });
        if (user) {
            user.still_in_server = true;
            user.save();
        }
        else {
            Users.create({
                discord_id: interaction.id,
                discord_name: interaction.username,
                discord_discriminator: interaction.discriminator,
                join_date: Date.now(),
                still_in_server: true,
            });
        }

    }
};
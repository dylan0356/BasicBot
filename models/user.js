module.exports = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		// Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        discord_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discord_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discord_discriminator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        join_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        still_in_server: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};
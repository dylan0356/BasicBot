const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false,
});

const Users = require('./models/user')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
    const users = await Users.findAll();
    console.log(users);
    console.log('Database synced');
    sequelize.close();
}).catch(console.error);


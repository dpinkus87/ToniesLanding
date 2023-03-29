const sequelize = require('../config/connection');

const seedTonies = require('./toniesData')
const seedCategories = require('./categoriesData')
const seedUsers = required('./userData.js')

const seedAll = async () => {
    await sequelize.sync({ force: true});
    await seedCategories();
    await seedTonies();
    await seedUsers();
    process.exit(0);
};

seedAll();
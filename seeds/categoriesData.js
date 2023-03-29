const { Categories } = require('../models');

const categorydata = [
    {
        cat_name: 'Disney',
    },
    
];

const seedCategories = () => Categories.bulkCreate(categorydata);

module.exports = seedCategories;
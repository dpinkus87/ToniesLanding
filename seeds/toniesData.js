const { Tonies } = require('../models');

const toniesdata = [

    {
        prod_name: 'Moana',
        prod_description: 'Hawaii',
        // status: TRUE,
        filename: ('../public/images/Moana.jpg'),
    },
    {
        prod_name: 'Mickey',
        prod_description: 'the Mouse',
        // status: TRUE,
        filename: ('../public/images/Screen Shot 2023-03-20 at 10.52.49 AM.png'),
    },
    {
        prod_name: 'Bedtime stories',
        prod_description: 'sleepy...',
        // status: TRUE,
        filename: ('../public/images/Bedtime Songs.jpg'),
    },
    {
        prod_name: 'Paw Patrol',
        prod_description: 'can do it all',
        // status: TRUE,
        filename: ('../public/images/Paw Patrol.jpg'),
    }
   
];

const seedTonies = () => Tonies.bulkCreate(toniesdata);

module.exports = seedTonies;
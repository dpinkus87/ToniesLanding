const { } = require('../models')

const userData = [
    {
        first_name: 'user1',
        last_name: '1',
        email: 'user1@email.com',
        password: 'password123',
        address: '123 first st',
        city: 'Hometown',
        zip: '34567',
    },
    {
        first_name: 'user2',
        last_name: '2',
        email: 'user2@email.com',
        password: 'password123',
        address: '123 second',
        city: 'Homeville',
        zip: '23456',
    },
    {
        first_name: 'user3',
        last_name: '3',
        email: 'user3@email.com',
        password: 'password123',
        address: '123 third',
        city: 'Homeburg',
        zip: '12345',
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
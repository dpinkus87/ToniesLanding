const User = require('./user');
const Que = require('./que');
const Que_Item = require('./que_item');
const Tonies = require('./tonies');
const Categories = require('./categories');

// Relationships

User.hasOne(Que, {
    foreignKey: 'user_id',
});

Que.belongsTo(User, {
    foreignKey: 'user_id',
});

Que.belongsToMany(Tonies, {
    through: Que_Item,
    foreignKey: 'tonies_id',
});

Tonies.belongsToMany(Que, {
    through: Que_Item,
    foreignKey: que_id,
});

module.exports = { User, Que, Que_Item, Tonies};
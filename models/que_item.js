const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Que_Item extends Model { }

Que_Item.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        que_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'que',
                key: 'id'
            }
        },
        tonies_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tonies',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'que_item',
    }
)

module.exports = Que_Item;
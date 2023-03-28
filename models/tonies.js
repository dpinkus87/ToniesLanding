const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tonies extends Model { }

Tonies.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        prod_name: {
            type: DataTypes.STRING,
        },
        prod_description: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.BOOLEAN,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tonies',
    }
)

module.exports = Tonies;
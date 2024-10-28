const {Model, DataTypes} = require("@sequelize/core");
const sequelize = require('../db.config')
class Hero extends Model {}

Hero.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        real_name: {
            type: DataTypes.STRING,
        },
        origin_description: {
            type: DataTypes.STRING,
        },
        superpowers: {
            type: DataTypes.STRING,
        },
        catch_phrase: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Heroes',
        timestamps: false
    },
);


module.exports = Hero;
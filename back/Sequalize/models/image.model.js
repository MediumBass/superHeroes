const {Model, DataTypes} = require("@sequelize/core");
const sequelize = require('../db.config')
const Hero = require("./hero.model");
class Image extends Model {}

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        hero_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Hero,
                key: 'id',
            }
        },
        image_link:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Images',
        timestamps: false
    },
);
Hero.hasMany(Image, { foreignKey: 'hero_id', as: 'images' });
Image.belongsTo(Hero, { foreignKey: 'hero_id', as: 'hero' });


module.exports = Image;
const {db, DataTypes, Model} = require("../db/connection")

class Pokemon extends Model {}

Pokemon.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    weight: DataTypes.DECIMAL(10, 2)
}, {
    sequelize: db,
    modelName: "Pokemon",
    timestamps: false,
})

module.exports = Pokemon;
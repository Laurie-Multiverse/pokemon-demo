const { db, DataTypes, Model } = require("../db/connection.js");

class Trainer extends Model {}

Trainer.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Trainer",
  }
);

module.exports = {
  Trainer
};

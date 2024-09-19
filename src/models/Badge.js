const { db, DataTypes, Model } = require("../db/connection.js");

class Badge extends Model {}

Badge.init(
  {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Badge",
  }
);

module.exports = {
  Badge
};

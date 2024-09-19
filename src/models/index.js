const { Pokemon } = require("./Pokemon.js");
const { Trainer } = require("./Trainer.js");
const { Badge } = require("./Badge.js");

// One trainer has many pokemon, each pokemon has one trainer
// ONE-TO-MANY
Trainer.hasMany(Pokemon)
Pokemon.belongsTo(Trainer)

// One trainer can have many badges
// One badge can be earned by many trainers
// MANY-TO-MANY
Trainer.belongsToMany(Badge, { through: "TrainerBadges" })
Badge.belongsToMany(Trainer, { through: "TrainerBadges" })

module.exports = {
  Pokemon,
  Trainer,
  Badge,
};


const Pokemon = require('./Pokemon');
const Trainer = require('./Trainer')
const Badge = require('./Badge')

// associations!
// Pokemon and Trainer
Trainer.hasMany(Pokemon);
Pokemon.belongsTo(Trainer);

// Trainer and Badge
Trainer.belongsToMany(Badge, { through: "trainers-badges" })
Badge.belongsToMany(Trainer, { through: 'trainers-badges' })

module.exports = {
    Pokemon,
    Trainer,
    Badge
}
const { db } = require('./connection')
const { Pokemon, Trainer, Badge } = require('../models')
const { pokemon, trainers, badges } = require('./seedData')

async function seed() {
    await db.sync({ force: true});

    await Pokemon.bulkCreate(pokemon);
    await Trainer.bulkCreate(trainers);
    await Badge.bulkCreate(badges);
}

seed();
const { db } = require("./db/connection")
const { Pokemon, Trainer, Badge } = require("./models")

async function main() {
    const trainers = await Trainer.findAll();
    const badges = await Badge.findAll();
    const pokemon = await Pokemon.findAll();

    // Trainer collects Pokemon
    await trainers[0].addPokemon(pokemon[0])
    await trainers[0].addPokemon([pokemon[1], pokemon[2]])
    // console.log(JSON.stringify(trainers[0], null, 2))

    // Lazy loading of a trainer and subsequently getting pokemon
    let redTrainer = await Trainer.findByPk(1);
    // console.log(JSON.stringify(redTrainer, null, 2))
    const lazyPokemons = await redTrainer.getPokemons();
    // console.log(JSON.stringify(lazyPokemons, null, 2))

    // Eager loading of a trainer with Pokemon
    redTrainer = await Trainer.findByPk(1, {
        include: Pokemon
    });
    console.log(JSON.stringify(redTrainer, null, 2))

    // trainers earn badges
    await trainers[0].addBadge(badges[0]);
    await trainers[1].addBadges([badges[0], badges[1], badges[2]]);
    const trainersWithBadges = await Trainer.findAll({
        include: Badge
    })
    console.log(JSON.stringify(trainersWithBadges, null, 2))

    // badges are earned by trainers
    const blueTrainerBadges = await trainers[1].getBadges();
    console.log(JSON.stringify(blueTrainerBadges, null, 2))
}

main();
const { db } = require("./db/connection")
const { Pokemon, Trainer, Badge } = require("./models")

async function main() {
  await db.sync({ force: false });

  // for convenience in our demo, grab all the seeded data
  const trainers = await Trainer.findAll();
  const pokemon = await Pokemon.findAll();
  const badges = await Badge.findAll();

  console.log("********** ONE-TO-MANY **********");
  await trainers[0].addPokemon(pokemon[0]); // id 1
  await trainers[0].addPokemons([ pokemon[1], pokemon[2] ]); // id 2, 3
  await trainers[1].addPokemon(4)
  await trainers[1].addPokemons([5, 6, 7]);

  // let's look at this trainer
  const red = await Trainer.findByPk(1);
  console.log("red trainer:", JSON.stringify(red, null, 2))
  const redPokemon = await red.getPokemons();
  console.log("redPokemon:", JSON.stringify(redPokemon, null, 2))

  // let's look at the other trainer
  // use eager loading this time
  const blue = await Trainer.findByPk(2, {include: Pokemon})
  console.log("blue trainer:", JSON.stringify(blue, null, 2))

  console.log("********** MANY-TO-MANY **********");
  await red.addBadge(badges[0]); // id: 1
  await blue.addBadges([1, 2, 3]);
  const trainersWithBadges = await Trainer.findAll({ include: [Badge, Pokemon]})
  console.log("trainersWithBadges:", JSON.stringify(trainersWithBadges, null, 2))

}

main();
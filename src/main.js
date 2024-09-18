const { db } = require("./db/connection")
const { Pokemon } = require("./models/Pokemon")

async function main() {
  await db.sync({ force: true });

  console.log("\n********** CREATE **********")

  const pikachu = await Pokemon.create({
    name: "Pikachu",
    type: "Electric",
    weight: 13
  })

  console.log("Pikachu:", JSON.stringify(pikachu, null, 2));

  await Pokemon.bulkCreate([
    {
      name: "Bulbasaur",
      type: "Grass/Poison",
      weight: 16,
    },
    {
      name: "Charmander",
      type: "Fire",
      weight: 18,
    },
    {
      name: "Squirtle",
      type: "Water",
      weight: 23,
    },
  ]);

  console.log("\n********** READ **********");
  const allPokemon = await Pokemon.findAll();
  console.log("allPokemon:", JSON.stringify(allPokemon, null, 2))

  const bulbasaur = await Pokemon.findByPk(2);
  console.log("bulbasaur:", JSON.stringify(bulbasaur, null, 2))

  const waterPokemon = await Pokemon.findAll(
    {
        where: {
           type: "Water" 
        }
    }
  );
  console.log("waterPokemon =", JSON.stringify(waterPokemon, null, 2))

  const firstWaterPokemon = await Pokemon.findOne(
    {
        where: {
           type: "Water" 
        }
    }
  );
  console.log("firstWaterPokemon =", JSON.stringify(firstWaterPokemon, null, 2))

  console.log("\n********** UPDATE **********")
  const updatedPokemon = await bulbasaur.update({
    name: "Ivysaur",
    weight: 31
  })
  console.log("updateResult=", JSON.stringify(updatedPokemon, null, 2));

  console.log("\n********** DELETE **********")
  const charmander = await Pokemon.findOne({
    where: {name: "Charmander"}
  });
  const deletedPokemon = await charmander.destroy();
  console.log("deletedPokemon=", JSON.stringify(deletedPokemon, null, 2))
}

main();
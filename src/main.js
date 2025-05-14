const { db } = require("./db/connection")
const Pokemon = require("./models/Pokemon")

async function main() {
    await db.sync({ force: true })

    // CRUD
    // CREATE
    const pikachu = {
        name: "Pikachu",
        type: "Electric",
        weight: 6
    };
    const pokemon1 = await Pokemon.create(pikachu);
    // console.log(JSON.stringify(pokemon1, null, 2));
    await Pokemon.bulkCreate([
        {
            name: "Bulbasaur",
            type: "Grass/Poison",
            weight: 6.9,
        },
        {
            name: "Charmander",
            type: "Fire",
            weight: 8.5,
        },
        {
            name: "Squirtle",
            type: "Water",
            weight: 9,
        },
    ])

    // READ (R in CRUD)
    const allPokemon = await Pokemon.findAll();
    // console.log(JSON.stringify(allPokemon, null, 2))

    const pokemon3 = await Pokemon.findByPk(3);
    // console.log(JSON.stringify(pokemon3, null, 2))

    const bulbasaur = await Pokemon.findOne({
        where: {
            name: 'Bulbasaur'
        }
    });
    // console.log(JSON.stringify(bulbasaur, null, 2))

    // UPDATE (U in CRUD)
    // method 1: Class method
    await Pokemon.update({
        weight: 20
    }, {
        where: {
            name: 'Pikachu'
        }
    })

    // method 2: instance method
    const ivysaur = await bulbasaur.update({
        name: 'Ivysaur',
        weight: 31
    });
    // console.log(JSON.stringify(ivysaur, null, 2))

    // DELETE (D in CRUD)
    // method 1: class method
    await Pokemon.destroy({
        where: { id: 4 }
    })

    // method 2: instance method
    const destroyedIvysaur = await ivysaur.destroy();
    console.log(JSON.stringify(destroyedIvysaur, null, 2))
}

main();
const { readFile, writeFile } = require ('fs').promises;
const path = require('path');
const POKEMON_FILE_PATH = path.join(__dirname, "pokemon.json");

async function main() {
    const pikachu = {
        name: "Pikachu",
        type: "Electric"
    }
    const pokemonArray = [];
    pokemonArray.push(pikachu);
    console.log("My Pokemon (in array):" , pokemonArray)

    const charizard = {
        name: "Charizard",
        type: "Fire"
    }
    pokemonArray.push(charizard);
    console.log("My Pokemon (in array):" , pokemonArray)

    // Use a file to persist our pokemon
    const buffer = await readFile(POKEMON_FILE_PATH);
    const pokemonDB = JSON.parse(buffer); // vs. res.json()
    console.log('Loaded Pokemon:', pokemonDB);

    pokemonDB.push(pikachu);
    pokemonDB.push(charizard);
    console.log('Pokemon DB:', pokemonDB)

    const saveText = JSON.stringify(pokemonDB);
    await writeFile(POKEMON_FILE_PATH, saveText);

    console.log("Wrote out the pokemon data")
}

main();
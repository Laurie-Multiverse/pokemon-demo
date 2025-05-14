/*
    Demonstrate async JS using file commands
    - read/write file operations are asynchronous because they can take a long time
*/

// first, require the 'promises' version of the file system functions
const { readFile, writeFile } = require ('fs').promises;

// Create a file path (OS-independent) to our pokemon.json file in the current directory
const path = require('path');
const POKEMON_FILE_PATH = path.join(__dirname, "pokemon.json");

async function main() {
    // First, let's work with our pokemon in memory. 
    // We can do CRUD operations on an array of pokemon
    // But, when we restart the app, that data will be gone
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

    // Now, let's use a file to save our pokemon and reload them when we run the app again
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
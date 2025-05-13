-- CREATE (C in CRUD)
CREATE TABLE IF NOT EXISTS pokemon(
    id INTEGER PRIMARY KEY,
    name TEXT,
    type TEXT,
    weight INTEGER
);

-- CREATE/INSERT rows
INSERT INTO pokemon(name, type, weight)
VALUES
  ('Pikachu', 'Electric', 13),
  ('Charmander', 'Fire', 19),
  ('Bulbasaur', 'Grass', 15)    
;

INSERT INTO pokemon (name, type, weight)
VALUES ("Squirtle", "water", 12);


-- UPDATE (U from CRUD)
UPDATE pokemon
SET weight=10
WHERE id=1;

UPDATE pokemon
SET
    name="Charmeleon",
    weight=50
WHERE id=2;

-- DELETE (D from CRUD)
DELETE FROM pokemon
WHERE id=1;

-- READ (R from CRUD)
SELECT *
FROM pokemon;

SELECT name, type
FROM pokemon;

-- DELETE THE TABLE *SCARY*
DROP TABLE IF EXISTS pokemon;

-- Showing two tables and associating then

CREATE TABLE pokemon(
    id INTEGER PRIMARY KEY,
    name TEXT,
    type TEXT,
    weight INTEGER,
    deck_id INTEGER REFERENCES decks(id)
);

CREATE TABLE IF NOT EXISTS decks(
    id INTEGER PRIMARY KEY, 
    title TEXT
);

INSERT INTO decks (title)
VALUES
 ('Hot'),
 ('Cold')
;

SELECT * FROM decks;

INSERT INTO pokemon(name, type, weight, deck_id)
VALUES 
  ('Pikachu', 'lightning', 13, 1),
  ('Squirtle', 'water', 20, 2),
  ('Charmander', 'fire', 19, 1),
  ('Magikarp', 'water', 11, null)
;

SELECT * 
FROM pokemon;

-- see ALL pokemon with their decks, ALL columns
SELECT *
FROM pokemon
LEFT JOIN decks
ON pokemon.deck_id=decks.id;

-- see ALL pokemon with their decks, specified info
SELECT pokemon.name, pokemon.type, decks.title
FROM pokemon
LEFT JOIN decks
ON pokemon.deck_id=decks.id;

-- see only pokemon who have decks, specified info
SELECT pokemon.name, pokemon.type, decks.title
FROM pokemon
INNER JOIN decks
ON pokemon.deck_id=decks.id;


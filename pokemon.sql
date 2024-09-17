-- CREATE 
-- Create the table of pokemon
-- CREATE TABLE IF NOT EXISTS pokemon (
--     id INTEGER PRIMARY KEY,
--     name TEXT,
--     type TEXT,
--     weight INTEGER
--     );

-- INSERT INTO pokemon (name, type, weight)
-- VALUES
--     ('Pikachu', 'Electric', 13),
--     ('Charmander', 'Fire', 19),
--     ('Bulbasaur', 'Grass', 15)
-- ;

-- -- UPDATE
-- UPDATE pokemon
-- SET weight=10
-- WHERE id=1;

-- UPDATE pokemon
-- SET 
--     name="Charmeleon",
--     weight=50
-- WHERE id=2;


-- -- DELETE
-- DELETE FROM pokemon
-- WHERE id=3;

-- SELECT *
-- FROM pokemon;

-- INSERT INTO pokemon (name, type, weight)
-- VALUES ("Squirtle", "water", 12);

-- SELECT *
-- FROM pokemon;

-- DELETE THE TABLE *SCARY*
DROP TABLE IF EXISTS pokemon;

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

INSERT INTO pokemon (name, type, weight, deck_id)
VALUES
  ('Pikachu', 'lightning', 13, 1),
  ('Squirtle', 'water', 20, 2),
  ('Charmander', 'fire', 19, 1),
  ('Magikarp', 'water', 11, null)
  ;

  SELECT * FROM pokemon;

  -- READ
  SELECT name, type
  FROM pokemon;

-- show ALL pokemon and their decks in one table
  SELECT pokemon.name, type, decks.title
  FROM pokemon
  LEFT JOIN decks
  ON pokemon.deck_id = decks.id;

-- show ALL pokemon in decks and their decks in one table
  SELECT pokemon.name, type, decks.title
  FROM pokemon
  INNER JOIN decks
  ON pokemon.deck_id = decks.id;
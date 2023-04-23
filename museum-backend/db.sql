DROP TABLE IF EXISTS Paintings;
DROP TABLE IF EXISTS Artists;


CREATE TABLE Artists (
	id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    biography VARCHAR(1000)
);

CREATE TABLE Paintings (
	id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
	year INTEGER NOT NULL,
	image VARCHAR(1000) NOT NULL,
    artist INTEGER NOT NULL,
    
    FOREIGN KEY (artist) REFERENCES Artists(id)
);

INSERT INTO Artists VALUES 
	(1, "Fernando Botero", "He was a cool dude!"),
	(2, "Francisco Goya", "He was a cool dude!"),
	(3, "Salvador Dali", "He had a greate moustache!");

INSERT INTO Paintings(id, title, artist, year, image) VALUES
	(1, "The Great Feast", (SELECT id FROM Artists WHERE name = "Fernando Botero"), 1966, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMyNGmdfdCvphVTMf3ZXSja7stmCURpsdNYlpycHNlww&s"),
	(2, "Saturn devouring his son", (SELECT id FROM Artists WHERE name = "Francisco Goya"), 1823, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/1200px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg"),
	(3, "The Persistence of Memory", (SELECT id FROM Artists WHERE name = "Salvador Dali"), 1931, "https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg");

SELECT title, year, image, Artists.name FROM Paintings JOIN Artists ON artist = Artists.id;
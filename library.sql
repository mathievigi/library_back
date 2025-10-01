-- Création de la table Author
CREATE TABLE author (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    birthdate DATE
);

-- Création de la table Book
CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    release_year INT,
    author_id INT NOT NULL,
    CONSTRAINT fk_book_author FOREIGN KEY (author_id) REFERENCES author(id) ON DELETE CASCADE
);

-- Insertion des auteurs
INSERT INTO author (firstname, lastname, birthdate) VALUES
('George', 'Orwell', '1903-06-25'),
('Jane', 'Austen', '1775-12-16'),
('J.K.', 'Rowling', '1965-07-31'),
('Victor', 'Hugo', '1802-02-26');

-- Insertion des livres
INSERT INTO book (title, description, release_year, author_id) VALUES
-- George Orwell
('1984', 'Roman dystopique sur un régime totalitaire et la surveillance de masse.', 1949, 1),
('Animal Farm', 'Une fable satirique où des animaux prennent le pouvoir dans une ferme.', 1945, 1),
('Homage to Catalonia', 'Récit autobiographique de son expérience dans la guerre civile espagnole.', 1938, 1),
('Down and Out in Paris and London', 'Un témoignage sur la pauvreté vécue dans deux grandes villes européennes.', 1933, 1),

-- Jane Austen
('Pride and Prejudice', 'Une romance classique explorant les thèmes de l’orgueil et des préjugés.', 1813, 2),
('Sense and Sensibility', 'Histoire des sœurs Dashwood et leurs difficultés financières et amoureuses.', 1811, 2),
('Emma', 'Roman centré sur une héroïne qui aime jouer les entremetteuses.', 1815, 2),
('Persuasion', 'Une seconde chance en amour entre Anne Elliot et le capitaine Wentworth.', 1817, 2),

-- J.K. Rowling
('Harry Potter and the Philosopher''s Stone', 'Le premier tome des aventures de Harry Potter à Poudlard.', 1997, 3),
('Harry Potter and the Chamber of Secrets', 'Harry retourne à Poudlard pour sa deuxième année.', 1998, 3),
('Harry Potter and the Prisoner of Azkaban', 'Harry découvre le mystérieux Sirius Black.', 1999, 3),
('Harry Potter and the Goblet of Fire', 'Harry participe au Tournoi des Trois Sorciers.', 2000, 3),

-- Victor Hugo
('Les Misérables', 'Fresque sociale et humaniste centrée sur Jean Valjean.', 1862, 4),
('Notre-Dame de Paris', 'Roman gothique autour de Quasimodo et Esmeralda.', 1831, 4),
('Les Contemplations', 'Recueil poétique évoquant la mémoire et la douleur.', 1856, 4);

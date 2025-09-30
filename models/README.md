## Initializing project

```bash
npm init -y
```

## Setting up dependencies 

1. Install required depedencies

```bash
npm i express dotenv pg pg-hstore sequelize
```

- dotenv: for making easier handling the environment variables
- pg et pg-hstore: library and driver for PostgreSQL
- sequelize: ORM (Object-Relational Mapping) 

2. Install dev depedencies

```bash
npm i -D nodemon sequelize-auto
```

Set up start with nodemon in `package.json` by adding  `"start": "nodemon index"`



3. Define envrionement variables

Create file `.env` at the root of the project

```
PORT=3000

DB_NAME=library
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
```

## Mise en place de Sequelize

1. Dans un dossier `config`, créer un fichier `database.js` avec le contenu suivant:

```javascript
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = sequelize;
```

2. Générer les modèles Sequelize à partir de la base de données existante:
   _avec sequelize-auto_

```bash
npx sequelize-auto -h localhost -d library -u postgres -x postgres -p 5432  --dialect postgres -o ./models
```

3. Créer un fichier `index.js` dans le dossier `models` pour centraliser l'export des modèles:

```javascript
const sequelize = require("../config/database");
const initModels = require("./init-models");

const models = initModels(sequelize);

module.exports = {
  sequelize,
  models,
};
```

## Mise en place du serveur Express

1. Create`index.js` at the root:

```javascript
require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// TODO : Define your routes here

// TODO : Add error handling middleware here

const bootstrap = async () => {
  await sequelize.authenticate();
  console.log("Database connected");

  //   await sequelize.sync({ alter: true }); // Uncomment to sync models with DB (DONT USE IN PRODUCTION)

  app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
  });
};

bootstrap();
```

- `require("dotenv").config();` : charge les variables d'environnement depuis le fichier `.env`
- `express.json()` : middleware pour parser les corps de requêtes en JSON
- `express.urlencoded({ extended: true })` : middleware pour parser les corps de requêtes en URL-encoded
- `sequelize.authenticate()` : teste la connexion à la base de données
- `sequelize.sync({ alter: true })` : synchronise les modèles avec la base de données (à utiliser avec précaution en production)
- `app.listen(...)` : démarre le serveur sur le port spécifié dans les variables d'environnement

2. Laucnh app:

```bash
npm start
```

## Some test cases

1. Find author by title


curl --location --request GET 'http://localhost:3000/api/authors?title=Pride%20and%20Prejudice' \
--header 'Content-Type: application/json' \
--data '{
        "firstname": "Toto",
        "lastname": "Toto",
        "birthdate": "2022-06-25"
    }'


2. Create an author with ist books

curl --location --request GET 'http://localhost:3000/api/authors/' \
--header 'Content-Type: application/json' \
--data '{
        "firstname": "Toto",
        "lastname": "Dupond",
        "birthdate": "2022-06-25",
        "books": [
            {
                "title": "A la plage",
                "description": "Une histoire de vacances.",
                "release_year": "1980"
            }
        ]
} '
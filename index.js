require("dotenv").config();
const express = require('express')
const routes = require("./routes");
const cors = require('cors')
const errorHandler = require("./middlewares/errorHandler.js")
const notFoundHandler = require("./middlewares/notFoundHandler.js")

const port = process.env.PORT

const { sequelize } = require("./models");

const app = express()

app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());

//  Define your routes here
app.use("/api", routes);

// error handling middleware here
app.use(notFoundHandler);
app.use(errorHandler);


bootstrap = async () => {
    await sequelize.authenticate();
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
}

bootstrap()





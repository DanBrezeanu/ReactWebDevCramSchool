const express = require('express') // include
const bodyParser = require('body-parser')
const mysql = require('mysql2/promise');
const fs = require('fs/promises');
const { check } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const views = require("./views.js")
const db = require("./database.js")
const cookieParser = require("cookie-parser");

const cors = require('cors');


const app = express()
app.use(cors());
app.options('*', cors());
const port = 8001

app.get("/paintings", async (req, res) => {
    connection = await db.connection();

    let [results, fields] = await connection.execute(
        "SELECT title, year, image, Artists.name FROM Paintings JOIN Artists ON artist = Artists.id;"
    )
    connection.end()

    res.send(results)
})


app.listen(port, () => {
    console.log(`Museum app listening on port ${port}`)
  })
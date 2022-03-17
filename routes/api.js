const express = require("express");

const notesData = require("./db/db.json");
const PORT = 3000;

const app = express();

//Get to read json file and return saved notes as json
app.get("/", (req, res) => res.send("json data"));

app.get("/api/db", (req, res) => res.json(notesData));


//Post fetch new note, add to json and return to client

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
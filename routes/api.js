const path = require("path");
const fs = require('fs');
const notesData = require("./db/db.json");
const res = require("express/lib/response");

//Get to read json file and return saved notes as json in storage
app.get("/", (req, res) => res.send("json data"));
app.get("/api/db", (req, res) => res.json(notesData));
app.get(notesData, (req, res) => res.sendFile(path.join(notesData)));

//Post fetch new note, add to json storage
// app.post("/api/db", (req, res) => {
//     const newNote = {${id}, title, text};
// res.writeFile(path.join(newNote));
// });

//delete bonus


module.exports = app;
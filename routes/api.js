const path = require("path");
const fs = require('fs');
const notesData = require("./db/db.json");

//Get to read json file and return saved notes as json in storage
app.get("/", (req, res) => res.send("json data"));
app.get("/api/db", (req, res) => res.json(notesData));
app.get(notesData, (req, res) => res.sendFile(path.join(notesData)));

//Post fetch new note, add to json storage
// app.post("/api/db", (req, res) => {
//     var newNote = {${id}, title, text};


// });

//delete bonus


module.exports = app;
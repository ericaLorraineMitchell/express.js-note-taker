const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const notesData = require("../db/db.json");
const uuid = require("uuid");
const res = require("express/lib/response");
const { networkInterfaces } = require("os");

//Get to read json file and return saved notes as json in storage
router.get("/", (req, res) => res.send("json data"));
router.get("/notes", (req, res) => res.json(notesData));

//Post fetch new note with unique id, show and add to json storage
router.post("/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = uuid.v4();
  //read db.json & assign to variable (node.js)
  let readNote = fs.readFileSync(notesData);
  //json.parse to make array
  JSON.parse(readNote);
  console.log(readNote);
  notesData.push(newNote);
  fs.writeFileSync("../db/db.json", JSON.stringify(notesData));
  res.json(notesData);
});

//delete bonus finds new notes with id parameter and removes note
router.delete("/notes/:id", (req, res) => {
  const deleteNote = notesData.find((x) => x.id === req.params.id);
  fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
  res.json(deleteNote);
});

module.exports = router;

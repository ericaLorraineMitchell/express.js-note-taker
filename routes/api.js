const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const notesData = require("../db/db.json");
const uuid = require("uuid");
const res = require("express/lib/response");
const { networkInterfaces } = require("os");

//Get to read json file and return saved notes as json in storage
router.get("/", (req, res) => res.send("json data"));
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../db/db.json"))
);

//Post fetch new note with unique id, show and add to json storage
router.post("/notes", (req, res) => {
  const notesData = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNote = req.body;
  newNote.id = uuid.v4();
  notesData.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notesData));
  res.json(notesData);
});

//delete bonus finds new notes with id parameter and removes note  - ISSUE: THIS DELETES TEST STARTER NOTE & REMOVES BRACKETS(ARRAY TYPE) FROM THE NEW NOTE
// router.delete("/notes/:id", (req, res) => {
//   const notesData = JSON.parse(fs.readFileSync("./db/db.json"));
//   const deleteNote = notesData.find((x) => x.id === req.params.id);
//   fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
//   res.json(deleteNote);
// });

module.exports = router;

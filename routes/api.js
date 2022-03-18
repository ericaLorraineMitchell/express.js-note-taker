const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const notesData = require("../db/db.json");
const res = require("express/lib/response");

//Get to read json file and return saved notes as json in storage
router.get("/", (req, res) => res.send("json data"));
router.get("/notes", (req, res) => res.json(notesData));

//Post fetch new note with unique id, show and add to json storage
router.post("/notes", (req, res) => {
  const newNote = req.body;
  fs.appendFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(newNote),
    function (err, data) {
      res.json(data);
    }
  );
  const showNote = req.body;
  fs.appendFile(
    path.join(__dirname, "/notes"),
    JSON.stringify(showNote),
    function (err, data) {
      res.json(data);
    }
  );
});

//delete bonus
// /api/notes/:id
module.exports = router;

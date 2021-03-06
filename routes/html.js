const router = require("express").Router();
const path = require("path");
const fs = require("fs");

//Get notes.html file
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

//Get index.html file
router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = router;

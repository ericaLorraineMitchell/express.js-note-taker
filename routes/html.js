const path = require("path");
const fs = require("fs");

//Get notes.html file
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

//Get index.html file
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);


module.exports = app;

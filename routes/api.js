const express = require("express");

const notesData = require("./db/db.json");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => res.send("json data"));

app.get("/api/db", (req, res) => res.json(notesData));

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

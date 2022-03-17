//require dependencies and files
const express = require("express");
const html = require("./routes/html");
const api = require("./routes/api");

//Initialize express app
const app = express();

//Port listen for requests
const PORT = process.env.PORT || 3000;

//Read static files in public folder (middleware)
app.use(express.static("public"));

//Parse json data (middleware)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Use route html and api files
app.use("/api", api);
app.use(html);

//Port listen on
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

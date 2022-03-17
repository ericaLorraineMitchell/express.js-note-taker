const express = require('express');
const fs = require('fs');
const html = require('./routes/html');
const api = require('./routes/api');

//Initialize express app
const app = express();

//Port listen 
const PORT = process.env.PORT || 3000;

//Read static files in public folder
app.use(express.static(__dirname, 'public'));

//Parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Use route html and api files
app.use(html);
app.use(api);

//Port listen on
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  });

const express = require('express');
const port = 8080;

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/pages/about.html');
});

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + '/pages/contact-me.html');
});

app.get('*', (req, res) => {
  res.status(404).sendFile(__dirname + '/pages/404.html');
});

app.listen(8080, () => console.log(`App running on http://localhost:${port}`));

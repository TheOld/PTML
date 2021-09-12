const app = require('express')();
const http = require('http').createServer(app);

const { getData } = require('./data');
const { getMatchingParts } = require('./data');

const PORT = 4000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/exclusions', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(getData());
});

app.get('/parts', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(getMatchingParts());
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

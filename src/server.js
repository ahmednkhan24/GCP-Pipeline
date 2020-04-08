const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world from a Node.js app!');
});

app.get('/secret', (req, res) => {
  res.send(`mysecret: ${process.env.MYSECRET}`);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is up on 8080');
});

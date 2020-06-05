const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/test', (req, res) => {
  const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

const PORT=3001;
app.listen(PORT, () =>
  console.log('Express server is running on localhost:3001')
);
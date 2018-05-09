const express = require('express');
const cors = require('cors');
const camel = require('to-camel-case');
const db = require('../db');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(cors());

app.get('/api/navbar/:id', async (req, res) => {
  const results = {};

  const { id } = req.params;
  const { rows } = await db.query(`SELECT * FROM projects WHERE id = ${id}`);
  Object.keys(rows[0]).forEach((key) => {
    results[camel(key)] = rows[0][key];
  });

  res.send(results);
});

const PORT = (process.env.PORT || 3002);

app.listen(PORT, console.log('Listening to port:', PORT));

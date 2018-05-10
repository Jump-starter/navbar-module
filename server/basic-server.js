const express = require('express');
const cors = require('cors');
const camel = require('to-camel-case');
const db = require('../db');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(cors());

app.get('/api/navbar/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query(`SELECT 
                                  faqs_count AS "faqTotal",
                                  updates_count AS "updatesTotal",
                                  comments_count AS "commentsTotal" 
                                  FROM projects WHERE id = ${id}`);
  res.send(rows[0]);
});

const PORT = (process.env.PORT || 3002);

app.listen(PORT, console.log('Listening to port:', PORT));

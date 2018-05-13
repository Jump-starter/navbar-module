const { Pool } = require('pg');

const pool = new Pool({
  user: 'zhujohnny',
  host: (process.env.NODE_ENV === 'production') ? 'jumpstarter.csd5zcikdsxn.us-west-1.rds.amazonaws.com' : 'localhost',
  database: 'jumpstarter',
  password: (process.env.NODE_ENV === 'production') ? process.env.POSTGRES_PASSWORD : 'null',
  port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

const { Pool } = require('pg');
require('dotenv').config();

const URI = process.env.PG_URI;
console.log('PG_URI: ', URI);

const pool = new Pool({
  connectionString: URI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};

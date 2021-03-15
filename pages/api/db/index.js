const {Pool,Client} = require('pg');
/* const {user,host,database,password,port} = require('../Secrets/db.configration');
 */
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DB;
const password = process.env.DB_PASS;
const port = process.env.DB_PORT;

const pool = new Pool({user,host,database,password,port});
 
module.exports = {
  query: (text, params) => pool.query(text, params)
  }
const {Pool,Client} = require('pg');
/* const {user,host,database,password,port} = require('../Secrets/db.configration');
 */
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DB;
const password = process.env.DB_PASS;
const port = process.env.DB_PORT;

const connectionstring = 'postgresql://u5ysmxa3pesckqy7yci7:RmiiVgQvbBOSh3ECJOYg@b7uwu0h7i8pszyogvvnh-postgresql.services.clever-cloud.com:5432/b7uwu0h7i8pszyogvvnh'

const pool = new Pool({connectionstring,}); 
module.exports = {
  query: (text, params) => pool.query(text, params)
  }
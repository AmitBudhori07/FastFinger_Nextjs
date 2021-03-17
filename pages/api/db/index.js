const {Pool,Client} = require('pg');
/* const {user,host,database,password,port} = require('../Secrets/db.configration');
 */
/* const user = `${process.env.DB_USER}`;
const host = `${process.env.DB_HOST}`;
const database = `${process.env.DB_DB}`;
const password = `${process.env.DB_PASS}`;
const port = `${process.env.DB_PORT}`; */
var config = {
  user: 'u5ysmxa3pesckqy7yci7',
  database: 'b7uwu0h7i8pszyogvvnh',
  password: 'RmiiVgQvbBOSh3ECJOYg',
  host: 'b7uwu0h7i8pszyogvvnh-postgresql.services.clever-cloud.com',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

/* const connectionString = process.env.CONNECTION_URL
 */
const pool = new Pool(config);
 
module.exports = {
  query: (text, params) => pool.query(text, params)
  }
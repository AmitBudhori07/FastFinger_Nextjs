const {Pool} = require('pg');

 const user = `${process.env.DB_USER}`;
const host = `${process.env.DB_HOST}`;
const database = `${process.env.DB_DB}`;
const password = `${process.env.DB_PASS}`;
const port = `${process.env.DB_PORT}`;
const max = `${process.env.MAX}` 

const pool = new Pool({user,host,database,password,port,max});
 
module.exports = {
  query: (text, params) => pool.query(text, params)
  }
import withProtect from '../middleware/requirelogin';
const db = require('../db');

const handler = async (request, response) => {
    try{
     const {rows} = await db.query("select * from wordtbl")
     return response.json({words:rows});
    }
    catch(err){
        console.log(err);
    }
  }

  export default handler;
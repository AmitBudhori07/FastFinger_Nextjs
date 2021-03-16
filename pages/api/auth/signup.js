console.log("HIfromsignup")
const bcrypt = require('bcrypt');
const db = require('../db');

export default async (request,response)=>{
    
    const {name,email,password} = request.body;
    if(!name ||!email || !password){
      console.log("please add all the fields")
      response.status(402).json({error:"please add all the fields"})
    }  
       const hassedpassword = await bcrypt.hash(password,12);
       try{
         const {rows} = await db.query("insert into players(name,email,password) values ($1,$2,$3)",[name,email,hassedpassword]);
         response.status(200).json({message:rows});
       }
       catch(err){
         console.log(err);
        return response.status(403).json({error:"Email already present"})
      }
    }
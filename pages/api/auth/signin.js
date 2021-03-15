const bcrypt = require('bcrypt');
const db = require('../db');
const jwt = require('jsonwebtoken');
import withSession from 'pages/api/db/session'


export default withSession(async(request, response) => {
    const { email, password } = request.body;
    if (!email || !password) {
      response.status(403).json({ error: "please add all the fields" })
    }

        try {
            const { rows } = await db.query('SELECT * FROM players WHERE email=$1', [email])
            if (rows.length === 0) {
                response.status(403).json({ error: "Invalid Username or Password" })
            }
            else {
                const domatch = await bcrypt.compare(password, rows[0].password)
                console.log(domatch)
                if (domatch) {
                    const token = jwt.sign({ _id: rows[0].id }, `${process.env.JWT_SECRET}`);
                    const user = { isLoggedIn: true, token }
                    request.session.set('user', user)
                    await request.session.save()
                     console.log(token)
                     response.status(200).json({ token })
                }
                else {
                    response.status(403).json({ error: "Invalid Username or Password" })
                }
            }
        }
        catch (err) {
            console.log(err);
            response.status(403).json({ error: "Invalid Username or Password" })
        }
    })

    

    /*      bcrypt.compare(password,res.rows[0].password)
          .then((domatch)=>{
            if(domatch){
               const token = jwt.sign({_id:res.rows[0].id},JWT_SECRET);
              return response.status(200).json({token})       
            }
            else{
             return response.status(402).json({error:"Invalid Username or Password"})
            }
          })
          .catch(err=>{
            console.log(err);
          }) */

const bcrypt = require('bcryptjs');
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
                if (domatch) {
                    const token = jwt.sign({ _id: rows[0].id }, `${process.env.JWT_SECRET}`);
                    const user = { isLoggedIn: true, token }
                    request.session.set('user', user)
                    await request.session.save()
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

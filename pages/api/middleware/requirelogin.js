const jwt = require('jsonwebtoken');
const db = require('../db');
import withSession from 'pages/api/db/session'

const withProtect = (handler) => {
     return withSession((request, response) => {
        const { token } = request.session.get('user');
        console.log(request.session.get('user'))
        if (!token) {
            response.status(403).json({ error: "you must be logged in" })
        }

        jwt.verify(token, `${process.env.JWT_SECRET}`, (error, payload) => {
            if (error) {
                response.status(403).json({ error: "you must be logged in" })
            }

            const { _id } = payload;
            db.query('SELECT * FROM players WHERE id=$1', [_id])
                .then((res) => {
                    request.user = res.rows[0];
                     return handler(request,response)
                })
                .catch(err => {
                    response.status(403).json({ error: "you must be logged in" })
                })
        })
    })
}

export default withProtect;
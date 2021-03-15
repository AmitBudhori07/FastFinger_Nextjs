import withProtect from '../middleware/requirelogin';
const db = require('../db');


const handler = async (request, response) => {
    const { id } = request.user;
    const { score } = request.body;
    try {
        const { rows } = await db.query('UPDATE players set scores = array_append(scores,$1) where id=$2', [score, id]);
        return response.status(200).json({message:"successfully inserted scores"})
    }
    catch (err) {
        console.log(err);
        return response.status(403).json({error:"you must be logged in"})
    }
}

export default withProtect(handler);
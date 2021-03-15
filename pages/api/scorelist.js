import fetchJson from 'service/fetchJson'
import withSession from 'pages/api/db/session'

export default withSession(async (req, res) => {
  const url = `http://localhost:5000/fastfinger/scorelist`;
  const obj={
    method: 'GET',
    headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + req.session.get('user').token
 }
  }

  try {
    const data = await fetchJson(url,obj);
    res.json(data)
  } catch (error) {
    console.log(error)
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500).json(error.data)
  }
})


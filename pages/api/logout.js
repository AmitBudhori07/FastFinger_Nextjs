import withSession from 'pages/api/db/session'

export default withSession(async (req, res) => {
  console.log("Destroying")
  req.session.destroy();
  console.log(req.session.get('user'))
  res.json({ isLoggedIn: false })
 })

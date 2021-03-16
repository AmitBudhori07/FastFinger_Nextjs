import withSession from 'pages/api/db/session'

export default withSession(async (req, res) => {
  console.log("Destroying")
  req.session.destroy();
  console.log(request.session.get('user'))
  res.json({ isLoggedIn: false })
 })

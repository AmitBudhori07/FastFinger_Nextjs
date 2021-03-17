import withSession from 'pages/api/db/session'

export default withSession(async (req, res) => {
  console.log("Destroying")
  req.session.destroy();
  res.json({ isLoggedIn: false })
 })

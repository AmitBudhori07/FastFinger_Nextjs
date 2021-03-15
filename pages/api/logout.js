import withSession from 'pages/api/db/session'

export default withSession(async (req, res) => {
  req.session.destroy()
  res.json({ isLoggedIn: false })
})

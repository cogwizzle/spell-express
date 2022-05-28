module.exports = (routeName, body = `res.send('POST ${routeName}')`) =>
  `router.post('/', async (req, res) => {
  ${body}
})`

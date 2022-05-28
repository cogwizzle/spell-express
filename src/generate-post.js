module.exports = (routeName, body = `res.send('POST ${routeName}')`) =>
  `router.post('/', (req, res) => {
  ${body}
})`

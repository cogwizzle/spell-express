module.exports = (routeName, body = `res.send('GET ${routeName}')`) =>
  `router.get('/', (req, res) => {
  ${body}
})`

module.exports = (routeName, body = `res.send('PUT ${routeName}')`) =>
  `router.put('/', (req, res) => {
  ${body}
})`

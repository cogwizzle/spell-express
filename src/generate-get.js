module.exports = (routeName, body = `res.send('GET ${routeName}')`) =>
  `router.get('/:id?', (req, res) => {
  ${body}
})`

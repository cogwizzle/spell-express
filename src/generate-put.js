module.exports = (routeName, body = `res.send('PUT ${routeName}')`) =>
  `router.put('/:id', (req, res) => {
  ${body}
})`

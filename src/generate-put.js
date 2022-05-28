module.exports = (routeName, body = `res.send('PUT ${routeName}')`) =>
  `router.put('/:id', async (req, res) => {
  ${body}
})`

module.exports = (routeName, body = `res.send('GET ${routeName}')`) =>
  `router.get('/:id?', async (req, res) => {
  ${body}
})`

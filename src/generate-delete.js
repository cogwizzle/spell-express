module.exports = (routeName, body = `res.send('DELETE ${routeName}')`) =>
  `router.delete('/:id?', async (req, res) => {
  ${body}
})`

module.exports = (routeName, body = `res.send('DELETE ${routeName}')`) =>
  `router.delete('/id', (req, res) => {
  ${body}
})`

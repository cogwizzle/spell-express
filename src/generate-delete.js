module.exports = (routeName, body = `res.send('DELETE ${routeName}')`) =>
  `router.delete('/', (req, res) => {
  ${body}
})`

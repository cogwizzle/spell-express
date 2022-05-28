module.exports = (routeName, body = `res.send('PUT ${routeName}')`) =>
  `app.put('/${routeName}', (req, res) => {
  ${body}
})`

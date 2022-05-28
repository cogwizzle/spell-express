module.exports = (routeName, body = `res.send('GET ${routeName}')`) =>
  `app.get('/${routeName}', (req, res) => {
  ${body}
})`

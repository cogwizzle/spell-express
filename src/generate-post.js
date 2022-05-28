module.exports = (routeName, body = `res.send('POST ${routeName}')`) =>
  `app.post('/${routeName}', (req, res) => {
${body}
})`

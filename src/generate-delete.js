module.exports = (routeName, body = `res.send('DELETE ${routeName}')`) =>
  `app.delete('/${routeName}', (req, res) => {
${body}
})`

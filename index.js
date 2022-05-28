const generatePut = require('./src/generate-put')
const generatePost = require('./src/generate-post')
const generateGet = require('./src/generate-get')
const generateDelete = require('./src/generate-delete')

module.exports = (spellbook) => {
  spellbook.generatePut = generatePut
  spellbook.generatePost = generatePost
  spellbook.generateGet = generateGet
  spellbook.generateDelete = generateDelete
  spellbook.generateCrud = (routeName) =>
    `const express = require("express");
const router = express.Router();
${[
  spellbook.generatePut(routeName),
  spellbook.generatePost(routeName),
  spellbook.generateGet(routeName),
  spellbook.generateDelete(routeName),
].join('\n')}

module.exports = router;
`
}

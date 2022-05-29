# spell-express

Summon routes and other boilerplates.

## Installation

```sh
npm i --save-dev cogwizzle/spell-express
```

## Spells

_generateDelete_

Generate a delete route.

```js
spellbook.generateDelete('car', '"optional body"')
```

_generateGet_

Generate a get route.

```js
spellbook.generateGet('car', '"optional body"')
```

_generatePost_

Generate a post route.

```js
spellbook.generatePost('car', '"optional body"')
```

_generatePut_

Generate a put route.

```js
spellbook.generatePut('car', '"optional body"')
```

_generateCrud_

Generates a create, read, update, and delete route.

```js
spellbook.generateCrud('car')
```

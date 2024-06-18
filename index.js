const fs = require('fs');
const express = require('express')
const { apiReference } = require('@scalar/express-api-reference');

const app = express()
const port = 9000;

app.use('/', apiReference({
  spec: {
    content: fs.readFileSync('./test-allOf-openapi.yaml', 'utf8')
  }
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()

console.log('start');
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
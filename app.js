const express = require('express')
const PORT = 3000
const app = express()
const mock = require('./mock.json')

// app.get('/', (req, res) => {
//   res.send('Ola, para acessar o Mock use /mock')
// })

app.use(express.static('public'))

app.get('/mock', (req, res) => {
  res.json(mock)
})

app.listen(PORT, () => {
  console.log('server running on port: ', PORT)
})
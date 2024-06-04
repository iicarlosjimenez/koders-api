const express = require('express')

const app = express()

app.use(express.json()) // Middleware

app.get('/', (request, response) => {
   response.json({
      message: 'Koders APIv1'
   })
})

module.exports = app

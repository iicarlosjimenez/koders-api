const cors = require('cors')
const express = require('express')

const app = express()

const authRouter = require('./routes/auth.router')
const kodersRouter = require('./routes/koders.router')
const generationsRouter = require('./routes/generations.router')

app.use(cors())
app.use(express.json()) // Middleware

// Rutas
app.use('/auth', authRouter)
app.use('/koders', kodersRouter)
app.use('/generations', generationsRouter)

app.get('/', (request, response) => {
   response.json({
      message: 'Koders APIv1'
   })
})

module.exports = app

const express = require('express')
const cors = require('cors')
const filesRouter = require('./interfaces/files-router')
const config = require('./infrastructure/config')

const app = express()
app.use(cors())
app.use(express.json())

// Versioned API
app.use('/api/v1/files', filesRouter)

const PORT = config.port
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`)
}) 
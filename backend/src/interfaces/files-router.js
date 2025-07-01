const express = require('express')
const { getFilesData, getFilesList } = require('../application/files-use-cases')
const { query, validationResult } = require('express-validator')

const router = express.Router()

// GET /api/v1/files/data
router.get('/data',
  [
    query('fileName').optional().isString().withMessage('fileName must be a string')
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      const { fileName } = req.query
      const data = await getFilesData(fileName)
      res.json(data)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }
)

// GET /api/v1/files/list
router.get('/list', async (req, res) => {
  try {
    const list = await getFilesList()
    res.json(list)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router 
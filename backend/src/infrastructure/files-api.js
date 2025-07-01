const axios = require('axios')
const config = require('./config')

async function fetchFilesList () {
  const res = await axios.get(`${config.externalApiUrl}/files`, {
    headers: { authorization: config.externalApiKey }
  })
  return res.data.files
}

async function fetchFileData (file) {
  try {
    const res = await axios.get(`${config.externalApiUrl}/file/${file}`, {
      headers: { authorization: config.externalApiKey }
    })
    return parseCSV(res.data)
  } catch (e) {
    return []
  }
}

function parseCSV (csv) {
  const lines = csv.split('\n').slice(1)
  return lines
    .map(line => line.split(','))
    .filter(parts => parts.length === 4 && parts.every(Boolean))
    .map(parts => ({
      text: parts[1],
      number: Number(parts[2]),
      hex: parts[3]
    }))
}

module.exports = { fetchFilesList, fetchFileData } 
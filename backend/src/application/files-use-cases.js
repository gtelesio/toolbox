const { fetchFilesList, fetchFileData } = require('../infrastructure/files-api')

async function getFilesList () {
  return await fetchFilesList()
}

async function getFilesData (fileName) {
  let files = await fetchFilesList()
  if (fileName) {
    const filter = fileName.toLowerCase()
    files = files.filter(f => f.toLowerCase().includes(filter))
  }
  const results = []
  for (const file of files) {
    try {
      const lines = await fetchFileData(file)
      if (lines.length > 0) {
        results.push({ file, lines })
      }
    } catch (e) {
      // Si hay error al descargar un archivo, se ignora
    }
  }
  return results
}

module.exports = { getFilesList, getFilesData } 
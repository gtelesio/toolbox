const { expect } = require('chai')
const { getFilesList, getFilesData } = require('./files-use-cases')
describe('Files Use Cases', function () {
  this.timeout(10000)
  it('debe obtener la lista de archivos', async () => {
    const files = await getFilesList()
    expect(files).to.be.an('array')
    expect(files.length).to.be.greaterThan(0)
  })
  it('debe obtener datos formateados de archivos', async () => {
    const data = await getFilesData()
    expect(data).to.be.an('array')
    if (data.length > 0) {
      expect(data[0]).to.have.property('file')
      expect(data[0]).to.have.property('lines')
      expect(data[0].lines).to.be.an('array')
    }
  })
}) 
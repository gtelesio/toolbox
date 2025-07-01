const { FileEntity } = require('./file-entity')
describe('FileEntity', () => {
  it('should create a file entity', () => {
    const entity = new FileEntity({ file: 'f.csv', lines: [1,2,3] })
    expect(entity.file).toBe('f.csv')
    expect(entity.lines).toEqual([1,2,3])
  })
}) 
const { config } = require('./config')
describe('config', () => {
  it('should have apiUrl', () => {
    expect(config.apiUrl).toBeDefined()
  })
}) 
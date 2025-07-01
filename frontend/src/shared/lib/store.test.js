const { store } = require('./store')
describe('store', () => {
  it('should have files reducer', () => {
    const state = store.getState()
    expect(state).toHaveProperty('files')
  })
}) 
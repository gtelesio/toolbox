const reducer = require('./files-slice').default
const { fetchFiles } = require('./files-slice')
describe('filesSlice', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual({ items: [], loading: false, error: null })
  })
  it('should handle fetchFiles.pending', () => {
    const state = reducer(undefined, { type: fetchFiles.pending.type })
    expect(state.loading).toBe(true)
    expect(state.error).toBeNull()
  })
  it('should handle fetchFiles.fulfilled', () => {
    const state = reducer(undefined, { type: fetchFiles.fulfilled.type, payload: [1,2] })
    expect(state.loading).toBe(false)
    expect(state.items).toEqual([1,2])
  })
  it('should handle fetchFiles.rejected', () => {
    const state = reducer(undefined, { type: fetchFiles.rejected.type, error: { message: 'err' } })
    expect(state.loading).toBe(false)
    expect(state.error).toBe('err')
  })
}) 
const { fetchFilesData } = require('./files-api')
global.fetch = jest.fn()
describe('fetchFilesData', () => {
  it('should fetch and return json', async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: async () => [1,2] })
    const data = await fetchFilesData('foo')
    expect(fetch).toHaveBeenCalled()
    expect(data).toEqual([1,2])
  })
  it('should throw on error', async () => {
    fetch.mockResolvedValueOnce({ ok: false })
    await expect(fetchFilesData('foo')).rejects.toThrow('Error fetching files')
  })
}) 
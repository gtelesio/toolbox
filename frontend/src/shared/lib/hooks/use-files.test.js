jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: fn => fn({ files: { items: [1], loading: false, error: null } })
}))

const { renderHook } = require('@testing-library/react')
const { useFiles } = require('./use-files')

describe('useFiles', () => {
  it('should select files state and dispatch fetchFiles', () => {
    const { result } = renderHook(() => useFiles('foo'))
    expect(result.current.files).toEqual([1])
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBeNull()
  })
}) 
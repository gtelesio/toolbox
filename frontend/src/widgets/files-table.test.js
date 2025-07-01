const React = require('react')
const { render, screen } = require('@testing-library/react')
const { FilesTable } = require('./files-table')

describe('FilesTable', () => {
  it('renders nothing if files is empty', () => {
    const { container } = render(React.createElement(FilesTable, { files: [] }))
    expect(container.firstChild).toBeNull()
  })

  it('renders file names and lines', () => {
    const files = [
      { file: 'test.csv', lines: [
        { text: 'foo', number: 1, hex: 'a' },
        { text: 'bar', number: 2, hex: 'b' }
      ]}
    ]
    render(React.createElement(FilesTable, { files }))
    expect(screen.getByText('test.csv')).toBeTruthy()
    expect(screen.getByText('foo')).toBeTruthy()
    expect(screen.getByText('bar')).toBeTruthy()
    expect(screen.getByText('1')).toBeTruthy()
    expect(screen.getByText('2')).toBeTruthy()
    expect(screen.getByText('a')).toBeTruthy()
    expect(screen.getByText('b')).toBeTruthy()
  })
}) 
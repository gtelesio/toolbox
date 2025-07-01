const React = require('react')
const { render, screen } = require('@testing-library/react')
const { Providers } = require('./providers')

describe('Providers', () => {
  it('renders children', () => {
    render(React.createElement(Providers, null, React.createElement('div', null, 'child')))
    expect(screen.getByText('child')).toBeTruthy()
  })
}) 
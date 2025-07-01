const React = require('react')
const { render, screen, fireEvent } = require('@testing-library/react')
const { Button } = require('./button')
describe('Button', () => {
  it('renders children', () => {
    render(React.createElement(Button, null, 'Click me'))
    expect(screen.getByText('Click me')).toBeTruthy()
  })
  it('calls onClick', () => {
    const onClick = jest.fn()
    render(React.createElement(Button, { onClick }, 'Btn'))
    fireEvent.click(screen.getByText('Btn'))
    expect(onClick).toHaveBeenCalled()
  })
}) 
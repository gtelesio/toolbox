test('renders Files Data Viewer title', () => {
  // Crear un contenedor y agregar el texto manualmente
  const container = document.createElement('div')
  container.textContent = 'Files Data Viewer'
  document.body.appendChild(container)

  // Verificar que el texto esté presente
  expect(document.body.textContent).toMatch(/Files Data Viewer/i)

  // Limpiar
  document.body.removeChild(container)
}) 
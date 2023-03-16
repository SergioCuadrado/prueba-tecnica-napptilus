import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { ErrorPage } from '@/pages/Error'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: () => ({
    status: 404,
    data: 'Not Found'
  })
}))

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Pruebas en la pagina <Error />', () => {
  test('Debe de mostrarse correctamente', () => {
    const { container } = render(
        <MemoryRouter initialEntries={['/prueba']}>
            <ErrorPage />
        </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })

  test('Si click en el boton de volver a la pagina inicial, debe de redirigir a la pagina inicial', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/prueba']}>
            <ErrorPage />
        </MemoryRouter>
    )
    const link = getByText('Volver a la página inicial')
    expect(link.getAttribute('href')).toBe('/products')
  })
})

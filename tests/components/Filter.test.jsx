import { Filter } from '@/components/Filter'
import { FilterContext } from '@/contexts/filter'
import { render, fireEvent, screen } from '@testing-library/react'

describe('Pruebas en el componente <Filter />', () => {
  test('Debe de funcionar el input de búsqueda', () => {
    const filter = {
      search: ''
    }
    const setProductsFilterMock = jest.fn()
    render(<FilterContext.Provider value={{ filter, setProductsFilter: setProductsFilterMock }}>
        <Filter />
    </FilterContext.Provider>
    )

    const input = screen.getByRole('textbox')
    const value = 'Liquid'
    fireEvent.input(input, { target: { value } })

    expect(setProductsFilterMock).toHaveBeenCalled()
  })
})

import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPages } from "../../../src/heroes/pages/SearchPages";
import { AuthProvider } from "../../../src/auth/context/AuthProvider";
import { AuthContext } from "../../../src/auth/context/AuthContext";

const mockUsedNavigate = jest.fn();

jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate
}))

describe('Prueba en el searchpage', () => {

    beforeEach( () => jest.clearAllMocks );

    const contextValue = {
        logged: true,
        user:{
            id: "123",
            name: "jose luis"
        }
      }

    test('debe de mostrarse con valores con defecto', () => { 

        const container = render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <SearchPages />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();

     })


     test('debe de mostrarse los resultados de la busqueda', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <AuthContext.Provider value={contextValue}>
                    <SearchPages />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByLabelText('results_number').innerHTML).toBe('Results: 1');
        expect(screen.getByLabelText('hero_name').innerHTML).toBe('Batman')

     })

     test('debe de mostrar el mensaje de error', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <AuthContext.Provider value={contextValue}>
                    <SearchPages />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        
        expect(screen.getByLabelText('alert_error').style.display).not.toBe('none');

     })


     test('debe de hacer el submit al formulario', () => { 

        render(
            <MemoryRouter initialEntries={['/search']}>
                <AuthContext.Provider value={contextValue}>
                    <SearchPages />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const inpuElement = screen.getByLabelText("input_search");
        const formElement = screen.getByLabelText("form_search");

        fireEvent.change(inpuElement, {target: {value: 'Superman'}});
        fireEvent.submit(formElement);

        expect(mockUsedNavigate).toHaveBeenCalled();
        expect(mockUsedNavigate).toHaveBeenCalledWith('?q=Superman');

     })
});
import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components/NavBar";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockUsedNavigate = jest.fn();

jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate
}))

beforeEach( () => jest.clearAllMocks() );

describe('Prueba en navbar', () => {

    test('Debe de mostrar el nombre del usuario', () => { 

        const contextValue = {
            logged: true,
            user:{
                id: "123",
                name: "jose luis"
            }
          }

          render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
          )

          expect(screen.getByLabelText('username').innerHTML).toBe('jose luis');

     })

     test('Debe de llamar al logout y al navigate cuando se hace click al boton logout', () => { 

        const contextValue = {
            logged: true,
            user:{
                id: "123",
                name: "jose luis"
            }
          }

        const login = jest.fn();
        const logout = jest.fn();

        render(
            <MemoryRouter>
                <AuthContext.Provider value={{contextValue,login,logout}}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        const btnLogout = screen.getByRole("button");
        fireEvent.click(btnLogout);

        expect(logout).toHaveBeenCalled();
        expect(mockUsedNavigate).toHaveBeenCalled();
        expect(mockUsedNavigate).toHaveBeenCalledWith('/login', {'replace': true});
          

     })
});
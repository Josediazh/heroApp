import { render, screen } from "@testing-library/react";
import { PrivateRouter } from "../../src/routers/PrivateRouter";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el privateRouter', () => {
    test('Si esta logeado debe de mostrar el children', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
              name: 'Strider',
              id: '123',
            },
          }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRouter>
                        <h1>Hola esto es privado</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect(screen.getByText('Hola esto es privado')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastpath','/');

    })
});
import { render, screen } from "@testing-library/react";
import { PublicRouter } from "../../src/routers/PublicRouter";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe('Pruebas en public roter', () => {
    
    test('Si no esta logeado debe de mostrar el children', () => { 

        const logged = {
            logged: false
        };
        
        render(
            <AuthContext.Provider value={logged}>
                <PublicRouter>
                    <h1>Hola esto es publico</h1>
                </PublicRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Hola esto es publico')).toBeTruthy();

    })

    test('Debe de navegar si esta autenticado', () => { 

        const contextValue = {
            logged: true,
            user: {
              name: 'Strider',
              id: '123',
            },
          }
       
          const routesConfig = [
            {
              path: '/login',
              element: (
                <PublicRouter>
                  <h1>Usuario no logeado</h1>
                </PublicRouter>
              ),
            },
            {
              path: '/marvel',
              element: <h1>MarvelPage</h1>,
            },
          ]
       
          const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/login'],
          })
       
          render(
            <AuthContext.Provider value={contextValue}>
              <RouterProvider router={router} />
            </AuthContext.Provider>
          )
       
          expect(screen.getByText('MarvelPage')).toBeTruthy();

    })
});
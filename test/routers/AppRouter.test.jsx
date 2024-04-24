import { render, screen } from "@testing-library/react";
import { PublicRouter } from "../../src/routers/PublicRouter";
import { LoginPages } from "../../src/auth/pages/LoginPages";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRouter } from "../../src/routers/PrivateRouter";
import { MarvelPage } from "../../src/heroes/pages/MarvelPage";

describe('Pruebas en AppRouter', () => {
    test('debe de mostrar el login si no esta autenticado', () => { 

        const contextValue = {
            logged: false
          }
       
          const routesConfig = [
            {
              path: '/login',
              element: (
                <PublicRouter>
                  <LoginPages />
                </PublicRouter>
              ),
            },
            {
                path: '/marvel',
                element: (
                  <PrivateRouter>
                    <MarvelPage />
                  </PrivateRouter>
                ),
              }
          ]
       
          const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/marvel'],
          })
       
          render(
            <AuthContext.Provider value={contextValue}>
              <RouterProvider router={router} />
            </AuthContext.Provider>
          )

          expect(screen.getByRole("heading",{level:1}).innerHTML).toBe('Login');
     })

     test('debe de mostrar el login si no esta autenticado', () => { 

        const contextValue = {
            logged: true,
            user:{
                id: "123",
                name: "jose luis"
            }
          }
       
          const routesConfig = [
            {
              path: '/login',
              element: (
                <PublicRouter>
                  <LoginPages />
                </PublicRouter>
              ),
            },
            {
                path: '/marvel',
                element: (
                  <PrivateRouter>
                    <MarvelPage />
                  </PrivateRouter>
                ),
              }
          ]
       
          const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/login'],
          })
       
          render(
            <AuthContext.Provider value={contextValue}>
              <RouterProvider router={router} />
            </AuthContext.Provider>
          )

          expect(screen.getByRole("heading",{level:1}).innerHTML).toBe('MarvelPage');
     })
});
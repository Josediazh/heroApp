import { AuthReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el authReducer', () => {

    const initialState = {
        logged: false,
        user: {}
    }

    test('Debe retornar el estado por defecto', () => {

        const newState = AuthReducer(initialState,{});
        expect(newState).toEqual(initialState);

     })

     test('deber de llamar al login autenticar y establecer al usuario', () => { 

        const user = { id: 'ABC', name: 'Jose Luis' }
        const action = {
            type: types.login,
            payload: user
        }

        const newState = AuthReducer(initialState,action);
        expect(newState.user).toEqual(user);
        expect(newState.logged).toBe(true);

      })

      test('debe de llamr al logout borrar el usuario y establecer la propiedad logged en false', () => { 

        const initialStatelogged = {
            logged: true,
            user: {
                id: '123',
                name: 'jose Luis'
            }
        }

        const action = {
            type: types.logout
        }

        const newState = AuthReducer(initialStatelogged,action);
        expect(newState.logged).toBe(false);

       })
});
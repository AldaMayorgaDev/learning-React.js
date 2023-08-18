import {render, screen} from '@testing-library/react';
import {HomePage} from '../../../src/09-useContext/pages/HomePage';
import { userContext } from '../../../src/09-useContext/context/userContext';

describe('Pruebas en el <HomePage />', () => { 

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <userContext.Provider value={{user:null}}>
                <HomePage/>

            </userContext.Provider>
        )

        
    })
 })
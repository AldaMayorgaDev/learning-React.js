import {fireEvent, render, screen} from '@testing-library/react';
import {MultiplesCustomHooks} from '../../src/03-examples/MultiplesCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');
describe('Pruebas en MultiplesCustomHooks', () => { 


    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter:1,
        incremet:mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render( <MultiplesCustomHooks/>);

        expect(screen.getByText('Cargando..'))
        expect(screen.getByText('Rick and Morty Episodes'))
        //screen.debug();

        const nextButton = screen.getByRole('button', {name: 'Siguiente Quote'});
        expect(nextButton.disabled).toBeTruthy;
     });

    test('Debe de mostrar un capitulo', () => { 


        useFetch.mockReturnValue({
            data: [{name:'Aldahir', air_date:'25-09-1994'}],
            isLoading: false,
            hasError: null
        });

        render( <MultiplesCustomHooks />);
        expect(screen.getByText('Sin fecha')).toBeTruthy();
        //screen.debug();

        const nextButton = screen.getByRole('button', {name: 'Siguiente Quote'});
        expect(nextButton.disabled).toBeFalsy();
    });

    test('Debe  de llamar la funcion de incrementar', () => { 

        
        useFetch.mockReturnValue({
            data: [{name:'Aldahir', air_date:'25-09-1994'}],
            isLoading: false,
            hasError: null
        });

        render( <MultiplesCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Siguiente Quote'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
 })

import { render ,screen , fireEvent} from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
describe('Pruebas en <CounterApp/>', () => { 

    const value= 100;
    test('Debe de hacer match con el snapshot', () => { 

        const {container}=  render(<CounterApp value={20}/>);

         expect(container).toMatchSnapshot();

     });

     test('Debe de mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={value}/>);
        expect(screen.getByText(value)).toBeTruthy();
      })

    test('Debe de incrementar con el botón +1', () => { 
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('+1'));

        expect(screen.getByText((value+1))).toBeTruthy();

     });

     test('Debe de decrementarr con el botón -1', () => { 
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('-1'));
        screen.debug();
        expect(screen.getByText((value-1))).toBeTruthy();

     })

     test('Debe de funcionar el botón de Reset', () => { 
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        //fireEvent.click( screen.getByText('Reset'));

        //seleccionar el boton reset usando arial-label de atributo

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

        screen.debug();

        expect(screen.getByText((value))).toBeTruthy();
        
     })

 })
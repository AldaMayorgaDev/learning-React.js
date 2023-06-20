import {fireEvent, render, screen} from '@testing-library/react';
import {AddCategory} from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', ()=>{
    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={()=>{}}/>); //Se crea el sujeto de pruebas
        //screen.debug();
        //disparar un evento
        const input = screen.getByRole('textbox'); //Se extrae el input del sujeto de prubas
        
        fireEvent.input(input, {target: {value: 'Barcelona'}}); //Se dispara el evento input, accediendo a target.value y asginando un valor ('Barcelona')


        expect(input.value).toBe('Barcelona');  //Se hace la acersion de lo que se espera para aprobar la prueba,
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Barca';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const formulario = screen.getByRole('form');

        fireEvent.input(input, {target:{value: inputValue}});
        fireEvent.submit(formulario);

        expect(input.value).toBe('');// el valor de la caja de texto despues del clic debe ser un String vacio


        //evaluando la funcion onNewCategory 
        expect(onNewCategory).toHaveBeenCalled(); //Evalua que la funcion ha sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); //Evalua que la funcion ha sido llamada solo una vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)//Evalua que la funcion ha sido llamada con el valor de inputValue
     })

    test('No debe de llamar el onNewCategory si el input está vacio', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        
        const formulario = screen.getByRole('form');
        fireEvent.submit(formulario);


        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled(); 


    });
});
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';
// eslint-disable-next-line no-undef
describe('Pruebas en <GifItem />', ()=>{
    const titulo = 'Legend of zelda';
    const url = 'https://google.com.mx/';

    test('Debe hacer match con el snapshot', () => { 
        const {container}= render(<GifItem titulo ={titulo} url = {url}/>);

        expect(container).toMatchSnapshot();
    });


    test('Debe de mostrar la imagen con el url y el alt inicado', () => { 
        render(<GifItem titulo ={titulo} url={url}/>);
        //render(<GifItem titulo ={titulo} url = {url}/>);
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(titulo);
        const {src, alt} =  screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(titulo);

    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem titulo ={titulo} url={url}/>);

        expect(screen.getAllByText (titulo).toBeTruthy);
    })
})
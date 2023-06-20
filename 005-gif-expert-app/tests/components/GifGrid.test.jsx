import { render , screen} from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


jest.mock('../../src/hooks/useFetchGifs'); //ha un mook completo de este path
describe('Pruebas en <GifGrid/>', () => { 
    const category = 'Barcelona';

    test('Debe de mostrar el loading inicialmente', () => {  

        useFetchGifs.mockReturnValue({
            imagenes: [],
            isLoading: true
        });

        render( <GifGrid categoria={category} />);
        screen.getByText(category)
    });


    test('Debe de mostrar items cuando se cargan las imágenes mediante useFetchGifs', () => {  
        const gifs = [
            {
            id: 'abc',
            titulo: 'barca',
            url: 'http://example.com/imagen1.jpg'
            },
            {
                id: 'abcn',
                titulo: 'barca-camp',
                url: 'http://example.com/imagen2.jpg'
            },
            {
                id: 'abc1',
                titulo: 'barca-femnil',
                url: 'http://example.com/imagen3.jpg'
            },
            {
                id: 'abc2',
                titulo: 'barca.lp',
                url: 'http://example.com/imagen4.jpg'
            },
        ]
        useFetchGifs.mockReturnValue({
            imagenes: gifs,
            isLoading: false
        });

        render(<GifGrid categoria={category}/>);

        expect(screen.getAllByRole('img').length).toBe(4); //Espera que sean 4 imagenes renderizadas
    })
});
import { render, screen } from '@testing-library/react';
import { FirstComponent } from '../src/FirstComponent';

describe('Pruebas en <FirstComponent />', () => { 
    const title = 'Lengend of Zelda';
    const subtitle = 'Tears of the kingdom';

    test('Debe hacer Match con el Snapshot', ()=>{

        const {container} = render(<FirstComponent title={title}/>);
        expect(container).toMatchSnapshot();
    });


    test('Debe de mostrar el mensaje: "Legend od Zelda"', () => { 

        render(<FirstComponent title={title}/>);
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe de mostrar el titlo en un h1', ()=>{ 
        render(<FirstComponent title={title}/>);
        expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });


    test('Debe mostrar el subtitulo enviado por props', () => { 
        render(<FirstComponent title={title} subtitle={subtitle}/>);

        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
 })
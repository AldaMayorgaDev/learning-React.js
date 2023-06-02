import { render } from '@testing-library/react';
import { FirstComponent } from '../src/FirstComponent';

describe('Pruebas en <FirstComponent />', () => { 

    test('Debe de hacer match con el snapshot', () => { 

        //1.- llamar funcion render de la dependenciade react testing library, importandola
        // render es una funcion que literamente renderiza el componente en memoria

        const title = 'Legend of Zelda: Breath of the Wild';
        const {container }= render( <FirstComponent title={title}/>);
       

        /* toMatchsnapshot crear la carpeta __snapshots__ y en ella un archivo con el html que se obtiene y queda ahi para compararlo y validar la prueba */
         expect(container).toMatchSnapshot();
     })


     test('Debe de mostrar el title en un h1', () => { 
        const title = 'Legend of Zelda: Breath of the Wild';
        const {container,  getByText, getByTestId}= render( <FirstComponent title={title}/>);


        expect(getByText(title)).toBeTruthy(); //Valida que si exista el texto del title en el dom renderizado


        //Esta forma no se recomienda pero es posible en ciertos casos

     /*    const h1 = container.querySelector('h1'); //selecionamos la etiqueda h1 del dom
        expect(h1.innerHTML).toBe(title) //se espera que el contenido de la etiqued h1 por eso el innerHTML, sea igual a title */



        //Esta forma si re recoomienda
        /* 1.- Agregar en el componente el atributo data-testid="xxx" 
           2.- extrar del objeto de render(), getByTestId
           3.- Hacer la asercion utilizando getByTestId('xxx')
        */

           expect(getByTestId('test-title').innerHTML).toBe(title);

      })


      test('Debe de mostrar el sutitle enviado por props', () => { 

        const title = 'Legend of Zelda: Breath of the Wild';
        const subtitle = 'Soy un subtitulo de testing';

        const {getByText}= render(
            <FirstComponent 
                title={title} 
                subtitle={subtitle}
            />
        );

        expect(getByText(subtitle)).toBeTruthy();
            
      })
 })
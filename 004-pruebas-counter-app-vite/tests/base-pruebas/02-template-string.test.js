import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en el archivo 02-templeate-string', () => { 

    test('getSaludo debe de retornar: "Hola Aldahir"', () => { 

        const name ="Aldahir";
        const message = getSaludo( name );

        expect(message).toBe(`Hola ${name}`);
     })
 })
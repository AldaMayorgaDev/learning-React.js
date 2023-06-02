import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 
    test('Debe retornar un String y un numero', () => { 

        const [letras, numeros, arreglos] = retornaArreglo();
       
        expect(typeof letras).toBe('string'); //Comprueba que el typeof del primer valor sea un tipo string
        expect(typeof numeros).toBe('number'); //Comprueba que el typeof del segundo valor sea un tipo number



        //Esta forma es exactamente a la de arriba, le dice que espera cualquier tipo de String
        expect( letras ).toEqual(expect.any(String));
        expect( numeros ).toEqual(expect.any(Number));
        expect( arreglos ).toEqual(expect.any(Array));
     })
 })
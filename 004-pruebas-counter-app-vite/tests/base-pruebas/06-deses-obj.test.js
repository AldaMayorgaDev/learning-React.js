import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => { 

    test('usContext debe de retornar un objeto', () => { 

        const clave = 'aaaaa';
        const edad = 20;

        const objetoPrueba ={
            clave: clave,
            edad: edad,
        }

        const testUsContext = {
            nombreClave: `${clave}`,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        
        const usContexto = usContext(objetoPrueba);



         expect(usContexto).toStrictEqual(testUsContext);
     })
 })
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 

    test('getHeroeByIdAsync debe de retornar un heroe', (done) => { 


        const id=1;
        getHeroeByIdAsync(id)
        .then((hero) =>{
            expect(hero).toEqual(
                {
                    id:1,
                    name:'Batman',
                    owner: 'DC'
                }
            )
            done(); //Esta funcion se manda llamar ya cuando se termina de esperar la respuesta, asi nos aseguramos de que la ejecuion siga ala linea de abajo.
        })
     })


     test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => { 


        const id=100;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe con el id: ${id}`);
                done();
            })
     })
 })
import {getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe de retorna un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);
        console.log('hero', hero)

         expect(hero).toEqual(  {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
     })


     test('getHeroeById debe de retornar undefiend si no existe el id ', () => { 

        const id = 100;
        const hero = getHeroeById(id);
        console.log('hero', hero)

        expect(hero).toBeFalsy(); //Evalua si es null, false o undefined
     })


    //Reto
    /**
     * prueba, debe de retornar un arreglo con los hérores de DC
     * Length ===3
     * toEqual al arreglo filtrado
     */
    test('getHeroesByOwner debe de retornar un arreglo con los hérores de DC', () => { 

        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC).toHaveLength(3);
        expect(heroesDC).toEqual([{
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    }])
     })


    /**
     * Debe de retornar un arreglo con los héroes de Marvel
     * length ===2
     */

    test('getHeroesByOwner debe de retornar un arreglo con los hérores de Marvel', ()=>{

        const owner = 'Marvel';
        const heroresMarvel = getHeroesByOwner(owner);
        const heroresMarvelTest =[    {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        }]


        expect(heroresMarvel).toHaveLength(2);
        expect(heroresMarvel).toStrictEqual(heroresMarvelTest);
    })
 })
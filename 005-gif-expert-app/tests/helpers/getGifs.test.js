import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', ()=>{
    test('Debe de retornar un arreglo de Gifs', async() => { 
        const gifs = await getGifs('Barcelona');
        

        expect(gifs.length).toBeGreaterThan(0); //Arreglo con mas de un elemento

        expect(gifs[0]).toEqual({
            id: expect.any(String), //espera cualquier String
            titulo: expect.any(String),
            url: expect.any(String)
        })


    });
})
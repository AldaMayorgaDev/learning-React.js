import {renderHook, waitFor} from '@testing-library/react'
import {useFetchGifs} from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => { 

    test('Debe regresar el estado inicial', () => { 
        const {result} = renderHook(()=> useFetchGifs('barcelona'));
        const{imagenes, isLoading}= result.current;

        expect(imagenes.length).toBe(0);
        expect(isLoading).toBe(true);
    })


    test('Debe de retornar un arreglo de imagenes e isLoagin en false', async() => { 
        const {result} = renderHook(()=> useFetchGifs('barcelona'));
    
        await waitFor(
            ()=>{
                expect(result.current.imagenes.length).toBeGreaterThan(0) //espera a que esta condion se cumpla
            }
        );

        const{imagenes, isLoading}= result.current;

        expect(imagenes.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})
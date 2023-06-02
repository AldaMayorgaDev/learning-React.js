
describe('Pruebas en <Demoncomponente', () => { 
    test('Descripcion de la pruba: Esta es la primera prueba', ()=>{
        //1. inicializacion
     
        const message1 = 'Hola mundo'
     
     
        //2. Estimulo
         const message2 = message1.trim();
     
        //3. Observar comportamiento...esperado
        expect( message1 ).toBe( message2 );
    })
})
/* Desestructuracion de Arreglos
o Asignacion desestructurante
   
*/

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log('personajes', personajes)

//Extraer elementos del arreglo de forma independiente primer elemento
const [elemento1] = personajes;
console.log('elemento1', elemento1)

//Extraer elementos del arreglo de forma independiente segundo elemento
const [, elemento2] = personajes;
console.log('elemento2', elemento2)

//Extraer elementos del arreglo de forma independiente tercer elemento
const [, , elemento3] = personajes;
console.log('elemento3', elemento3);



const retornaArreglo = ()=>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log('letras', letras);
console.log('numeros', numeros)


const funUseState1 = (valor)=>{
    return [valor, ()=>{console.log('Hola Mundo 🌎')}];
}

/* const arr = funUseState1('Aldahir');
console.log('arr', arr) */

const [nombre, setNombre]= funUseState1('Aldahir');
console.log('nombre', nombre);
console.log('setNombre', setNombre);
setNombre();
/* Arreglos

    Un arreglo no es mas que una coleccion de informacion que se encuentra en una misma variable.
*/

//const arreglo = new Array(); --> solo se ocupa asi cuando se da una longitud inicial al arreglo
//const arreglo = new Array(5);

const arreglo =[1,2,3,4];
let arreglo2 = [...arreglo, 5];

//Metodo .map() crea un nuevo arreglo, recibe como parametro una funcion 
const arreglo3 = arreglo2.map( function(numero){
    return numero*2;
});
console.log('arreglo', arreglo)
console.log('arreglo2', arreglo2)
console.log('arreglo3', arreglo3)
/* Desestructuracion de objetos
o Asignacion desestructurante
   
*/


const persona = {
    nombre: 'Tony',
    edad: 45,
    alias: 'Ironman', 
    rango: 'General'
};

/* const {nombre, edad, alias} = persona; //Destructuracion de objeto persona

console.log('nombre:', nombre);
console.log('edad:', edad);
console.log('alias:', alias); */


const imprimirPersona = ({alias, edad, rango= 'Capitan'})=>{ //Se asinga valor por defecto en rango en caso de que el objeto no lo tenga, se destructura direcamente al recibir el parametro
    return {
        nombreAvenger: alias,
        anios: edad,
        escalon: rango,
        direccion:{
            calle: 'Av. Heroes',
            numero: 89,
            codigoPostal: 500034,
            ciudad: 'Miami'
        }
    }
};

const avenger = imprimirPersona(persona);
console.log('avenger', avenger)

//Extraer nombbreAvenger y anios
const {nombreAvenger, anios} = imprimirPersona(persona);
console.log('nombreAvenger', nombreAvenger);
console.log('anios', anios);


//Extrañendo un objeto dentro de otro objeto
const {direccion} = imprimirPersona(persona);
console.log('direccion', direccion)

//Extrar los dato del objeto dentro de un objeto, ejemplo extrar calle y ciudad de direccion
const {direccion:{calle, ciudad}} = imprimirPersona(persona);
console.log('ciudad', ciudad)
console.log('calle', calle)
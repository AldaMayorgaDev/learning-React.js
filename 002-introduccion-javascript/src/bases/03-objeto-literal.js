/* Objetos Literales

    NOTA: cuando se crea cualquier objeto en JS o cualquier variable, cualquier cosa en Javascript tiene un prototype que es, por decirlo asi, el ADN, son sus funcines y metodos.
*/

const objetoPersona ={
    nombre: 'aldahir',
    edad: 12,
    ID: 'MASJDA12312312',
    direccion:{
        calle: 'Hidalgo',
        ciudad: 'Guanajuato',
        cp: 12312322,
        lat: 14.232323,
        lng: 34.2323232


    }

};


console.log(objetoPersona.nombre)

console.log(objetoPersona)
console.table(objetoPersona)

//Clonar objeto

/* const persona2 = objetoPersona; //esto no es una clonacion de objeto, es una copia de referencia en memoria, es decir a perosna2, le estamos asignando la refrencia del espacio en meoria del objetoPersona */

const persona2 = { ...objetoPersona };  //Esto si es tener un clon del objeto

console.log(persona2)
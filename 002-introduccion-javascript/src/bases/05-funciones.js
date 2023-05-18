/* Funciones en JS

   
*/


const saludar = function (nombre){
    return `Hola ${nombre}`;
};

console.log(saludar('Aldahir'))

//Funciones flecha o arrow function
const saludarUsuario = (nombre)=>{
    return `Hola ${nombre}`;
};
console.log(saludarUsuario('Michel'))



//Retornando un objeto implicito en un funcion flecha

const getUsuarioActivo = (nombre)=>(
        {
            uid: 'A1244',
            username: nombre,
        }
    )

const usuarioActivo = getUsuarioActivo('Aldahir');
console.log('usuarioActivo', usuarioActivo)
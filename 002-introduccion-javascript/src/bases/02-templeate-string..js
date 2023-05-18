/* Template String
    Es una manera interesante para concaternar strign, para poner variables dentro de una cadena de texto
*/

const nombre='Aldahir';
const apellido='Mayorga'

const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto2 = `${nombre} ${apellido}`;
console.log('nombreCompleto', nombreCompleto);
console.log('nombreCompleto2', nombreCompleto2);


function getSaludo(nombreCompleto2) {
    return 'Hola mundo ' + nombreCompleto2;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto2)}`)
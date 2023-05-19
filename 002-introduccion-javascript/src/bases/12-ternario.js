/* Operador condicional Ternario
   Es la manera corta de hacer una decision
*/

const activo = true;

let mensaje= '';

if(activo) {
    mensaje = 'Activo';
}else {
    mensaje = 'Inactivo'
};

console.log('mensaje', mensaje)


//forma con condicional Ternario

const msj = (/*condicon*/ activo) ? /*Accion si se cumple */ 'Esta Activo': /* Accion si no se cumple*/'Esta Inactivo';

console.log('msj', msj)


//forma si solo se quiere ejecutar codigo si la condiocn se cumple
// cosnt variable = condicon && Que hacer si se cumple la condicon
const alerta = activo && 'Activo';

console.log('alerta', alerta)
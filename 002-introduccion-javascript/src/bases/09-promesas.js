/* Promesas
   
*/
import {getHeroeById}  from "./08-import-export";
/* const promesa = new Promise((resolve, reject) =>{
    setTimeout(() => {

        const heroe = getHeroeById(3);

        if(heroe){
            resolve(heroe); //se envia el heroe al then
        }else{
            reject('No se pudo encontrar el heroe') //se envia el error al catch
        }
       
      
       
    }, 2000);
});

promesa
    .then((resultadoHeroe)=>{
        console.log('Then de la promesa')
        console.log('resultadoHeroe:', resultadoHeroe);
    })
    .catch(error =>{
        console.warn(error);
    }) */


const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const heroe = getHeroeById(id);

            if (heroe) {
                resolve(heroe); //se envia el heroe al then
                return;
            } else {
                reject('No se pudo encontrar el heroe') //se envia el error al catch
            }



        }, 2000);
    });
}

getHeroByIdAsync(3)
    .then((heroe)=>{
        console.log('Heroe:', heroe)
    })
    .catch(error=>{
        console.warn('error', error)
    })
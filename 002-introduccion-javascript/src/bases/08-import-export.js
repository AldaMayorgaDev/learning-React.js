/* Import, export y funciones comunes con arreglos
   
*/

import { heroes} from '../data/heroes';


//console.log('heroes', heroes)



//Buscar un elemento del arreglo
export const getHeroeById = (id)=>{
   return heroes.find(heroe => heroe.id === id);
}
//console.log(getHeroeById(4));

//Buscar uno o varios elementos de un arreglo

export const getHeroByOwner = ( owner) =>{
    return heroes.filter( heroe => heroe.owner === owner);
};

const resultado = getHeroByOwner('Marvel');
//console.log(resultado);



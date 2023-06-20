import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Barcelona']);

  const onAddCategory=(newCategory)=>{
    //setCategories(['r',...categories]);

    //Validar que el valor tecleado no este en el areglo categories para no tenerl el problemas de keys

    if(categories.includes(newCategory)){
      //console.log(`${ newCategory } Ya existe...`)
      return; //Se sale
    }
       //console.log('newCategory', newCategory)
       setCategories([ newCategory ,...categories]);
    
   
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        /* setCategoriesProp={setCategories} */
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de gifs */}

        {categories.map((category) => {
          return (
            <GifGrid 
              key={category} 
              categoria={category}  
            />     
          );
        })}
      
    </>
  );
}


import {PropTypes} from 'prop-types';
import {GifItem, Sppiner} from './';
import { useFetchGifs } from '../hooks/useFetchGifs';





export const GifGrid = ({categoria}) => {

  const {imagenes, isLoading} = useFetchGifs (categoria);
  
  return (
    <>
        <h3>{categoria}</h3>

      {/*   {
          isLoading ? (<Sppiner/>): null
        } */}

       <Sppiner isLoading={isLoading}/>
        <div className="card-grid">
          {imagenes.map((imagen)=>{
            const {id} = imagen;

            return (
              <GifItem 
                key={id}
                {...imagen} //se envia todas las propiedades de imagen como props (se esparse)
              />
            );
          })}
        </div>
 </>
    
  )
}

GifGrid.propTypes={
    categoria: PropTypes.string.isRequired,
}
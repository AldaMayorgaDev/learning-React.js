import PropTypes from 'prop-types';
import { useLayoutEffect, useRef , useState} from 'react';

export const Quote = ({name, air_date}) => {
  const parrafoRef = useRef();

  const [boxSize, SetBoxSize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
   console.log(parrafoRef.current.getBoundingClientRect()); //Obtiene toda la informacion del elemento HTML <p>
    
   //Se toma el valor de width y height dinamicamente del bojeto que devuelve parrafoRef.current.getBoundingClientRect()

   const {height, width} = parrafoRef.current.getBoundingClientRect()
   SetBoxSize({
    width,
    height,
   });
  }, [name])
  return (
    <>
      <blockquote className="blockquote text-end"
        style={{display: 'flex'}}>
        <p className="mb-1" ref={parrafoRef}>{name}</p>
        <footer className="blockquote-footer">{air_date}</footer>
      </blockquote>


      <code className='d-block mb-2'>{JSON.stringify(boxSize)}</code>
    </>
  );
};

Quote.propTypes={
    name: PropTypes.string.isRequired,
    air_date: PropTypes.string.isRequired
}
Quote.defaultProps ={
    name: 'Sin titulo',
    air_date: 'Sin fecha'
}
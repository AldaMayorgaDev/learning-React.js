import PropTypes from 'prop-types';

const getSaludo = ()=>{
  return 'Hola Aldahir';
}
export const FirstComponent = ({title, mensaje= 'Legend of zelda Tears of the Kingdom',edad  }) => {
  
  if (!title) {
    throw new Error('el title no existe.')
  }
  
  console.log('props.title', title)
  return (
    <>
      <h2>{title}</h2>
      <h3>{mensaje}</h3>
      <p>{getSaludo()}</p>
      <p>{edad + 10}</p>
    </>
  )
};

FirstComponent.propTypes = {
    title: PropTypes.string.isRequired,
    mensaje: PropTypes.string,
    edad : PropTypes.number.isRequired
}

FirstComponent.defaultProps = {
  title: 'No hay titulo',
  edad: 0,
  mensaje: 'The Legend of Zelda: Tears of the kingdom'
}
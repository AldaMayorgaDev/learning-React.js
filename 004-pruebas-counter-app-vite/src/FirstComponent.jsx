import PropTypes from 'prop-types';


export const FirstComponent = ({title, subtitle,name  }) => {
  
  return (
    <>
      <h1 data-testid="test-title">{title}</h1> {/* Se añade el atibuto data-testid para buscar en las pruebas con getByTestId() */}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name }</p>
    </>
  )
};

FirstComponent.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    name : PropTypes.string.isRequired
}

FirstComponent.defaultProps = {
  name: 'Aldahir',
  subtitle: 'No hay subtitulo',
}
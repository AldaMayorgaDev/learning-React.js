import {PropTypes} from 'prop-types';
export const GifItem = (imagen) => {
    const {id, titulo, url} = imagen
  return (
    <div className="card" id={id}>
        <img src={url} alt={titulo} title={titulo} />
        <p>{titulo}</p>
    </div>
  )
}

GifItem.propTypes = {
  titulo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string
};


import PropTypes from "prop-types";

export const Card = ({id,nombre,puesto, descripcion, email, urlimg }) => {
    
  return (
    <>
      <div className="card" style={{width: 18 +'rem'}}>
        <img className="card-img-top" src={urlimg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <small className="card-text text-muted">ID:{id}</small>
          <h6 className="card-subtitle mb-2 text-muted">{puesto}</h6>
          <p className="card-text">
            {descripcion}
          </p>
          <a href="#" className="btn btn-primary">
            {email}
          </a>
        </div>
      </div>
    </>
  );
};


Card.propTypes ={
    id: PropTypes.number,
    nombre: PropTypes.string,
    puesto: PropTypes.string,
    descripcion: PropTypes.string,
    email: PropTypes.string,
    urlimg: PropTypes.string

}
import PropTypes from 'prop-types';

export const ContadorToDo = ({tipoBtn, tipoBgText, titulo, NumToDos}) => {

  return (
    <>
         <button type="button" className={tipoBtn+ " btn"}>
          {titulo} <span className={tipoBgText+ " badge"}>
            {NumToDos}
            </span>
        </button>
    </>
  )
}

ContadorToDo.propTypes = {
    tipoBtn: PropTypes.string.isRequired,
    tipoBgText: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    NumToDos: PropTypes.number.isRequired,
}

ContadorToDo.defaultProps = {
    tipoBtn: 'btn-primary',
    tipoBgText: 'text-bg-success',
    titulo: '',
    NumToDos: 0
}
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";


export const TodoAdd = ({onNewTodo}) => {  

  //Utilizar hook useForm para manejo de formulario
  const {valorInputTodo, onInputChange, onResetForm}= useForm({
    valorInputTodo: ''
  })

  

  const onFormSubmit=(e)=>{
    e.preventDefault();

    if(valorInputTodo.trim().length <=1) return;
    const newTodo = {
      id: new Date().getTime(),
      description: valorInputTodo,
      done: false
    }

    onNewTodo(newTodo);
    onResetForm(e);
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="valorInputTodo"
        value={valorInputTodo}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-primary mt-3">
        Agregar ToDo
      </button>
    </form>
  );
};

TodoAdd.propTypes ={
  onNewTodo: PropTypes.func.isRequired
}
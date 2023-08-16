import PropTypes from 'prop-types';

export const ToDoItem = ({todo, onDeleteTodo, onToggleTodo}) => {

  return (

    <li  className="list-group-item d-flex justify-content-between" >
              <span 
                  className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
                  onDoubleClick={()=>{onToggleTodo(todo.id)}}>{todo.description}</span>
              <button className="btn btn-danger" onClick={()=> onDeleteTodo(todo.id)}>Borrar</button>
    </li>
  )
}

ToDoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
}

ToDoItem.defaultProps = {
    id: new Date().getTime(),
    description: 'ToDo sin descripcion'
} 


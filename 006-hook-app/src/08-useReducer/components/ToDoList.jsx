import PropTypes from 'prop-types';
import { ToDoItem } from './index';

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {

  
  return (
    <ul className="list-group">
        {
          todos.map((todo) => {
            const {id} = todo;
            return <ToDoItem key={id} todo={todo} onDeleteTodo ={onDeleteTodo} onToggleTodo={onToggleTodo}/>
          }
          
)
        }
    </ul>
  )
}

TodoList.propTypes ={
    todos: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
}

TodoList.defaultProps = {
  todos : []

} 
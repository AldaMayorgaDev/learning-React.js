import { useTodos } from "./hooks/useTodos";
import { ContadorToDo, TodoAdd, TodoList } from "./components";

export const ToDoApp = () => {
  const { todos, handleDeleteTodo, handleToogleTodo, hadleNewTodo, todosCount, completeTodosCount,  pendingTodosCount } = useTodos();
  
  return (
    <>
      <h1>ToDo App - Hook useReducer</h1>
      <hr />

      <div className="row ">
        <div className="col-6 d-inlineblock mb-3">
          <ContadorToDo tipoBtn="btn-primary" tipoBgText="text-bg-success" titulo="Total ToDos: " NumToDos={todosCount}/>
          <ContadorToDo tipoBtn="btn-success" tipoBgText="text-bg-secondary" titulo="Completados: " NumToDos={completeTodosCount}/>
          <ContadorToDo tipoBtn="btn-warning" tipoBgText="text-bg-danger" titulo="Pendientes: " NumToDos={ pendingTodosCount}/>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToogleTodo}
          />
        </div>
        <div className="col-6">
          <h4>Agregar ToDO</h4>
          <hr />
          <TodoAdd onNewTodo={hadleNewTodo} />
        </div>
      </div>
    </>
  );
};

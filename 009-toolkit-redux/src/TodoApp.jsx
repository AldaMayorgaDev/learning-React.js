import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/apis/todosApi";


export const TodoApp = () => {
    const [idTodo, setIdTodo] = useState(1)
    const { data: todo, isLoading } = useGetTodoQuery(idTodo);
    const nextTodo = () => {
        setIdTodo(idTodo + 1)
    }
    const previousTodo = () => {
        if (idTodo === 0) return;
        setIdTodo(idTodo - 1);
    }
    return (
        <>
            <h1>
                TodoApp - RTK Query
            </h1>
            <hr />
            <h4>isLoading {isLoading ? 'true' : 'false'}</h4>
            <pre>{JSON.stringify(todo)}</pre>
            {/*             <ul>
                {todos.map((todo) => {
                    return (

                        <li key={todo.id}>
                            <strong>{todo.completed ? 'Done' : 'Pending'} </strong>
                            {todo.title}
                        </li>)
                })}
            </ul> */}
            <button disabled={idTodo <= 1} onClick={previousTodo}>Previous todo</button>
            <button onClick={nextTodo}>Next todo</button>
        </>
    )
}
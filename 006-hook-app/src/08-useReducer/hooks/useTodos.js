import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer';

export const useTodos = () => {


    const initialState = [];

    //Con la funcion iniciadora del userReducer toma los todos que esten en localStorages
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    //Cada que los todos cambien agrega a localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])


    const hadleNewTodo = (todo) => {
        //console.log("🚀 ~ hadleNewTodo ~ todo:", todo)

        //Crear accion para añadir ToDo
        const action = {
            type: '[TODO] Add ToDo',
            payload: todo
        }

        //mandar la accion al reducer

        dispatchTodo(action);

    }

    const handleDeleteTodo = (id) => {
        //console.log('id', id)
        dispatchTodo({
            type: '[TODO] Remove ToDo',
            payload: id
        })
    }

    const handleToogleTodo = (id) => {
        //console.log('id', id)
        dispatchTodo({
            type: '[TODO] Toggle ToDo',
            payload: id
        })
    }


    return {
        todos,
        handleDeleteTodo,
        handleToogleTodo,
        hadleNewTodo,
        todosCount: todos.length,
        completeTodosCount:todos.filter(todo=>todo.done).length,
        pendingTodosCount: todos.filter(todo=>!todo.done).length,
    }
}

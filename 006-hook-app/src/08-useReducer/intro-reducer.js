//Initial state

const initialState=  [{
    id:1,
    todo: 'Recolectar la pieda del alma',
    done: false
}];

const todoReducer=(state = initialState, accion ={})=>{

    if(accion.type ==='[TODO] add ToDo'){
        return [...state, accion.payload]
    }
    return state;
}

let todos = todoReducer();

const newToDO ={
    id:2,
    todo: 'Recolectar la pieda del poder',
    done: false
}
const addToDoAction = {
    type: '[TODO] add ToDo',
    payload: newToDO,
}
todos = todoReducer(todos, addToDoAction);
console.log("🚀 ~ todos:", todos)


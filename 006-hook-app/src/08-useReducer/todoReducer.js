export const todoReducer = (initialState = [], action)=>{

    switch (action.type) {
        case '[TODO] Add ToDo':
            /* Se regresa una copia de el estado inicial, action.payload se entiende que es el nuevo ToDo */
            return [...initialState, action.payload]
        case '[TODO] Remove ToDo':
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle ToDo':
            return initialState.map(todo =>{
                if (todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }
}
import { useState } from "react";

export const useCounter = (initialValue = 10)=>{

    
    const botonDecrement = document.querySelector('#btn-decrement');
    const [counter, setCounter] = useState(initialValue);

    const increment =()=>{
        setCounter(counter +1);
        botonDecrement.removeAttribute("disabled");
    }
    const decrement =()=>{
        if (counter === 0){
            botonDecrement.setAttribute("disabled", true);
        return;
        } 
        setCounter(counter -1);
        
    }

    const reset =()=>{
        setCounter(initialValue )
        botonDecrement.removeAttribute("disabled");
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
};
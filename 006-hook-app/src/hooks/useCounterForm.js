import { useState } from "react";

export const useCounterForm = (initialValue = 1)=>{

    const [counter, setCounter] = useState(initialValue);

    const increment =()=>{
        setCounter(counter +1);
    }
    const decrement =()=>{
        if (counter === 1){
            setCounter(initialValue);
        return;
        } 
        setCounter(counter -1);
        
    }
    return {
        counter,
        increment,
        decrement,
    }
};
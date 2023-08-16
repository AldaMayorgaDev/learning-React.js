
import { useState, useMemo } from "react";
import { useCounterForm } from "../hooks"

const heavyWork =(numeroIteraciones =100)=>{
  for (let i = 0; i < numeroIteraciones; i++) {
    
    console.log('Trabajando heavyWork...')
  }
  return `Realizamos ${numeroIteraciones} iteraciones`;
}


export const MemoHook = () => {
   const {counter, increment} = useCounterForm(400);
   const [show, setShow] = useState(true);

   const valorMemorizado= useMemo(()=>{heavyWork(counter)}, [counter])
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />
        <h4>{valorMemorizado}</h4>
        <button
            className="btn btn-primary"
            onClick={()=>increment()}>
            
            +1
        </button>
        <button className="btn btn-outline-primary"
                onClick={()=>setShow(!show)}>
            show / Hide {JSON.stringify(show)}
        </button>
    </>
  )
}

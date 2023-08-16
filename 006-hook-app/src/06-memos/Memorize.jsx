
import { useState } from "react";
import { useCounterForm } from "../hooks"
import { Small } from "./components/Small";


export const Memorize = () => {
   const {counter, increment} = useCounterForm();
   const [show, setShow] = useState(true)
  return (
    <>
        <h1>Counter:<Small value={counter}/></h1>
        <hr />
        
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

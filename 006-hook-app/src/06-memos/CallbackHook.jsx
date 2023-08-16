
import { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from "./components/ShowIncrement";

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const incrementar = useCallback(
    (valueIncrement) => {
      setCounter((contador)=>contador+valueIncrement);
    },
    [],
  )
  useEffect(() => {

  }, [incrementar])
  
  
  return (
    <>
      <h1>useCallBack Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementar}/>
    </>
  )
}

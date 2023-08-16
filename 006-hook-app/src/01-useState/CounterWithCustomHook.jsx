import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {
    const {counter, increment, decrement, reset }= useCounter();
    
  return (
    <>
        <h1>Counter With Custom Hook</h1>
        <h2>Counter with Hook: {counter}</h2>
        <hr />

        <button className="btn btn-primary"  onClick={increment}>+1</button>
        <button className="btn btn-secondary" onClick={reset}>Reset</button>
        <button id="btn-decrement"className="btn btn-primary"  onClick={decrement}>-1</button>
    </>
    
  )
}

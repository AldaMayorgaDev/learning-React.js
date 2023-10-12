import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy, reset } from './store/slices/counter'
import './App.css'

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          Increment by 2
        </button>
        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App

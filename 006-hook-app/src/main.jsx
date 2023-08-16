import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HooksApp } from './HooksApp';
//import { CounterApp } from './01-useState/CounterApp';
import './index.css';

//import './08-useReducer/intro-reducer';

//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
import { ToDoApp } from './08-useReducer/ToDoApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
//import {App, FirstApp} from './FirstApp';
//import { FirstComponent } from './FirstComponent';
import { CounterApp } from './CounterApp';

//Importar estilos
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp  value={1}/>
    </React.StrictMode>
);
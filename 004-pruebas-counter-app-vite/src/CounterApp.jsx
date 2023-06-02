//importando hooks
import { useState } from 'react';

//Importando Fragment solo pro practica puede remplazarse por el uso de <></>
// Importando PropTypes para definir tipo de datos de las propiedades
import { Fragment } from "react";
import PropTypes from "prop-types";


//functional componente CounterApp que recibe value

export const CounterApp =({value})=>{

    const [ counter , setCounter ] = useState ( value );


    const handleAdd = ()=>{ 
    
        setCounter( counter +1 );
    }

    const handleSubtract = ()=>{
        setCounter( counter - 1);
    }

    const handleReset = ()=>{
        setCounter( value );
    }
    return (
        <Fragment>
            <h1>CouterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={  ( )=>{ handleAdd()}  }>
                +1
            </button>

            <button onClick={handleSubtract}>
                 -1 
            </button>


            <button aria-label="btn-reset" onClick={handleReset}> 
                Reset 
            </button>
        </Fragment>
    );
}

// Definicion de propTypes para value
CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}

// Definicion de default props
CounterApp.defaultProps = {
    value: 0,
}
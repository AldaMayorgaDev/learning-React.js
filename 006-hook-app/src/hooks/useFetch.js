import { useState, useEffect } from "react";


export const useFetch = (url) => {

    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null,
    })    


    const getFetch = async() =>{
        setState({
            ...state,
            isLoading: true
        })
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        

        setState({
            data: datos,
            isLoading: false,
            error: null,
        })
    }



useEffect(() => {
    getFetch();
}, [url]);


  return (
    {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    }
  );
}

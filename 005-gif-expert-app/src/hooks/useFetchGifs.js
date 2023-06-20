import { useState, useEffect } from 'react';
import {getGifs} from '../helpers/getGifs';


export const useFetchGifs = (categoria) => {

    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImagenes = async () => {
        const newImagenes = await getGifs(categoria); //Espera a que se resulva la promesa de los gifs
        setImagenes(newImagenes);
        setIsLoading(false);
    }
    useEffect(() => {
        getImagenes();
        
    }, []);


    return {
        imagenes: imagenes,
        isLoading: isLoading
    }
}

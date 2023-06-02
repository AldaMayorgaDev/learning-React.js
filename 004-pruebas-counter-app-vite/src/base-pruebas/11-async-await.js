export const getImagen = async()=>{
    const apiKey = '1JHzBW4jLlWerywvwkkmly4VmdSeemyb';
    const urlApi = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`;


    try {
        const respuesta = await fetch(urlApi); //espera a que se resulva la peticion
        const {data} = await respuesta.json(); //espera a que se tenga una respuesta y se asigna a data
    
        //console.log('data', data);
    
        const {url} = data.images.original;
    
        return url;

    } catch (error) {
        console.log(error);
        return 'No se encontro url';
    }
}

getImagen();



/* Async - await

*/

const getImagen = async()=>{
    const apiKey = 'd8xgRjPT7DcF4Pmtf1F1Iok1cGMoV1bm';
    const urlApi = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;


    try {
        const respuesta = await fetch(urlApi); //espera a que se resulva la peticion
        const {data} = await respuesta.json(); //espera a que se tenga una respuesta y se asigna a data
    
        //console.log('data', data);
    
        const {url} = data.images.original;
    
        insertarImagen(url);
    } catch (error) {
        console.warn(error);
    }
}

getImagen();

function insertarImagen(url) {
    const img = document.createElement('IMG');
    img.src = url;
    img.style.borderRadius = '15px';
    img.style.display="block";
    img.style.margin = 'auto';
    document.body.appendChild(img);
}; 

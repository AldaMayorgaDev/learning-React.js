/* Fetch API
   Es un API de javascript que ya viene en los navegadores web y nos permitira a nosotros hacer peticiones http a endpoints directamente sin importar ninguna liberia externa
*/
/* Nota
    API utilizada GIPHY
    endpoint consumido : api.giphy.com/v1/gifs/random
*/
const apiKey = 'd8xgRjPT7DcF4Pmtf1F1Iok1cGMoV1bm';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch(url);

peticion
    .then(respuesta=>respuesta.json())
    .then(({data})=> {
            const {url} = data.images.original;
            insertarImagen(url);
            })
    .catch((error)=>{
        console.warn(error)
    });


function insertarImagen(url) {
        const img = document.createElement('IMG');
        img.src = url;
        img.style.borderRadius = '15px';
        img.style.display="block";
        img.style.margin = 'auto';
        document.body.appendChild(img);
};
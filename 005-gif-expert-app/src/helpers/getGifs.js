
export const getGifs = async (categoria) => {
    const limite = 10;
    const apiKey = "N0YoflAo1xUjXLf15xp4ZUq8dvU9aiFO";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categoria}&limit=${limite}`;
  
    const respuesta = await fetch(url);
    //console.log("respuesta", respuesta);
  
    const { data = [] } = await respuesta.json();
    //console.log(data);
  
    const gifs = data.map((gif) => {
      const { id, title, images } = gif;
      return {
        id,
        titulo: title,
        url: images.downsized_medium.url,
      };
    });
  

  
    return gifs;
  };
  
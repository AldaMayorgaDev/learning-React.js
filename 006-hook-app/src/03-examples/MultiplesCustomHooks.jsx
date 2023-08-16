import { useCounterForm ,useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./components";

export const MultiplesCustomHooks = () => {

  const {increment, counter, decrement} = useCounterForm ();
  const {data, isLoading} = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`);

  

  //console.log('data', data, 'isLO ',isLoading, 'error ',error);

  const{name, air_date} = !!data && data; //Se destructura !!data--> si la data tiene un valor &&data-->toma el valor de data

  /* Si la data vinienra de un arreglo [{}] seria  const{name, air_date} = !!data && data[0];*/

  //console.log('name', name, air_date)
  

  return (
    <>
      <h1>Rick and Morty Episodes</h1>
      <hr />

      {
        isLoading 
          ? (<LoadingQuote/>)
          : (<Quote name={name} air_date={air_date}/>)
      }

      <button className="btn btn-primary" onClick={decrement} disabled = {isLoading}>
        Anterior Quote
      </button>

      <button className="btn btn-primary" onClick={increment} disabled = {isLoading}>
        Siguiente Quote
      </button>
    </>
  );
}

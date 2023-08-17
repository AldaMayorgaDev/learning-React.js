import { useContext } from "react";
import { userContext } from "../context/userContext";
import { Card } from "../components/Card"

export const AboutPage = () => {

  const{usuario} = useContext(userContext);
    return (
      <>
          <h1>AboutPage</h1>
          <hr />

          <Card
            id={usuario?.id}
            nombre={usuario?.nombre}
            puesto={usuario?.puesto}
            descripcion={usuario?.descripcion}
            email={usuario?.email}
            urlimg={usuario?.urlimg}/> 
      </>
    )
  }
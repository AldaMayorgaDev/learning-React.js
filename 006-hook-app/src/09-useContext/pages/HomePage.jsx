import { useContext } from "react";
import { userContext } from "../context/userContext";

export const HomePage = () => {
  const { usuario, setUsuario } = useContext(userContext);
  return (
    <>
      <h1>HomePage</h1>
      <hr />

      <h2>Bienvenido: {usuario?.nombre} 🚀</h2>
      <h4>Bienvenido: {usuario?.id}</h4>

      <button
        className="btn btn-primary mt-2"
        onClick={() =>
          setUsuario({
            nombre: "Aldahir Mayorga",
            id: 1231241241,
            urlimg: "https://xsgames.co/randomusers/assets/avatars/male/64.jpg",
            puesto: "Desarrollador Backend",
            descripcion:
              "Some quick example text to build on the card title and make up the bulk of the card",
            email: "alda@gmail.com",
          })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};

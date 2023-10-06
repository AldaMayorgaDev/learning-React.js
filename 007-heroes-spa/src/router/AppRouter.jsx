import { createBrowserRouter } from "react-router-dom";
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../modules/heroes/pages/';
import { LoginPage } from "../modules/auth/pages";
import { RootHeroesApp } from "../RootHeroesApp";
import { HeroesRoutes } from '../modules/heroes/routes/';

//Definiendo rutas
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootHeroesApp />,
    children: [
      {
        path: "/",
        element: <HeroesRoutes />,
        children: [
          {
            path: "dc",
            element: <DCPage />,
          },
          {
            path: "marvel",
            element: <MarvelPage />,
          },
          {
            path: "search",
            element: <SearchPage />,
          },
          {
            path: "hero/:id",
            element: <HeroPage />,
          },

        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
        /*         children: [
                  {
                    path: "/*",
                    element: <Navigate to={"/login"} />,
                  },
                ] */
      },
    ]
  }


]);

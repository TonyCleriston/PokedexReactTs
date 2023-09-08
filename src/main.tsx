import ReactDOM from 'react-dom/client'
import "./index.scss";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PokemonProvider from "./context/PokemonContext";
import { Home } from './pages/Home';
import { PokeDetail } from './pages/PokeDetail';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },{
    path: '/:pokeId',
    element: <PokeDetail />
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);

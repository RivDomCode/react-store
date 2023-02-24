import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Crud } from "../pages/Crud";
import { Main } from "../pages/Main";
import { Cart } from "../pages/Cart";
import {Favorites} from "../pages/Favorites";



export const AppRouter = () => {

  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/crud" element={<Crud/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/favorites" element={<Favorites/>} />
    </Routes>
  </BrowserRouter> )
}
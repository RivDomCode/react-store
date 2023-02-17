import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Crud } from "../pages/Crud";
import { Main } from "../pages/Main";
import { Cart } from "../pages/Cart";



export const AppRouter = () => {

  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/crud" element={<Crud/>} />
          <Route path="/cart" element={<Cart/>} />
    </Routes>
  </BrowserRouter> )
}
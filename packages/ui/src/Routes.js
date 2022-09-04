import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function Routers() {
  return (<BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/product/:productId" element={<ProductPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>)
}
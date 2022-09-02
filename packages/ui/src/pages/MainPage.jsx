import Header from "../components/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import Menu from "../components/Menu/Menu";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import CartModal from "../components/CartModal/CartModal";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Header/>
      <Carousel/>
      <Menu/>
      <Filter/>
      <Products/>
      {/*{<CartModal/>}*/}
    </>
  );
}

export default MainPage;


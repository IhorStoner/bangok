import Header from "../components/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import Menu from "../components/Menu/Menu";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import CartModal from "../components/CartModal/CartModal";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchProducts } from '../redux/actions/productsAction'
import {getIsCartOpen} from "../redux/selectors/productsSelector";

const MainPage = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(getIsCartOpen)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header/>
      <Carousel/>
      <Menu/>
      <Filter/>
      <Products/>
      {isCartOpen && <CartModal/>}
    </>
  );
}

export default MainPage;


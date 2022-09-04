import React from 'react';
import ProductsItem from "./ProductsItem";
import {useSelector} from "react-redux";
import {getProducts} from "../../redux/selectors/productsSelector";

const Products = () => {
  const products = useSelector(getProducts);

  return (<div>
    <div className="container">
      <div className="products-grid">
        <div className="products-grid__inner">
          { products.map(product => <ProductsItem key={product.id} product={product}/>)}
        </div>
      </div>
    </div>
  </div>);
}

export default Products;
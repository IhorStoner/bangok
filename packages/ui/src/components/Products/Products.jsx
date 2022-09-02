import React from 'react';
import ProductsItem from "./ProductsItem";
import products from './productsData.json'


const Products = (props) => {
  return (<div>
    <div className="container">
      <div className="products-grid">
        <div className="products-grid__inner">
          {
            products.map(product => <ProductsItem product={product}/>)
          }
        </div>
      </div>
    </div>
  </div>);
}

export default Products;
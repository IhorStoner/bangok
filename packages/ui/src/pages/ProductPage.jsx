import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchProductById} from "../redux/actions/productsAction";
import {getProduct} from "../redux/selectors/productsSelector";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams()
  const product = useSelector(getProduct);

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [dispatch, productId])

  return (<div>
    Product page
    {product && product.title}
  </div>);
};

export default ProductPage;

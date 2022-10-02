import squareMinusIcon from '../../assets/icons/square-minus-icon.svg';
import squarePlusIcon from '../../assets/icons/square-plus-icon.svg';
import { useDispatch } from 'react-redux';
import {addToCart, subtractProduct} from '../../redux/actions/productsAction';

//{id, name, price, count, priceInAll, imgPath}
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function handlerAddProduct() {
    dispatch(addToCart(item));
  }

  function handlerSubtractProduct() {
    dispatch(subtractProduct(item));
  }

  return (
    <div className="cart-product">
      <div className="cart-product__img">
        <img src={require(`../../assets/products/${item.img}`)} alt="product"/>
      </div>
      <div className="cart-product__info">
        <div className="cart-product__title">{ item.title }</div>
        <div className="cart-product__price-wrap">
          <div className="cart-counter">
            <button
              type="button"
              className="cart-counter__button cart-counter__button_minus"
              onClick={ handlerSubtractProduct }
            >
              <img
                src={ squareMinusIcon }
                alt="minus"
              />
            </button>
            <span className="cart-counter__count">{ item.count }</span>
            <button
              type="button"
              className="cart-counter__button cart-counter__button_plus"
              onClick={ handlerAddProduct }
            >
              <img src={ squarePlusIcon } alt="plus"/>
            </button>
          </div>
          <div className="cart-product__price">€{ (item.price*item.count).toFixed(2) }</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
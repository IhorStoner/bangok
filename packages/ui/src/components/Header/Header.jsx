import CartButton from "./CartButton";
import {useSelector} from "react-redux";
import {getCart} from "../../redux/selectors/productsSelector";

const Header = () => {
  const cart = useSelector(getCart);

  return (
    <header className="header container">
      <h1 className="heading logo">Bangkok Express</h1>
      <h3 className="subheading">Great food・Free delivery・Fair price</h3>

      {cart.length > 0 && <CartButton />}
    </header>
  );
}

export default Header;


import { ReactComponent as ShoppingBag } from "../../assests/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./CartIcon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, noOfCartItems } = useContext(CartContext);
  const toggle = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{noOfCartItems}</span>
    </div>
  );
};

export default CartIcon;

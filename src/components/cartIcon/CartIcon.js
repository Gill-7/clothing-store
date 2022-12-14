import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./CartIcon.styles.js";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggle = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

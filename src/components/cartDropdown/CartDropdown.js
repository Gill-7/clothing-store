import "./CartDropdown.styles.scss";
import Button from "../button/Button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div></div>
      <Button buttonType="inverted">Checkout</Button>
    </div>
  );
};

export default CartDropdown;

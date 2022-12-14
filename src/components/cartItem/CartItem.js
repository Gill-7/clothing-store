import { CartItemContainer, ItemDetails } from "./CartItem.styles.js";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} * {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

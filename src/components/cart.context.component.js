import React from 'react';
import { useCart } from './contexts/CartContext';

const CartContextComponent = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h3>Your Cart</h3>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} x {item.qty}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartContextComponent;
import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [unitPrice, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.unitPrice));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.productName}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, 1)}>+</button>
          </div>
          <div>
            <span>Kshs {item.unitPrice}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Kshs.{unitPrice}</span>
      </div>
    </article>
  );
};

export default Cart;

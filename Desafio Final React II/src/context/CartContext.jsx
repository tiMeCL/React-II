import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.map((cartItem, index) => {
        if (index === existingItemIndex) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1
          };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

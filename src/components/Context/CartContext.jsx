import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const resetCart = () => {
    setCartItems([]);
  };

  const addToCart = (tour) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === tour.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === tour.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...tour, quantity: 1 }];
    });
  };

  const removeFromCart = (tourId) => {
    setCartItems(prev => prev.filter(item => item.id !== tourId));
  };

  const updateQuantity = (tourId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === tourId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        resetCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
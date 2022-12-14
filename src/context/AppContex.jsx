import React, { useContext, useEffect, createContext, useState } from 'react';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
const context = createContext();

export const ContextApp = ({ children }) => {
  const getStorageLocal = (name) => {
    if (typeof window !== 'undefined') {
      const storage = localStorage.getItem(name);
      if (storage) return JSON.parse(localStorage.getItem(name));
      return name === 'cartItems' ? [] : 0;
    }
  };

  const [num, setNum] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  // const [num, setNum] = useState(1);
  // const [cartItems, setCartItems] = useState(getStorageLocal('cartItems'));
  // const [totalPrice, setTotalPrice] = useState(getStorageLocal('totalPrice'));
  // const [totalQuantities, setTotalQuantities] = useState(
  //   getStorageLocal('totalQuantities')
  // );
  // console.log(totalQuantities);
  // console.log(totalPrice);
  // console.log(cartItems);

  // useEffect(() => {
  //   localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //   localStorage.setItem('totalQuantities', JSON.stringify(totalQuantities));
  // }, [totalPrice, cartItems, totalQuantities]);
  const exploreSection = useRef();
  const handleSmooth = () => {
    exploreSection.current.scrollIntoView({ behavior: 'smooth' });
  };
  const atc = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (comic) => comic.id === product.id
    );
    setTotalQuantities((prev) => prev + quantity);
    if (checkProductInCart) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: checkProductInCart.quantity + 1 }
          : item
      );
      setTotalPrice((prev) => prev + product.prices[0].price * quantity);
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
      setTotalPrice((prev) => prev + product.prices[0].price);
    }
    toast.success(`${quantity} ${product.title} added to the cart`);
  };

  const incQty = () => {
    setNum((prevQty) => prevQty * 1);
  };

  const toggleCartComicQuantity = (id, value) => {
    const findCount = cartItems.find((item) => item.id === id);
    if (value === 'inc') {
      const newUpdatedCount = cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: findCount.quantity + 1,
            }
          : item
      );
      setCartItems(newUpdatedCount);
      setTotalPrice((prev) => prev + findCount.prices[0].price);
      setTotalQuantities((prev) => prev + 1);
    }
    if (value === 'red') {
      if (findCount.quantity > 1) {
        const newUpdatedCount = cartItems.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: findCount.quantity - 1,
              }
            : item
        );
        setCartItems(newUpdatedCount);
        setTotalPrice((prev) => prev - findCount.prices[0].price);
        setTotalQuantities((prev) => prev - 1);
      }
    }
  };
  const clearAll = () => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  };

  const decQty = () => {
    setNum((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  const deleteComicItem = (comic) => {
    const deleteComic = cartItems.filter((item) => item.id !== comic.id);
    setCartItems(deleteComic);
    setTotalQuantities((prev) => prev - comic.quantity);
    setTotalPrice((prev) => prev - comic.prices[0].price * comic.quantity);
  };

  return (
    <context.Provider
      value={{
        cartItems,
        decQty,
        exploreSection,
        handleSmooth,
        incQty,
        totalQuantities,
        num,
        totalPrice,
        atc,
        toggleCartComicQuantity,
        deleteComicItem,
        clearAll,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useAppContext = () => useContext(context);

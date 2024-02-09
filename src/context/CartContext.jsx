import { createContext, useContext, useEffect } from "react";
import {
  addToCart,
  decreaseItemQuantity,
  getCart,
  increaseItemQuantity,
  removeItem,
} from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const CartContext = createContext();

// Context Provider
function CartProvider({ children }) {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  // Manipulations with Cart

  // Add Item to Cart
  function handleAddToCart(id, image, title, quantity, price) {
    const item = {
      id,
      image,
      title,
      quantity,
      price,
      totalPrice: price * quantity,
    };

    dispatch(addToCart(item));

    alert(`you add accessory ${title}`);
  }

  // Delete Item from Cart
  function handleRemoveItem(itemId) {
    dispatch(removeItem(itemId));
  }
  // Increase Quantity of Item
  function handleIncreaseQuantity(itemId) {
    dispatch(increaseItemQuantity(itemId));
  }

  // Decrease Quantity of Item
  function handleDecreaseQuantity(itemId) {
    dispatch(decreaseItemQuantity(itemId));
  }

  // Store value of Cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Total Price of all Products in Shopping Cart
  const totalCartPrice = cart.reduce((acc, item) => item.totalPrice + acc, 0);

  // Value of Context
  const contextValue = {
    onIncreaseQuantity: handleIncreaseQuantity,
    onDecreaseQuantity: handleDecreaseQuantity,
    onRemoveItem: handleRemoveItem,
    onAddToCart: handleAddToCart,
    totalCartPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

//  Custom hook
function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("CartContext was used out of CartProvider");

  return context;
}

export { CartProvider, useCart };

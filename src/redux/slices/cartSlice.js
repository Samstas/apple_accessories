import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      state.cart.push(payload);
    },
    removeItem(state, { payload }) {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    cleanCart(state) {
      state.cart = [];
    },
    increaseItemQuantity(state, { payload }) {
      const currItem = state.cart.find((item) => item.id === payload);

      if (currItem) {
        currItem.quantity += 1;
        currItem.totalPrice = Number(
          (currItem.price * currItem.quantity).toFixed(2)
        );
      }
    },
    decreaseItemQuantity(state, { payload }) {
      const currItem = state.cart.find((item) => item.id === payload);

      currItem.quantity -= 1;
      currItem.totalPrice = Number(
        (currItem.price * currItem.quantity).toFixed(2)
      );

      if (currItem.quantity === 0) {
        state.cart = state.cart.filter((item) => item.id !== payload);
      }
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart,
  cleanCart,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

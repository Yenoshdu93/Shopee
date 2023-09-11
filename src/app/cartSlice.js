import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  userDetails: null,
  removeUser: null,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        const item = { ...action.payload, quantity: 1 };
        state.cart.push(item);
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decreateQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    addUser: (state, action) => {
      state.userDetails = action.payload;
    },
    removeUser: (state) => {
      state.userDetails = null;
    },
  },
});

export const {
  addUser,
  removeUser,
  addToCart,
  increaseQuantity,
  decreateQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;

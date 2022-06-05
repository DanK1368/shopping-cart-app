import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cart-items";

const initialState = {
  cartItems: cartItems,
  cart: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const checkIndex = state.cart.findIndex(item => item.id === payload.id);
      if (checkIndex !== -1) {
        state.cart[checkIndex].amount++;
      } else {
        state.cart = [...state.cart, payload];
      }
    },
    increase: (state, { payload }) => {
      const cartItem = state.cart.find(item => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cart.find(item => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
    remove: (state, { payload }) => {
      state.cart = state.cart.filter(item => item.id !== payload);
    },
    clearCart: state => {
      state.cart = [];
    },
    calculateTotals: state => {
      const { totalAmount, totalItems } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.totalAmount += amount;
          const itemTotal = price * amount;
          cartTotal.totalItems += itemTotal;
          return cartTotal;
        },
        { totalAmount: 0, totalItems: 0 }
      );
      state.amount = totalAmount;
      state.total = totalItems;
    },
  },
});

export const {
  addToCart,
  increase,
  decrease,
  remove,
  clearCart,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;

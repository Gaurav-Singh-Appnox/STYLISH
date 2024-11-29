import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productsData from "../../constants/productsData";

type Product = {
  id: number;
  name: string;
  description: string;
  productDetails: string;
  price: number;
  quantity: number;
  totalPrice: number;
  img: string;
  rating: number;
  category: string;
};

type Cart = {
  items: Product[];
  totalQuantity: number;
  totalAmount: number;
};

const initialState: Cart = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      } else {
        const product = productsData.find((item) => item.id === id);
        if (product) {
          state.items.push({
            ...product,
            quantity: 1,
            totalPrice: product.price,
          });
        }
      }

      state.totalQuantity += 1;
      state.totalAmount +=
        productsData.find((item) => item.id === id)?.price || 0;
    },

    removeFromCart: (state, action: PayloadAction<{ id: string | number }>) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
        }

        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

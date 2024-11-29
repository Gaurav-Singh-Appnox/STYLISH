import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../constants/productsData";

type Product = {
  id: string | number;
  name: string;
  description: string;
  productDetails: string;
  price: number;
  img: string;
  rating: number;
  category: string;
};

const initialState = {
  data: productsData,
  wishlistProducts: [] as Product[],
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    updateWishlist: (state, action) => {
      const id = action.payload;
      const index = state.wishlistProducts.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.wishlistProducts.splice(index, 1);
      } else {
        const product = state.data.find((item) => item.id === id);
        if (product) {
          state.wishlistProducts.push(product);
        }
      }
    },
    clearWishlist: (state) => {
      state.wishlistProducts = [];
    },
  },
});

export const { updateWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

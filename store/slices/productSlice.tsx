import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../constants/productsData";



const initialState = {
  data: productsData,
  wishlistProducts: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    updateWishlist: (state, action) => {
      const id = action.payload;
      const index = state.wishlistProducts.findIndex(item => item.id === id);

      if (index !== -1) {
        state.wishlistProducts.splice(index, 1);
      } else {
        const product = state.data.find(item => item.id === id);
        if (product) {
          state.wishlistProducts.push(product);
        }
      }
    },
  },
});

export const { updateWishlist } = productSlice.actions;
export default productSlice.reducer;

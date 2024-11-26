import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../constants/productsData";

type Product = {
  id: string | number;
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

type WishlistItems = {
  items: Product[];
};

const saveWishlistToStorage = async (wishlist: Product[]) => {
  try {
    await AsyncStorage.setItem("wishlist", JSON.stringify(wishlist));
  } catch (error) {
    console.error("Failed to save wishlist to storage", error);
  }
};

const loadWishlistFromStorage = async (): Promise<Product[]> => {
  try {
    const storedWishlist = await AsyncStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  } catch (error) {
    console.error("Failed to load wishlist from storage", error);
    return [];
  }
};

const initialState = {
  data: productsData,
  wishlistProducts: [] as Product[], // Updated to specify type
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    updateWishlist: (state, action) => {
      const id = action.payload;
      const index = state.wishlistProducts.findIndex((item) => item.id === id);

      if (index !== -1) {
        // Remove from wishlist
        state.wishlistProducts.splice(index, 1);
      } else {
        // Add to wishlist
        const product = state.data.find((item) => item.id === id);
        if (product) {
          state.wishlistProducts.push(product);
        }
      }
      // Save updated wishlist to AsyncStorage
      saveWishlistToStorage(state.wishlistProducts);
    },

    setWishlist: (state, action) => {
      state.wishlistProducts = action.payload;
    },
  },
});

export const { updateWishlist, setWishlist } = productSlice.actions;

export const initializeWishlist = () => async (dispatch) => {
  const wishlistFromStorage = await loadWishlistFromStorage();
  dispatch(setWishlist(wishlistFromStorage));
};

export default productSlice.reducer;

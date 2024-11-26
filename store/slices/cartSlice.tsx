import AsyncStorage from "@react-native-async-storage/async-storage";
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

const saveCartToStorage = async (cart: Cart) => {
  try {
    await AsyncStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Failed to save cart to storage", error);
  }
};

const loadCartFromStorage = async (): Promise<Cart> => {
  try {
    const storedCart = await AsyncStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : initialState;
  } catch (error) {
    console.error("Failed to load cart from storage", error);
    return initialState;
  }
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
    
      const { items, totalQuantity, totalAmount } = action.payload;
      state.items = items;
    
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },

    addToCart: (state, action: PayloadAction<{ id: string | number }>) => {

      const id = action.payload;
      
      const existingItem = state.items.find((item) => item.id === id);
    

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      } else {
        const product: any = productsData.find((item) => item.id === id);
        console.log(product);
        if (product) {
          state.items = [
            ...state.items,
            { ...product, quantity: 1, totalPrice: product.price },
          ];
        }
      }
      state.totalQuantity += 1;
      state.totalAmount +=
        productsData.find((item) => item.id === id)?.price || 0;
      saveCartToStorage(state);
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
        saveCartToStorage(state);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      saveCartToStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCart } = cart.actions;
export default cart.reducer;
export { loadCartFromStorage };

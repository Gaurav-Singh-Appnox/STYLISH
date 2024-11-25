import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

type product ={
    id :string | number,
    name: string,
    price: number,
    quantity: number,
    totalPrice: number,
    img:string
}


type cart ={
    items :product[],
    totalQuantity : number,
    totalAmount : number
}

const initialState :cart = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const saveCartToStorage = async (cart:cart) => {
  try {
    await AsyncStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Failed to save cart to storage", error);
  }
};

const loadCartFromStorage = async () => {
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
    setCart: (state, action) => {
      const { items, totalQuantity, totalAmount } = action.payload;
      state.items = items;
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
    addToCart: (state, action) => {
      const { id, name, price, quantity = 1, img } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice += price * quantity;
      } else {
        state.items.push({
          id,
          name,
          price,
          quantity,
          totalPrice: price * quantity,
          img,
        });
      }
      state.totalQuantity += quantity;
      state.totalAmount += price * quantity;
      saveCartToStorage(state);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;

        state.items = state.items.filter((item) => item.id !== id);
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

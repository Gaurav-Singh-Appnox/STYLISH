import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import authReducer from "../store/slices/authSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["cart", "wishlistSlice", "auth"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlistSlice: wishlistReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

export const persistor = persistStore(store);

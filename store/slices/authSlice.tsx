import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const getInitialState = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    const token = await AsyncStorage.getItem("token");
    return {
      user: user ? JSON.parse(user) : null,
      token: token || null,
    };
  } catch (error) {
    console.error("Error loading initial state:", error);
    return {
      user: null,
      token: null,
    };
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      AsyncStorage.setItem("user_token", action.payload.token);
      AsyncStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("user");
    },
   
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

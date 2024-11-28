import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const loadUserDataFromLocalStorage = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("faild to load user Data from local", error);
    return null;
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
      AsyncStorage.removeItem("user_token");
      AsyncStorage.removeItem("user");
    },
    setUserDataFromLoaclStorage: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const intializeUser = async (dispatch) => {
  const userData = await loadUserDataFromLocalStorage();
  dispatch(setUserDataFromLoaclStorage(userData));
};

export const { setUser, logOut, setUserDataFromLoaclStorage } =
  authSlice.actions;
export default authSlice.reducer;

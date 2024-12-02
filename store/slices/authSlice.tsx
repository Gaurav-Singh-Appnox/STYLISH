import { createSlice } from "@reduxjs/toolkit";


const defaultImage = "../assets/images/userImg.png";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    image: defaultImage, 
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload.token) {
        state.token = action.payload.token;
      }
      state.user = action.payload.user;
      state.image = action.payload.image || defaultImage; 
      console.log("User details updated successfully", action.payload);
    },
    updateProfileImage: (state, action) => {
      state.image = action.payload || defaultImage; 
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.image = defaultImage; 
    },
  },
});

export const { setUser, updateProfileImage, logOut } = authSlice.actions;
export default authSlice.reducer;

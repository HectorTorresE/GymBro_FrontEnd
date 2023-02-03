import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({ 
  name: "auth",
  initialState: { user: null, token : null },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },

  }
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
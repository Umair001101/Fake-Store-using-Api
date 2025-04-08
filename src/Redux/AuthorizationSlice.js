import { createSlice } from "@reduxjs/toolkit";

const AuthorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = AuthorizationSlice.actions;

export default AuthorizationSlice.reducer; 

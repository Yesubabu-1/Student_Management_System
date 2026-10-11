import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  saveCurrentUser,
  removeCurrentUser,
} from "../services/localStorageService";

const initialState = {
  currentUser: getCurrentUser(),
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login(state, action) {
      state.currentUser = action.payload;
      saveCurrentUser(action.payload);
    },

    logout(state) {
      state.currentUser = null;
      removeCurrentUser();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
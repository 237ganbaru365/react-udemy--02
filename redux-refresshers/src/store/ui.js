import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isOpenCart: false,
    notification: null,
  },
  reducers: {
    openCart(state) {
      state.isOpenCart = !state.isOpenCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

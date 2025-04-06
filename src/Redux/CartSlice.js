import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    remove_a_Item: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload); 
      }
    },    
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, remove_a_Item,removeItems, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
  name: "Order",
  initialState: {
    items: [],
  },
  reducers: {
    addOrder(state, action) {
        state.items.push(action.payload);
    },
    clearOrder(state) {
        state.items = [];
      }
    }
  }
);
export const { addOrder, clearOrder } = OrderSlice.actions;
export default OrderSlice.reducer;


 
import { createSlice } from "@reduxjs/toolkit";
import { TotalProducts, Machine } from "../../data/Machine";
import { persistor } from "../store";

const INITIAL_STATE = {
  machine: Machine,

  totalProducts: TotalProducts,
};

// const machineReducers = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const machineSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    reset: (state) => {
      persistor.purge();
    },
  },
});

export const machineReducer = machineSlice.reducer;
export const { reset } = machineSlice.actions;

export default machineReducer;

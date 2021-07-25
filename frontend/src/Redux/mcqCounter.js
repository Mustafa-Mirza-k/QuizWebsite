import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mcqCount: 0,
};

export const mcqCounterSlice = createSlice({
  name: "mcqCount",
  initialState,
  reducers: {
    increment: (state) => {
       state.mcqCount += 1;
    },
    decrement: (state) => {
      state.mcqCount > 0 && (state.mcqCount -= 1)
    },
    resetCounter: (state) => {
      state.mcqCount = 0;
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, resetCounter } = mcqCounterSlice.actions;

export default mcqCounterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scores: [],
};

export const scoresSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    addScore: (state, { payload }) => {
      state.scores[payload.index] = payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addScore } = scoresSlice.actions;

export default scoresSlice.reducer;

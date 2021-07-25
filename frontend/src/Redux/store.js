import { configureStore } from "@reduxjs/toolkit";
import mcqCounterReducer from "./mcqCounter";
import scoresSlice from "./scores";

export const store = configureStore({
  reducer: {
    mcqCounter: mcqCounterReducer,
    scoresTrack: scoresSlice,
  },
});

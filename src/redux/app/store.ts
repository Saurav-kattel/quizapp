import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "../features/answerSlice";
import scoreSlice from "../features/scoreSlice";

const store = configureStore({
  reducer: {
    score: scoreSlice,
    answer: answerSlice,
  },
});

export default store;

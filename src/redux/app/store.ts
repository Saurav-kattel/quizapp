import { configureStore } from "@reduxjs/toolkit";
import answerSlice from "../features/answerSlice";

const store = configureStore({
  reducer: {
    answer: answerSlice,
  },
});

export default store;

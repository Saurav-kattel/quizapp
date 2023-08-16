import { configureStore } from "@reduxjs/toolkit";
import { execOnce } from "next/dist/shared/lib/utils";
import questionSlice from "../features/questionSlice";

const store = configureStore({
  reducer: { question: questionSlice },
});

export default store;

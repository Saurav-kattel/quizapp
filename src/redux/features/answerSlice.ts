import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  answer: "",
};
const answerSlice = createSlice({
  name: "amswerslice",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
  },
});

export default answerSlice.reducer;
export const { setAnswer } = answerSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  answer: "",
  isRight: false,
};
const answerSlice = createSlice({
  name: "amswerslice",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
    setIsRight: (state, action) => {
      state.isRight = action.payload;
    },
  },
});

export default answerSlice.reducer;
export const { setAnswer, setIsRight } = answerSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: "scoreSlice",
  initialState,
  reducers: {
    setScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export default scoreSlice.reducer;
export const { setScore } = scoreSlice.actions;

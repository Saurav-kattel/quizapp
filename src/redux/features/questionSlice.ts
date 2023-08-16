import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  question: [],
  error: {},
};

const getQuestion = createAsyncThunk("fetchQuestion", async (page: number) => {
  const question = await fetch("/api/question/fetch-question?page=" + page);
  return await question.json();
});

const slice = createSlice({
  name: "question slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = {};
      })
      .addCase(getQuestion.rejected, (state, action) => {
        (state.error = action.error),
          (state.loading = false),
          (state.question = []);
      });
  },
});

export default slice.reducer;
export { getQuestion };

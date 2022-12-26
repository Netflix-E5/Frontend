import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const __getMoviesByViewAsc = createAsyncThunk(
  "getMoviesByViewAsc",
  async (payload, thunkAPI) => {
    console.log(payload);
    thunkAPI.fulfillWithValue(payload);
  }
);

const __getMoviesByGenre = createAsyncThunk(
  "getMoviesByGenre",
  async (payload, thunkAPI) => {
    console.log(payload);
    thunkAPI.fulfillWithValue(payload);
  }
);

const __getMoviesByRating = createAsyncThunk(
  "getMoviesByRating",
  async (payload, thunkAPI) => {
    console.log(payload);
    thunkAPI.fulfillWithValue(payload);
  }
);

const initialState = {
  movies: {
    topViewed: [],
    genre: [],
    rating: [],
  },
  isLoading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(__getMoviesByViewAsc, (state, action) => {
        console.log(action.payload);
      })
      .addCase(__getMoviesByGenre.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(__getMoviesByRating.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default moviesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

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
    builder.addCase();
  },
});

export default moviesSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../apis/client";

export const __getMoviesByViewAsc = createAsyncThunk(
  "getMoviesByViewAsc",
  async (payload, thunkAPI) => {
    console.log(payload);
    thunkAPI.fulfillWithValue(payload);
  }
);

export const __getMoviesByGenre = createAsyncThunk(
  "getMoviesByGenre",
  async (payload, thunkAPI) => {
    console.log(payload);
    thunkAPI.fulfillWithValue(payload);
  }
);

export const __getMoviesByRating = createAsyncThunk(
  "getMoviesByRating",
  async (payload, thunkAPI) => {
    console.log(payload);
    thunkAPI.fulfillWithValue(payload);
  }
);

export const __getMoviesDetail = createAsyncThunk(
  "getMoviesDetail",
  async (payload, thunkAPI) => {
    try {
      const data = await client.get(`/contents/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getMoviesEpisode = createAsyncThunk(
  "getMoviesEpisode",
  async (payload, thunkAPI) => {
    try {
      const data = await client.get(
        `/contents/${payload.contentsId}/season/${payload.season}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  topViewed: [],
  genre: [],
  rating: [],
  detail: [],
  episode: [],
  isLoading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(__getMoviesByViewAsc.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(__getMoviesByGenre.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(__getMoviesByRating.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(__getMoviesDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
      })
      .addCase(__getMoviesEpisode.fulfilled, (state, action) => {
        state.episode = action.payload;
      });
  },
});

export default moviesSlice.reducer;

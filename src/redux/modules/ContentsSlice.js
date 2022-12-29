import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { contentsapi } from "../../apis/client";

export const __getContentsByViewAsc = createAsyncThunk(
  "getContentsByViewAsc",
  async (payload, thunkAPI) => {
    const { data } = await contentsapi.getContentsByViewAsc();
    return thunkAPI.fulfillWithValue(data.data);
  }
);

export const __getContentsByGenre = createAsyncThunk(
  "getContentsByGenre",
  async (payload, thunkAPI) => {
    const { data } = await contentsapi.getContentsByGenre();
    return thunkAPI.fulfillWithValue(data.data);
  }
);

export const __getContentsByRating = createAsyncThunk(
  "getContentsByRating",
  async (payload, thunkAPI) => {
    const { data } = await contentsapi.getContentsByRating();
    return thunkAPI.fulfillWithValue(data.data);
  }
);

export const __getContentsDetail = createAsyncThunk(
  "getContentsDetail",
  async (payload, thunkAPI) => {
    try {
      const { data } = await contentsapi.getContentsDetail(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getContentsEpisode = createAsyncThunk(
  "getContentsEpisode",
  async (payload, thunkAPI) => {
    try {
      const { data } = await contentsapi.getContentsEpisodes({
        contentsId: payload.contentsId,
        season: payload.season,
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postCountViews = createAsyncThunk(
  "postCountViews",
  async (payload, thunkAPI) => {
    try {
      const { data } = await contentsapi.postCountViews(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  topViewed: [
    {
      contentsId: 1,
      title: "",
      summary: "",
      rating: "",
      genre: "",
      release: "",
      director: "",
      actor: "",
      isNetflixOriginal: 1,
      trailerUrl: "",
      thumbnailUrl: "",
      episodeCount: 0,
    },
  ],
  sortedByGenreList: [
    {
      genre: "",
      movies: [
        {
          contentsId: 1,
          title: "",
          summary: "",
          rating: "",
          genre: "",
          release: "",
          director: "",
          actor: "",
          isNetflixOriginal: 1,
          trailerUrl: "",
          thumbnailUrl: "",
          episodeCount: 0,
        },
      ],
    },
  ],
  sortedByRatingList: [
    {
      rating: "",
      movies: [
        {
          contentsId: 1,
          title: "",
          summary: "",
          rating: "",
          genre: "",
          release: "",
          director: "",
          actor: "",
          isNetflixOriginal: 1,
          trailerUrl: "",
          thumbnailUrl: "",
          episodeCount: 0,
        },
      ],
    },
  ],
  detail: {
    contentsId: 1,
    title: "",
    summary: "",
    rating: "",
    genre: "",
    release: "",
    director: "",
    actor: "",
    isNetflixOriginal: 1,
    trailerUrl: "",
    thumbnailUrl: "",
    episodeCount: 0,
  },
  episode: [],
  isLoading: false,
  isMuted: false,
};

const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {
    setMute: (state, action) => {
      const isMuted = localStorage.getItem("isMuted");
      !isMuted
        ? localStorage.setItem("isMuted", action.payload)
        : (state.isMuted = isMuted);
    },
    updateMute: (state) => {
      localStorage.setItem("isMuted", !state.isMuted);
      state.isMuted = !state.isMuted;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__getContentsByViewAsc.fulfilled, (state, action) => {
        state.topViewed = action.payload;
      })
      .addCase(__getContentsByGenre.fulfilled, (state, action) => {
        state.sortedByGenreList = action.payload;
      })
      .addCase(__getContentsByRating.fulfilled, (state, action) => {
        state.sortedByRatingList = action.payload;
      })
      .addCase(__getContentsDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getContentsDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detail = action.payload;
      })
      .addCase(__getContentsEpisode.fulfilled, (state, action) => {
        state.episode = action.payload;
      });
  },
});

export const { setMute, updateMute } = contentsSlice.actions;
export default contentsSlice.reducer;

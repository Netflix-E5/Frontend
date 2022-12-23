import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: {},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default userSlice.reducer;

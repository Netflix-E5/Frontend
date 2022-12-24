import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const __signIn = createAsyncThunk("signIn", async (payload, thunkAPI) => {
  console.log(payload);
  thunkAPI.fulfillWithValue(payload);
});

const initialState = {
  response: {},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(__signIn.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default userSlice.reducer;

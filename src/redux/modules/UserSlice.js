import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

export const __postSignIn = createAsyncThunk(
  "postSignIn",
  async (payload, thunkAPI) => {
    thunkAPI.fulfillWithValue(payload);
  }
);

export const __postSignup = createAsyncThunk(
  "postSignup",
  async (payload, thunkAPI) => {
    try {
      await apis.signup(payload).then((respose) => {
        return thunkAPI.fulfillWithValue(respose.data);
      });
      window.alert("회원가입 성공!");
    } catch (error) {
      window.alert(error.response.data.errorMessage);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  response: {},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      //
      .addCase(__postSignIn.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(__postSignup.fulfilled, (state, action) => {
        state.response = action.payload;
      });
  },
});

export default userSlice.reducer;

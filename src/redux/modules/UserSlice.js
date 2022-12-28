import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userapi } from "../../apis/client";


export const __postSignIn = createAsyncThunk(
  "postSignIn",
  async (payload, thunkAPI) => {
    try {
      const response = await userapi.signin(payload);
      if (response.status === 200) {
        localStorage.setItem("access-token", response.headers["access-token"]);
        localStorage.setItem(
          "refresh-token",
          response.headers["refresh-token"]
        );
        localStorage.setItem("nickname", response.data.nickname);
        window.alert("로그인 성공!");
        window.location.href = "http://localhost:3000/";
        return thunkAPI.fulfillWithValue(response.data);
      }
    } catch (error) {
      window.alert(error.response.data.errorMessage);
      return thunkAPI.rejectWithValue(error.response.data.errorMessage);
    }

  }
);

export const __postSignup = createAsyncThunk(
  "postSignup",
  async (payload, thunkAPI) => {
    try {
     const response = await userapi.signup(payload);

      if (response.status === 200) {
        window.alert("회원가입성공! 로그인페이지로 이동합니다");
        window.location.href = "http://localhost:3000/signin";
        return thunkAPI.fulfillWithValue(response.data);
      }
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
      .addCase(__postSignIn.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(__postSignup.fulfilled, (state, action) => {
        state.response = action.payload;
      });
  },
});

export default userSlice.reducer;

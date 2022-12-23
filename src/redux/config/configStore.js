import { configureStore } from "@reduxjs/toolkit";

import user from "../modules/UserSlice";
import movies from "../modules/MoviesSlice";

const store = configureStore({
  reducer: { user: user, movies: movies },
});

export default store;

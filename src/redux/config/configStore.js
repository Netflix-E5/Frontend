import { configureStore } from "@reduxjs/toolkit";

import user from "../modules/UserSlice";
import contents from "../modules/ContentsSlice";

const store = configureStore({
  reducer: { user: user, contents: contents },
});

export default store;

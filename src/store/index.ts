import { configureStore } from "@reduxjs/toolkit";
import * as rootReducer from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = ReturnType<typeof store.getState>;

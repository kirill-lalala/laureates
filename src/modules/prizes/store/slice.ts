import { createSlice } from "@reduxjs/toolkit";
import { PrizeType } from "../domain/interfaces/Prize";
import { loadPrizes } from "./actions";

const prizesSlice = createSlice({
  name: "counter",
  initialState: [] as PrizeType[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPrizes.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const prizesReducer = prizesSlice.reducer;

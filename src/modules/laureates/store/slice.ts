import { getList } from "modules/laureates/store/actions";
import { createSlice } from "@reduxjs/toolkit";
import { loadLaureates } from "./actions";
import { laureatesAdapter } from "./adapter";
import { PrizeType } from "modules/prizes/domain/interfaces/Prize";

const laureatesSlice = createSlice({
  name: "counter",
  initialState: laureatesAdapter.getInitialState({
    list: [] as PrizeType[],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadLaureates.fulfilled, (state, action) => {
      laureatesAdapter.setAll(state, action.payload);
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const laureatesReducer = laureatesSlice.reducer;

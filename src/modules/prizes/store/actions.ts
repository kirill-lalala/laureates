import { PrizeType } from "./../domain/interfaces/Prize";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { prizeService } from "../services/PrizeService";

export const loadPrizes = createAsyncThunk<PrizeType[], void>(
  "prizes/loadPrizes",
  async () => {
    const prizes = await prizeService.loadPrizes();
    return prizes;
  }
);

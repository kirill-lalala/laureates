import { PrizeType } from "./../../prizes/domain/interfaces/Prize";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LaureateType } from "modules/laureates/domain/interfaces/Laureate";
import { loadPrizes } from "modules/prizes/store/actions";
import { prizesSelector } from "modules/prizes/store/selectors";
import { RootStore } from "store";
import { laureatesService } from "../services/LaureatesService";
import { laureatesSelector } from "./selectors";

const FINDED_CODE = "RU";

export const loadLaureates = createAsyncThunk<LaureateType[], void>(
  "laureates/loadLaureates",
  async () => {
    const laureates = await laureatesService.loadLaureates();
    return laureates;
  }
);

export const getList = createAsyncThunk<
  PrizeType[],
  void,
  { state: RootStore }
>("laureates/getList", async (_, { dispatch, getState }) => {
  await Promise.all([dispatch(loadLaureates()), dispatch(loadPrizes())]);
  const state = getState();

  const prizes = prizesSelector(state);
  const laureates = laureatesSelector.selectEntities(state);

  return prizes
    .map((prize) => ({
      ...prize,
      laureates: [...(prize.laureates || [])].filter(
        (laureate) => laureates[laureate!.id]?.bornCountryCode === FINDED_CODE
      ),
    }))
    .filter((prize) => !!prize.laureates.length);
});

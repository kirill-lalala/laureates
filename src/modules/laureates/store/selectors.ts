import { createSelector } from "@reduxjs/toolkit";
import { RootStore } from "store";
import { laureatesAdapter } from "./adapter";

export const laureatesSelector = laureatesAdapter.getSelectors(
  (state: RootStore) => state.laureates
);

const laureatesStoreSelector = (store: RootStore) => store.laureates;

export const listSelector = createSelector(
  laureatesStoreSelector,
  (state) => state.list
);

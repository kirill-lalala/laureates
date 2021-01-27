import { createEntityAdapter } from "@reduxjs/toolkit";
import { LaureateType } from "modules/laureates/domain/interfaces/Laureate";

export const laureatesAdapter = createEntityAdapter<LaureateType>();

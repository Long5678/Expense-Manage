import { configureStore } from "@reduxjs/toolkit";
import { combineSlices } from "@reduxjs/toolkit";

import { danhmucSlice } from "./danhmuc_slice";
import { ngansachSlice } from "./ngansach_slice";
import { chitieuSlice } from "./khoanchitieu_slice";

export const rootReducer = combineSlices(danhmucSlice, ngansachSlice, chitieuSlice );

export const store = configureStore({
    reducer: rootReducer,
});
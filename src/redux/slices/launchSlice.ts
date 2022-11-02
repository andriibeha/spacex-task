import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { LaunchType, LaunchStatus, SortEnum, SortType } from "./type";

interface LaunchSlickState {
  items: LaunchType[];
  status: LaunchStatus;
  sort: SortType;
}

const initialState: LaunchSlickState = {
  items: [],
  status: "loading",
  sort: {
    name: "Flight number",
    sortProperty: SortEnum.FLIGHT_NUMBER,
  },
};

//NEED TO FIX ANY
export const fetchLaunch: any = createAsyncThunk(
  "launch/fetchLaunchStatus",
  async ({ sortProperty }: any) => {
    console.log("SLICE", sortProperty);

    const options = {
      page: 1,
      limit: 4,
      sort: { sortProperty: "asc" },
    };

    const { data } = await axios.post(
      "https://api.spacexdata.com/v4/launches/query",
      {
        query: {},
        options,
      }
    );

    return data;
  }
);

export const launchSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    setLaunch(state, action) {
      state.items = [...state.items, ...action.payload];
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [fetchLaunch.pending]: (state, action) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchLaunch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchLaunch.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setSort } = launchSlice.actions;

export default launchSlice.reducer;

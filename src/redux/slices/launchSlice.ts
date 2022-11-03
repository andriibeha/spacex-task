import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLauches } from "../../services/api/launches";
import { FetchLaunchParams } from "../../services/api/types";
import { FETCH_LAUNCH } from "../constants";
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

export const fetchLaunch: any = createAsyncThunk(
  FETCH_LAUNCH,
  async (params: FetchLaunchParams, { dispatch }) => {
    const response = await getLauches(params);
    if (params?.page > 1) {
      dispatch(addLaunch(response));
    } else {
      dispatch(setLaunch(response));
    }
    return response;
  }
);

export const launchSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    setLaunch(state, action) {
      state.items = action.payload;
    },
    addLaunch(state, action) {
      const st = JSON.parse(JSON.stringify(state));
      state.items = {
        ...action.payload,
        docs: [...st.items.docs, ...action.payload.docs],
      };
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [fetchLaunch.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchLaunch.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [fetchLaunch.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export const { setSort, setLaunch, addLaunch } = launchSlice.actions;

export default launchSlice.reducer;

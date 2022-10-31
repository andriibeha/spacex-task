import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type LaunchStatus = "loading" | "success" | "error";

export type LaunchType = {
  flight_id: string;
  flight_number: number;
  mission_name: string;
  launch_date_utc: string;
  links: {
    video_link: string;
  };
};

interface LaunchSlickState {
  items: LaunchType[];
  status: LaunchStatus;
}

const initialState: LaunchSlickState = {
  items: [],
  status: "loading",
};

//NEED TO FIX ANY
export const fetchLaunch: any = createAsyncThunk(
  "launch/fetchLaunchStatus",
  async () => {
    const result = await axios({
      method: "post",
      url: `https://api.spacexdata.com/v4/launches/query`,
      headers: { "spacex-key": "spacex-key" },
      data: {
        query: {},
        options: {
          page: 1,
          limit: 1,
        },
      },
    });
    return result;
  }
);

export const launchSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    setLaunch(state, action) {
      state.items = action.payload;
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

export const { setLaunch } = launchSlice.actions;

export default launchSlice.reducer;

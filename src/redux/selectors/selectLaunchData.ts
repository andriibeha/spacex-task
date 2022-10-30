import { RootState } from "../store";

export const selectLaunchData = (state: RootState) => state.launch.items;
export const selectLaunchStatus = (state: RootState) => state.launch.status;

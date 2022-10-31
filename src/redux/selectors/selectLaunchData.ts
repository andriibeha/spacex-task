import { RootState } from "../store";

export const selectLaunchData = (state: RootState) => state.launch;
export const selectLaunchStatus = (state: RootState) => state.launch;

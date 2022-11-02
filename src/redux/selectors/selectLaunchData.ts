import { RootState } from "../store";

export const selectLaunchData = (state: RootState) => state;
export const selectLaunchStatus = (state: RootState) => state.status;
export const selectLaunchSort = (state: RootState) => state.sort;

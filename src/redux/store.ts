import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import launch from "./slices/launchSlice";

export const store = configureStore({
  reducer: { launch },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

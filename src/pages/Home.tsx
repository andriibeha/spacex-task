import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectLaunchData,
  selectLaunchStatus,
} from "../redux/selectors/selectLaunchData";
import { fetchLaunch } from "../redux/slices/launchSlice";
import { useAppDispatch } from "../redux/store";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const items = useSelector(selectLaunchData);

  useEffect(() => {
    dispatch(fetchLaunch());
    console.log(items);
  }, []);

  return <main className="main"></main>;
};

export default Home;

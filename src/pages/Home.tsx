import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import LauncItem from "../components/LauncItem";
import {
  selectLaunchData,
  selectLaunchStatus,
} from "../redux/selectors/selectLaunchData";
import { fetchLaunch } from "../redux/slices/launchSlice";
import { useAppDispatch } from "../redux/store";

//NEED TO FIX
type Launch = any;

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const items: Launch = useSelector(selectLaunchData);

  useEffect(() => {
    dispatch(fetchLaunch());
  }, []);

  return (
    <main className="main">
      <LauncItem items={items?.launch?.items?.docs} />
    </main>
  );
};

export default Home;

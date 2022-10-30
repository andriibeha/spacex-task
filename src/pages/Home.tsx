import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLaunchData,
  selectLaunchStatus,
} from "../redux/selectors/selectLaunchData";
import { fetchLaunch } from "../redux/slices/launchSlice";

const Home: FC = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectLaunchData);

  useEffect(() => {
    dispatch(fetchLaunch());
    console.log(items);
  }, []);

  return (
    <main className="main"></main>
  );
};

export default Home;

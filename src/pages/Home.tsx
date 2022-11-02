import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Detail from "../components/Detail";
import LauncItem from "../components/LauncItem";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Sort from "../components/Sort";
import {
  selectLaunchData,
  selectLaunchSort,
  selectLaunchStatus,
} from "../redux/selectors/selectLaunchData";
import { fetchLaunch } from "../redux/slices/launchSlice";

import { useAppDispatch } from "../redux/store";

//NEED TO FIX
type Launch = {
  items: any;
};

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { items }: Launch = useSelector(selectLaunchData);
  const status = useSelector(selectLaunchStatus);
  const { sortProperty } = useSelector(selectLaunchSort);
  const [modalActive, setModalActive] = useState(false);
  const [flightNumber, setFlightNumber] = useState(null);

  const { docs = [] } = items || {};

  //----

  /*   const handleScroll = (e: any) => {
    const innerHeigth = window.innerHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const scrollHeigth = e.target.documentElement.scrollHeight;

    if (innerHeigth + scrollTop + 1 >= scrollHeigth) {
      dispatch(fetchLaunch());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []); */

  //-----
  useEffect(() => {
    dispatch(fetchLaunch(sortProperty));
  }, [dispatch, sortProperty]);

  const onTitleClick = (flight_number: any) => {
    setFlightNumber(flight_number);
    setModalActive(true);
  };

  if (status === "loading") return <Loader />;

  return (
    <main className="main">
      <Sort />

      <div className="grid" id="card-container">
        {docs.map((item: any) => (
          <LauncItem
            key={`key${item.id}`}
            item={item}
            onTitleClick={onTitleClick}
          />
        ))}
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <Detail flightNumber={flightNumber} />
      </Modal>
    </main>
  );
};

export default Home;

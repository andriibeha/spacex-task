import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Detail from "../../components/Detail";
import LauncItem from "../../components/LauncItem";
import Modal from "../../components/Modal";
import Sort from "../../components/Sort";
import {
  selectLaunchData,
  selectLaunchSort,
} from "../../redux/selectors/selectLaunchData";
import { fetchLaunch, setSort } from "../../redux/slices/launchSlice";
import { useAppDispatch } from "../../redux/store";
import { Launch } from "./type";

let page = 1;

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { items }: Launch = useSelector(selectLaunchData);
  const sort = useSelector(selectLaunchSort);
  const [modalActive, setModalActive] = useState(false);
  const [flightNumber, setFlightNumber] = useState<number | null>(null);

  const { docs = [] } = items || {};

  const handleScroll: EventListener = useCallback(
    (e: any) => {
      const innerHeigth = window.innerHeight;
      const scrollTop = e.target.documentElement.scrollTop;
      const scrollHeigth = e.target.documentElement.scrollHeight;

      if (innerHeigth + scrollTop + 1 >= scrollHeigth) {
        ++page;

        dispatch(
          fetchLaunch({
            sort: { [sort?.sortProperty]: "asc" },
            page,
          })
        );
      }
    },
    [sort, dispatch]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    dispatch(
      fetchLaunch({
        sort: { [sort?.sortProperty]: "asc" },
        page,
      })
    );
  }, [dispatch, sort]);

  const onTitleClick = (flight_number: number) => {
    setFlightNumber(flight_number);
    setModalActive(true);
  };

  const onSortLaunches = useCallback(
    (obj: any) => {
      page = 1;
      dispatch(setSort(obj));
    },
    [dispatch]
  );

  return (
    <main className="main">
      <Sort onSortLaunches={onSortLaunches} />
      <div className="grid" id="card-container">
        {docs.map((item: any, i: number) => (
          <LauncItem key={i} item={item} onTitleClick={onTitleClick} />
        ))}
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        {flightNumber && <Detail flightNumber={flightNumber} />}
      </Modal>
    </main>
  );
};

export default Home;

import { FC, useEffect, useState } from "react";
import axios from "axios";
import s from "./Detail.module.scss";

type dataLaunchType = {
  launch_year: number;
  mission_name: string;
  launch_success: boolean;
  details: string;
};

const Detail: FC<any> = ({ flightNumber }) => {
  const [dataLaunch, setDataLaunch] = useState<dataLaunchType>({
    launch_year: 0,
    mission_name: "",
    launch_success: false,
    details: "",
  });

  const fetchLaunch = async (flightNumber: number) => {
    if (flightNumber) {
      const { data } = await axios.get(
        `https://api.spacexdata.com/v3/launches/${flightNumber}`
      );

      setDataLaunch(data);

      return data;
    }

    return null;
  };

  useEffect(() => {
    fetchLaunch(flightNumber);
  }, [flightNumber]);

  if (!dataLaunch) return <div>Not Fround</div>;

  return (
    <>
      <div className={s.detail}>
        <p>
          <b>Mission name:</b> {dataLaunch.mission_name}
        </p>
        <p>
          <b>Flight number:</b> {flightNumber}
        </p>
        <p>
          <b>Launch year:</b> {dataLaunch.launch_year}
        </p>
        <p>
          <b>Deatil:</b>{" "}
          {!dataLaunch.details ? <>No details</> : dataLaunch.details}
        </p>
      </div>
    </>
  );
};

export default Detail;

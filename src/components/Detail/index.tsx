import { FC, useEffect, useState } from "react";
import axios from "axios";

//  https://api.spacexdata.com/v3/launches/{{flight_number}}

const Detail: FC<any> = ({ flightNumber }) => {
  const [launch, setLaunch] = useState({});

  const fetchLaunch = async ({ flightNumber }: any) => {
    const { data } = await axios.get(
      `https://api.spacexdata.com/v3/launches/${flightNumber}`
    );

    return data;
  };

  useEffect(() => {
    console.log(fetchLaunch(flightNumber));
  }, []);

  return (
    <div>
      DETAIL
      <div>{flightNumber}</div>
    </div>
  );
};

export default Detail;

import { FC, useEffect, useState } from "react";
import axios from "axios";

const Detail: FC<any> = ({ flightNumber }) => {
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia,
        voluptates laudantium aliquam quibusdam architecto est error nulla
        temporibus rerum consectetur eum, delectus voluptas consequatur quis
        sapie
      </p>
      {/* <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${links.youtube_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          /> */}
    </div>
  );
};

export default Detail;

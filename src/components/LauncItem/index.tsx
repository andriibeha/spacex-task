import { FC } from "react";
import s from "./LauncItem.module.scss";

type Props = {
  item: any;
  onTitleClick: any;
};

const LauncItem: FC<Props> = (props) => {
  const { onTitleClick } = props;
  const { item } = props;
  const { links, date_utc, name, flight_number } = item || {};

  let time = date_utc.slice(0, 10);

  return (
    <>
      <div className={s.wraper}>
        <div className={s.video_responsive}>
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${links.youtube_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <p className={s.time}>{time}</p>
        <p className={s.name} onClick={() => onTitleClick(flight_number)}>
          {name}{" "}
        </p>
      </div>
    </>
  );
};

export default LauncItem;

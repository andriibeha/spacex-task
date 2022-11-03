import { FC } from "react";
import s from "./LauncItem.module.scss";
import { Props } from "./type";

const LauncItem: FC<Props> = (props) => {
  const { onTitleClick } = props;
  const { item } = props;
  const { links, date_utc, name, flight_number } = item;

  let time = date_utc.slice(0, 10);

  return (
    <>
      <div className={s.wraper}>
        <div className={s.img__responsive}>
          <img
            src={`https://img.youtube.com/vi/${links.youtube_id}/0.jpg`}
            alt="img"
          />
        </div>
        <p className={s.time}>{time}</p>
        <p className={s.name} onClick={() => onTitleClick(flight_number)}>
          {name}
        </p>
      </div>
    </>
  );
};

export default LauncItem;

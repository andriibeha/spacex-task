import { FC } from "react";
import Sort from "../Sort";
import s from "./LauncItem.module.scss";

type Props = any;

const LauncItem: FC<Props> = (props) => {
  const { items } = props;

  return (
    <section>
      <Sort />
      <div className={s.container}>
        <video src={items.links.webcast}></video>
      </div>
    </section>
  );
};

export default LauncItem;

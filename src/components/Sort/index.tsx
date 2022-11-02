import { FC } from "react";
import s from "./Sort.module.scss";

const Sort: FC = () => {
  return (
    <div className={s.container}>
      <div>Sort by:</div>
      <ul className={s.list}>
        <li>SORT1</li>
        <li>SORT2</li>
      </ul>
    </div>
  );
};

export default Sort;

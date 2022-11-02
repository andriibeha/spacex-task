import { FC } from "react";
import s from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={s.centered}>
      <div className={s.loader}></div>
    </div>
  );
};

export default Loader;

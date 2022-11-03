import { FC, useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLaunchSort } from "../../redux/selectors/selectLaunchData";
import { SortType, SortEnum } from "../../redux/slices/type";
import s from "./Sort.module.scss";
import { Props } from "./type";

const sortList: SortType[] = [
  { name: "Flight number", sortProperty: SortEnum.FLIGHT_NUMBER },
  { name: "Name", sortProperty: SortEnum.NAME },
  { name: "Launch success", sortProperty: SortEnum.LAUNCH_SUCCESS },
];

const Sort: FC<Props> = (props) => {
  const { onSortLaunches } = props;
  const value = useSelector(selectLaunchSort);

  const sortRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const onClickListItem = (obj: any) => {
    if (onSortLaunches) onSortLaunches(obj);
    setOpen(!open);
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const _e = e as MouseEvent & {
        path: Node[];
      };

      if (sortRef.current && !_e.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", onClickOutside);

    return () => document.body.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <div className={s.container}>
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          <b>Sort by:</b>
          <span onClick={() => setOpen(!open)}>{value.name}</span>
        </div>
        {open && (
          <div className="sort__popup">
            <ul>
              {sortList.map((obj, index) => (
                <li
                  key={index}
                  onClick={() => onClickListItem(obj)}
                  className={
                    value.sortProperty === obj.sortProperty ? "active" : ""
                  }
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;

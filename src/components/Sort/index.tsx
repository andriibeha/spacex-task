import { FC, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLaunchSort } from "../../redux/selectors/selectLaunchData";
import { setSort } from "../../redux/slices/launchSlice";
import { SortType, SortEnum } from "../../redux/slices/type";

import s from "./Sort.module.scss";

//FIX
const sortList: SortType[] = [
  { name: "Flight number", sortProperty: SortEnum.FLIGHT_NUMBER },
  { name: "Title", sortProperty: SortEnum.TITLE },
];

const Sort: FC = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectLaunchSort);

  const sortRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const onClickListItem = (obj: any) => {
    dispatch(setSort(obj));
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
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
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

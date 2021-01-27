import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "modules/laureates/store/actions";
import { listSelector } from "modules/laureates/store/selectors";
import Pagination from "./modules/pagination/ui";

const App = () => {
  const [years, setYears] = useState({
    min: 2010,
    max: 2019,
  });

  const dispatch = useDispatch();
  const laureateslist = useSelector(listSelector);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div className="App">
      <Pagination years={years} setYears={setYears} />

      {laureateslist
        .filter((prize) => +prize.year >= years.min && +prize.year <= years.max)
        .reverse()
        .map((prize) => (
          <Fragment key={`${prize.year}_${prize.category}`}>
            <div>Year: {prize.year}</div>
            <div>Category: {prize.category}</div>
            <ul>
              {prize.laureates?.map((laureate) => (
                <li
                  key={laureate.id}
                >{`${laureate.firstname} ${laureate.surname}`}</li>
              ))}
            </ul>
          </Fragment>
        ))}
    </div>
  );
};

export default App;

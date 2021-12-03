import { GoSearch } from "react-icons/go";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getMeteoData} from "../redux/reducers/cityReducer";
import { SEARCH_QUERY} from "../redux/actions/actions";

const setSearchQuery = (value: string) => ({
  type: SEARCH_QUERY,
  payload: value,
});

function TopSearchBar() {

  const { city } = useSelector((state: any) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (city.search.length > 3) {
      console.log(city)
      dispatch(getMeteoData(city.search))
    }
  }, [city.search]);

  return (
    <div className="top-search-bar">
      <div className="top-search-bar-box">
        <GoSearch className="icon-search" />
        <input
          className="search-bar"
          type="text"
          value={city.search}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
    </div>
  );
}

export default TopSearchBar;
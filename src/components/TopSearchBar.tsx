import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {getMeteoData} from "../redux/reducers/cityReducer";
import { SEARCH_QUERY} from "../redux/actions/actions";
import ICity from "../types/ICityData"

const setSearchQuery = (value: string) => ({
  type: SEARCH_QUERY,
  payload: value,
});

function TopSearchBar() {

  const { city } = useSelector((state: ICity) => state);

  const dispatch = useDispatch();

  
  return (
    <div className="top-search-bar">
      <div className="top-search-bar-box">
        <GoSearch className="icon-search" onClick={() => dispatch(getMeteoData(city.search))}/>
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
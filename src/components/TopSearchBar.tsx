import { GoSearch } from "react-icons/go";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMeteoData from "../redux/reducers/cityReducer";
import { SEARCH_QUERY , GET_METEO_DATA, TOGGLE_LOADER } from "../redux/actions/actions";

const setSearchQuery = (value: string) => ({
  type: SEARCH_QUERY,
  payload: value,
});

function TopSearchBar() {

  const { meteo } = useSelector((state: any) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (meteo.search.length > 3) {
      dispatch(getMeteoData(meteo.search));
    }
  }, [meteo.search]);

  return (
    <div className="top-search-bar">
      <div className="top-search-bar-box">
        <GoSearch className="icon-search" />
        <input
          className="search-bar"
          type="text"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </div>
    </div>
  );
}

export default TopSearchBar;

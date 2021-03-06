import { AnyAction, Dispatch } from "redux";
import { ICityData } from "../../types/ICityData";
import ICityInitialState from "../../types/redux/ICityInitialState";

import {
  SEARCH_QUERY,
  GET_METEO_DATA,
  TOGGLE_LOADER,
} from "../actions/actions";

const cityInitialState: ICityInitialState = {
  search: "",
  cityData: <ICityData>{},
  loader: false,
};

const cityReducer = (state = cityInitialState, action: AnyAction) => {
  const { payload, type } = action;

  switch (type) {
    case SEARCH_QUERY:
      return {
        ...state,
        search: payload,
      };
    case GET_METEO_DATA:
      return {
        ...state,
        cityData: payload,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        loader: payload,
      };
    default:
      return state;
  }
};

export const getMeteoData = (query: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: TOGGLE_LOADER,
        payload: true,
      });

      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=bdbfa1e0cc6e76ee3ed346adae78a974&units=metric`
      );

      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_METEO_DATA,
          payload: data,
        });
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        });
      }
    } catch (exception) {
      console.log(exception);
    }
  };
};



export default cityReducer;
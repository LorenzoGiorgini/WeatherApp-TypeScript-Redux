import { ICityData } from "../../types/ICityData";

interface ICityInitialState {
  search: string;
  cityData: ICityData;
  loader: boolean;
}

export default ICityInitialState;
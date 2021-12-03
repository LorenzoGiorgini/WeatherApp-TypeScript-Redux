import { useSelector } from "react-redux";
import { BsFillCloudsFill } from "react-icons/bs";
import ICity from "../types/ICityData";


function CityDataMeteo() {
  const { city } = useSelector((state : ICity) => state);

  let date = new Date();


  return city.cityData.sys ? (
    <div className="weather-container">
      <div className="d-flex flex-column">
        <span className="date-now">
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </span>
        <span className="city-name">
          {city.cityData.name}
          {","}
          {city.cityData.sys.country}
        </span>
        <span className="d-flex align-items-center p-3">
          <BsFillCloudsFill className="clouds"/>
          {city.cityData.main.temp}° C
        </span>
        {city.cityData.weather.map((item: any) => {
          return (
            <span className="city-weather">
              Feels like {city.cityData.main.feels_like}° {item.description}
            </span>
          );
        })}
        <div className="d-flex font-infos">
          <div className="divisor"></div>
          <div>
            <span className="city-weather-info">
              {city.cityData.wind.speed}m/s WSW
            </span>
            <span className="city-weather-info">
              {city.cityData.main.pressure}hPa
            </span>
            <span className="city-weather-info">
              Humidity: {city.cityData.main.humidity}%
            </span>
            <br />
            <span className="city-weather-info">
              Dew point: {city.cityData.main.temp_min}°
            </span>
            <span className="city-weather-info">
              Visibility: {city.cityData.visibility / 1000}Km
            </span>
            <span className="city-weather-info"></span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}


export default CityDataMeteo;
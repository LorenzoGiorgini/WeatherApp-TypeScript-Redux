import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function CityDataMeteo() {
  const { city } = useSelector((state: any) => state);

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
        {city.cityData.weather.map((item: any) => {
          return (
            <span className="city-weather">
              Feels like {city.cityData.main.feels_like}° {item.description}
            </span>
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default CityDataMeteo;

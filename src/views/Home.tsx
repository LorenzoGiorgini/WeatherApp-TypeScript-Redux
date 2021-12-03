import GoogleMapIFrame from "../components/GoogleMapIFrame";
import TopSearchBar from "../components/TopSearchBar";

import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/Loading";
import { Col, Container, Row } from "react-bootstrap";
import CityDataMeteo from "../components/CityDataMeteo";

function Home() {
  const { city } = useSelector((state: any) => state);

  return city.loader === true ? (
    <div className="div-simple">
      <Loading />
    </div>
  ) : (
    <div>
      <TopSearchBar />
      <Container>
        <Row className="mt-5">
          <Col xs={12} lg={6}>
            <CityDataMeteo />
          </Col>
          <Col xs={12} lg={6}>
            <GoogleMapIFrame city={city.cityData.name} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}



export default Home;
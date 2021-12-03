interface IProps {
    city: string;
}

function GoogleMapIFrame({city}: IProps) {
  return (
    <div>
      <div
        className="mapouter"
        style={{
          position: "relative",
          textAlign: "right",
          height: "400px",
          width: "400px",
        }}
      >
        <div
          className="gmap_canvas"
          style={{
            overflow: "hidden",
            background: "none!important",
            height: "400px",
            width: "400px",
          }}
        >
          <iframe
            width="400"
            height="400"
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
          <a href="http://vin-odometer.info">vin-odometer.info</a>
          <br />

          <a href="https://embedmaps.info">Embed Google Maps</a>
        </div>
      </div>
    </div>
  );
}

export default GoogleMapIFrame;
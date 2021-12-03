interface IProps {
    city: string;
}

function GoogleMapIFrame({city}: IProps) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        className="mapouter"
        style={{
          position: "relative",
          textAlign: "right",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="gmap_canvas"
          style={{
            overflow: "hidden",
            background: "none!important",
            height: "100%",
            width: "100%",
          }}
        >
          <iframe
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            style={{width: "100%", height: "440px"}}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default GoogleMapIFrame;
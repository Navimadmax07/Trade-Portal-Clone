import React from "react";
import MeasurementList from "./measurementConversion/MeasurementList";
import { useNavigate } from "react-router-dom";


const Measurement = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12 pt-3 text-center">
          <a onClick={() => navigate("/")} className="btn btn-default">
            <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i>{" "}
          </a>
          <h3 className="text-center font-weight-bold mt-3 text-uppercase">
            Measurement Conversion
          </h3>
          <hr />
          <MeasurementList />
        </div>
      </div>
    </div>
  );
};

export default Measurement;

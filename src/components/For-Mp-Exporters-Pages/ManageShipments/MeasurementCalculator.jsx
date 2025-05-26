import React from "react";
import ShipmentsMenu from "../ShipmentsMenu";

const MeasurementCalculator = () => {
  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12 pt-4">
              <h3>MANAGE INTERNATIONAL SHIPMENTS</h3>
              <p className="bg-danger p-2 text-white">
                Safely ship your goods worldwide
              </p>
            </div>
            <ShipmentsMenu />
            <div className="col-md-3"></div>
            <div className="col-md-9"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasurementCalculator;

import React from "react";

const LoadCalculator = () => (
  <div className="container" id="innerpage">
    <div className="row">
      <div className="col-12">
        <h3 className="text-center font-weight-bold mt-5 text-uppercase">
          Load Calculator
        </h3>
        <hr style={{ width: "50%" }} />
      </div>
    </div>
    <div className="row">
      <iframe
        id="iframe-tracking"
        src="https://www.searates.com/reference/partnership-frame/?refferer=test-iframe.com"
        width="100%"
        height="800"
        frameBorder="0"
        align="middle"
        scrolling="no"
        title="Load Calculator"
      ></iframe>
    </div>
  </div>
);

export default LoadCalculator;

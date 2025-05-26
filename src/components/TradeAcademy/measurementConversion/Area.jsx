import React, { useState } from "react";

const areaUnits = [
  { value: "square_inches", label: "square inches" },
  { value: "square_feet", label: "square feet" },
  { value: "square_yards", label: "square yards" },
  { value: "square_miles", label: "square miles" },
  { value: "square_millimeters", label: "square millimeters" },
  { value: "square_centimeters", label: "square centimeters" },
  { value: "square_meters", label: "square meters" },
  { value: "square_kilometers", label: "square kilometers" },
  { value: "acres", label: "acres" },
  { value: "hectares", label: "hectares" },
];

// Conversion factors to square meters
const areaToSqMeters = {
  square_inches: 0.00064516,
  square_feet: 0.092903,
  square_yards: 0.836127,
  square_miles: 2.59e6,
  square_millimeters: 1e-6,
  square_centimeters: 0.0001,
  square_meters: 1,
  square_kilometers: 1e6,
  acres: 4046.86,
  hectares: 10000,
};

function convertArea(value, from, to) {
  if (!value || isNaN(value)) return "";
  const inSqMeters = parseFloat(value) * (areaToSqMeters[from] || 1);
  return (inSqMeters / (areaToSqMeters[to] || 1)).toString();
}

const AreaConverter = ({ onReturn }) => {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("square_feet");
  const [toUnit, setToUnit] = useState("square_meters");
  const [toValue, setToValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToValue(convertArea(fromValue, fromUnit, toUnit));
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12 pt-3">
          <div className="row">
            <div className="col-5 text-center">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (onReturn) onReturn();
                }}
              >
                Return to Measurement
              </a>
            </div>
            <div className="col-6">
              <h4>Convert Area</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div id="main-content" style={{ width: 500, margin: "0 auto" }}>
              <form onSubmit={handleSubmit}>
                <div className="form-group col-12">
                  <label>From:</label>&nbsp;
                  <input
                    type="number"
                    name="from_value"
                    className="form-control"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                  />
                  &nbsp;
                  <select
                    name="from_unit"
                    className="form-control"
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                  >
                    {areaUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-12">
                  <label>To:</label>&nbsp;
                  <input
                    type="text"
                    name="to_value"
                    className="form-control"
                    value={toValue}
                    disabled
                  />
                  &nbsp;
                  <select
                    name="to_unit"
                    className="form-control"
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value)}
                  >
                    {areaUnits.map((unit) => (
                      <option key={unit.value} value={unit.value}>
                        {unit.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-12">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaConverter;

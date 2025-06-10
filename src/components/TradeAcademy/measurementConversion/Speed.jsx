import React, { useState } from "react";

const speedOptions = [
  { value: "feet_per_second", label: "feet per second" },
  { value: "miles_per_hour", label: "miles per hour" },
  { value: "meters_per_second", label: "meters per second" },
  { value: "kilometers_per_hour", label: "kilometers per hour" },
  { value: "knots", label: "knots" },
];

// Conversion factors to meters per second
const speedToMps = {
  feet_per_second: 0.3048,
  miles_per_hour: 0.44704,
  meters_per_second: 1,
  kilometers_per_hour: 0.277778,
  knots: 0.514444,
};

function convertSpeed(value, from, to) {
  if (!value || isNaN(value)) return "";
  const inMps = parseFloat(value) * (speedToMps[from] || 1);
  return (inMps / (speedToMps[to] || 1)).toString();
}

const Speed = ({ onReturn }) => {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("feet_per_second");
  const [toUnit, setToUnit] = useState("meters_per_second");
  const [toValue, setToValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToValue(convertSpeed(fromValue, fromUnit, toUnit));
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12 pt-3">
          <div className="row">
            <div className="col-5 text-center">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>{" "}
              <a
                
                onClick={(e) => {
                  e.preventDefault();
                  if (onReturn) onReturn();
                }}
              >
                Return to Measurement
              </a>
            </div>
            <div className="col-6">
              <h4>Convert Speed</h4>
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
                    {speedOptions.map((unit) => (
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
                    {speedOptions.map((unit) => (
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

export default Speed;

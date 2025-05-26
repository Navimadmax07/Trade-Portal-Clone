import React, { useState } from "react";

// Conversion factors to meters
const lengthToMeters = {
  inches: 0.0254,
  feet: 0.3048,
  yards: 0.9144,
  miles: 1609.344,
  millimeters: 0.001,
  centimeters: 0.01,
  meters: 1,
  kilometers: 1000,
};

const lengthUnits = [
  { value: "inches", label: "inches" },
  { value: "feet", label: "feet" },
  { value: "yards", label: "yards" },
  { value: "miles", label: "miles" },
  { value: "millimeters", label: "millimeters" },
  { value: "centimeters", label: "centimeters" },
  { value: "meters", label: "meters" },
  { value: "kilometers", label: "kilometers" },
];

function convertLength(value, from, to) {
  if (!value || isNaN(value)) return "";
  const inMeters = parseFloat(value) * (lengthToMeters[from] || 1);
  return (inMeters / (lengthToMeters[to] || 1)).toString();
}

const LengthConverter = ({ onReturn }) => {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("inches");
  const [toUnit, setToUnit] = useState("feet");
  const [toValue, setToValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToValue(convertLength(fromValue, fromUnit, toUnit));
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
              <h4>Convert Length</h4>
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
                    {lengthUnits.map((unit) => (
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
                    {lengthUnits.map((unit) => (
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

export default LengthConverter;

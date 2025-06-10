import React, { useState } from "react";

const massOptions = [
  { value: "ounces", label: "ounces" },
  { value: "pounds", label: "pounds" },
  { value: "stones", label: "stones" },
  { value: "long_tons", label: "long tons" },
  { value: "short_tons", label: "short tons" },
  { value: "milligrams", label: "milligrams" },
  { value: "grams", label: "grams" },
  { value: "kilograms", label: "kilograms" },
  { value: "metric_tonnes", label: "metric tonnes" },
];

// Conversion factors to kilograms
const massToKg = {
  ounces: 0.0283495,
  pounds: 0.453592,
  stones: 6.35029,
  long_tons: 1016.05,
  short_tons: 907.185,
  milligrams: 0.000001,
  grams: 0.001,
  kilograms: 1,
  metric_tonnes: 1000,
};

function convertMass(value, from, to) {
  if (!value || isNaN(value)) return "";
  const inKg = parseFloat(value) * (massToKg[from] || 1);
  return (inKg / (massToKg[to] || 1)).toString();
}

const MassConverter = ({ onReturn }) => {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("grams");
  const [toUnit, setToUnit] = useState("kilograms");
  const [toValue, setToValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToValue(convertMass(fromValue, fromUnit, toUnit));
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
              <h4>Convert Mass</h4>
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
                    {massOptions.map((unit) => (
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
                    {massOptions.map((unit) => (
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

export default MassConverter;

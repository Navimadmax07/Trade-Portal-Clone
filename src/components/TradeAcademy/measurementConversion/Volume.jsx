import React, { useState } from "react";

const volumeOptions = [
  { value: "cubic_inches", label: "cubic inches" },
  { value: "cubic_feet", label: "cubic feet" },
  { value: "imperial_gallons", label: "Imperial gallons" },
  { value: "imperial_quarts", label: "Imperial quarts" },
  { value: "imperial_pints", label: "Imperial pints" },
  { value: "imperial_cups", label: "Imperial cups" },
  { value: "imperial_ounces", label: "Imperial ounces" },
  { value: "imperial_tablespoons", label: "Imperial tablespoons" },
  { value: "imperial_teaspoons", label: "Imperial teaspoons" },
  { value: "us_gallons", label: "US gallons" },
  { value: "us_quarts", label: "US quarts" },
  { value: "us_pints", label: "US pints" },
  { value: "us_cups", label: "US cups" },
  { value: "us_ounces", label: "US ounces" },
  { value: "us_tablespoons", label: "US tablespoons" },
  { value: "us_teaspoons", label: "US teaspoons" },
  { value: "cubic_centimeters", label: "cubic centimeters" },
  { value: "cubic_meters", label: "cubic meters" },
  { value: "liters", label: "liters" },
  { value: "milliliters", label: "milliliters" },
];

// Conversion factors to liters
const volumeToLiters = {
  cubic_inches: 0.0163871,
  cubic_feet: 28.3168,
  imperial_gallons: 4.54609,
  imperial_quarts: 1.13652,
  imperial_pints: 0.568261,
  imperial_cups: 0.284131,
  imperial_ounces: 0.0284131,
  imperial_tablespoons: 0.0177582,
  imperial_teaspoons: 0.00591939,
  us_gallons: 3.78541,
  us_quarts: 0.946353,
  us_pints: 0.473176,
  us_cups: 0.24,
  us_ounces: 0.0295735,
  us_tablespoons: 0.0147868,
  us_teaspoons: 0.00492892,
  cubic_centimeters: 0.001,
  cubic_meters: 1000,
  liters: 1,
  milliliters: 0.001,
};

function convertVolume(value, from, to) {
  if (!value || isNaN(value)) return "";
  const inLiters = parseFloat(value) * (volumeToLiters[from] || 1);
  return (inLiters / (volumeToLiters[to] || 1)).toString();
}

const Volume = ({ onReturn }) => {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("cubic_inches");
  const [toUnit, setToUnit] = useState("liters");
  const [toValue, setToValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToValue(convertVolume(fromValue, fromUnit, toUnit));
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
              <h4>Convert Volume</h4>
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
                    {volumeOptions.map((unit) => (
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
                    {volumeOptions.map((unit) => (
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

export default Volume;

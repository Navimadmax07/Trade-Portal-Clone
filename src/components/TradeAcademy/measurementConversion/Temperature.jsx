import React, { useState } from "react";

const tempOptions = [
  { value: "celsius", label: "Celsius" },
  { value: "fahrenheit", label: "Fahrenheit" },
  { value: "kelvin", label: "Kelvin" },
];

function convertTemperature(value, fromUnit, toUnit) {
  let celsiusValue;
  value = parseFloat(value);
  if (isNaN(value)) return "";
  switch (fromUnit) {
    case "celsius":
      celsiusValue = value;
      break;
    case "fahrenheit":
      celsiusValue = (value - 32) / 1.8;
      break;
    case "kelvin":
      celsiusValue = value - 273.15;
      break;
    default:
      return "";
  }
  switch (toUnit) {
    case "celsius":
      return celsiusValue;
    case "fahrenheit":
      return celsiusValue * 1.8 + 32;
    case "kelvin":
      return celsiusValue + 273.15;
    default:
      return "";
  }
}

const Temperature = ({ onReturn }) => {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");
  const [toValue, setToValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToValue(convertTemperature(fromValue, fromUnit, toUnit));
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
              <h4>Convert Temperature</h4>
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
                    {tempOptions.map((unit) => (
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
                    {tempOptions.map((unit) => (
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

export default Temperature;

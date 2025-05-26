import React, { useState } from "react";
import AreaConverter from "./Area";
import LengthConverter from "./Length";
import MassConverter from "./Mass";
import Volume from "./Volume";
import Speed from "./Speed";
import Temperature from "./Temperature";

const MeasurementList = () => {
  const [selected, setSelected] = useState(null);

  const handleNavigate = (type) => {
    setSelected(type);
  };

  const handleReturnToList = () => {
    setSelected(null);
  };

  const renderConverter = () => {
    switch (selected) {
      case "length":
        return <LengthConverter onReturn={handleReturnToList} />;
      case "area":
        return <AreaConverter onReturn={handleReturnToList} />;
      case "mass":
        return <MassConverter onReturn={handleReturnToList} />;
      case "volume":
        return <Volume onReturn={handleReturnToList} />;
      case "speed":
        return <Speed onReturn={handleReturnToList} />;
      case "temperature":
        return <Temperature onReturn={handleReturnToList} />;
      default:
        return null;
    }
  };

  if (selected) {
    return (
      <div>
        <div style={{ marginBottom: "32px" }} />
        {renderConverter()}
        <style>
          {`
          .btn.btn-default {
            background: #fff;
            border: 1px solid #28367d;
            color: #28367d;
            font-weight: 500;
            transition: background 0.2s, color 0.2s;
          }
          .btn.btn-default:hover {
            background: #FDB912;
            color: #fff;
            border-color: #FDB912;
          }
          `}
        </style>
      </div>
    );
  }

  return (
    <div className="container-fluid" id="innerpage">
      <style>
        {`
        #main-content {
          margin-left: 50px;
        }
        ul#measurement-types {
          list-style-type: none;
          margin: 1em 0;
          padding: 0;
        }
        ul#measurement-types li {
          height: auto;
          margin: 0 0 10px 0;
          padding: 0;
        }
        ul#measurement-types li a {
          text-decoration: none;
          color: black;
          display: block;
          background: white;
          padding: 16px 24px;
          width: 180px;
          border: 1px solid black;
          border-radius: 4px;
          transition: background 0.2s, color 0.2s;
        }
        ul#measurement-types li a:hover {
          color: white;
          background: #FDB912;
        }
        .solid-blue-line {
          border: none;
          border-top: 2px solid #28367d;
          width: 50%;
          margin: 24px auto 32px auto;
        }
        `}
      </style>
      <div className="row" id="dashboard">
        <div className="col-md-12 pt-3 text-center">
          <hr className="solid-blue-line" />
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <div id="main-content">
                <ul id="measurement-types">
                  <li>
                    <a href="#" onClick={() => handleNavigate("length")}>
                      Length and Distance
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleNavigate("area")}>
                      Area
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleNavigate("mass")}>
                      Mass and Weight
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div id="main-content">
                <ul id="measurement-types">
                  <li>
                    <a href="#" onClick={() => handleNavigate("volume")}>
                      Volume and Capacity
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleNavigate("speed")}>
                      Speed
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleNavigate("temperature")}>
                      Temperature
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasurementList;

import React from "react";
import { useNavigate } from "react-router-dom";

const ShipmentsMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="text-center pt-2">Manage Shipments</h4>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">
            <a
              href="#"
              onClick={() => navigate("/manageShipments/importControl")}
            >
              Import Control
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="#"
              onClick={() => navigate("/manageShipments/exportControl")}
            >
              Export Control
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="#"
              onClick={() => navigate("/manageShipments/customDuties")}
            >
              Custom Duties
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="#"
              onClick={() => navigate("/manageShipments/tradeRemedies")}
            >
              Trade Remedies
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="#"
              onClick={() =>
                navigate("/manageShipments/regulatoryRequirements")
              }
            >
              Regulatory Requirements
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="#"
              onClick={() => navigate("/manageShipments/exportPriceCalculator")}
            >
              Export Price Calculator
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="#"
              onClick={() => navigate("/manageShipments/measurementCalculator")}
            >
              Measurement Calculator
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShipmentsMenu;

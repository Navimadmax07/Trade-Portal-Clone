import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const AnalyzeMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="text-center pt-2">Analyze Market Trends</h4>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">
            <a
              href="#"
              onClick={() => {
                navigate("/analyzeMarketTrend/importExportFLows");
              }}
            >
              Import/Export flows
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="#"
              onClick={() => {
                navigate("/analyzeMarketTrend/marketReport");
              }}
            >
              Market Report
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="#"
              onClick={() => {
                navigate("/analyzeMarketTrend/findExporters");
              }}
            >
              Find Exporters
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnalyzeMenu;

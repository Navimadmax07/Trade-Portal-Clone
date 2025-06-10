import React from "react";
// import { A } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CounterPartsMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="text-center pt-2">Reach Business Counterparts</h4>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">
            <a
              
              onClick={() =>
                navigate(
                  "/reachBusinessCounterparts/businessDirectoriesCountry"
                )
              }
            >
              Find Importers in Countries
            </a>
          </li>
          <li className="list-group-item">
            <a
              
              onClick={() =>
                navigate("/reachBusinessCounterparts/publicTenders")
              }
            >
              Public Tenders
            </a>
          </li>
          <li className="list-group-item">
            <a
              
              onClick={() =>
                navigate("/reachBusinessCounterparts/businessDirectories")
              }
            >
              Find Importers worldwide by HS-Code
            </a>
          </li>
          <li className="list-group-item">
            <a
              
              onClick={() =>
                navigate("/reachBusinessCounterparts/businessDirectoriesCity")
              }
            >
              Find Importers in Cities
            </a>
          </li>
          <li className="list-group-item">
            <a  onClick={() => navigate("/reachBusinessCounterparts/marketInfo")}>
              Market Info
            </a>
          </li>
          <li className="list-group-item">
            <a  onClick={() => navigate("/reachBusinessCounterparts/tradeShows")}>
              National & International Trade Shows
            </a>
          </li>
          <li className="list-group-item">
            <a  onClick={() => navigate("/reachBusinessCounterparts/businessDirectoriesCompany")}>
              Potential Client list
            </a>
          </li>
          <li className="list-group-item">
            <a
              
              onClick={() =>
                navigate("/reachBusinessCounterparts/blacklistCompanies")
              }
            >
              Blacklisted Companies & Individuals
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CounterPartsMenu;

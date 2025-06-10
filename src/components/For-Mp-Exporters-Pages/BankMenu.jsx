import React from "react";
import { useNavigate } from "react-router-dom";

const BankMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="text-center pt-2">Trade Finance</h4>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">
            <a
              
              onClick={() => navigate("/tradeFinance/bankingSolution")}
            >
              Banking Solutions
            </a>
          </li>
          <li className="list-group-item">
            <a
              
              onClick={() => navigate("/tradeFinance/creditInsurance")}
            >
              Credit Insurance/Guarantee
            </a>
          </li>
          <li className="list-group-item">
            <a  onClick={() => navigate("/tradeFinance/incoterms")}>
              Incoterms
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BankMenu;

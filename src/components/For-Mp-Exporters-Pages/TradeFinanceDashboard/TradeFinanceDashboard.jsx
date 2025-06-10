import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BankList from "./BankList";
import BankDetails from "./BankDetails";
import TradeFinance from "./TradeFinance";
// import './TradeFinance.css';

const TradeFinanceDashboard = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);

  const handleBankSelect = async (bank) => {
    try {
      const response = await axios.get(
        `http://api.mptradeportal.org/bank/${bank.uid}`
      );
      setSelectedBank(bank);
      setBankDetails(response.data);
    } catch (error) {
      console.error("Error fetching bank details:", error);
    }
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-3 pt-3" id="sidemenu">
          <Link to="/" className="btn btn-light mb-3">
                        <i
                            className="fa fa-chevron-circle-left fa-2x"
                            aria-hidden="true"
                          ></i></Link>
          <div className="card">
            <div className="card-header">
              <h4 className="text-center pt-2">Trade Finance</h4>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <a
                    // 
                    onClick={() => navigate("/tradeFinance/bankingSolution")}
                  >
                    Banking Solutions
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    
                    onClick={() => navigate("/tradeFinance/creditInsurance")}
                  >
                    Credit Insurance/Guarantee{" "}
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    
                    onClick={() => navigate("/tradeFinance/incoterms")}
                  >
                    Incoterms{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>

        <div className="col-md-9 pt-3">
          {/* <h2 className="text-center">Bank with us</h2>

          <BankList onSelectBank={handleBankSelect} />

          <div className="row">
            <div className="col-md-12 text-center pt-3">
              <Link
                to="/credit-rating"
                className="btn btn-primary text-white me-2"
              >
                Credit Rating
              </Link>
              <Link
                to="/master-circular"
                className="btn btn-primary text-white me-2"
              >
                Master Circular
              </Link>
              <Link to="/ad-bank" className="btn btn-primary text-white">
                AD Bank
              </Link>
            </div>
          </div> */}
          <TradeFinance />

          {selectedBank && bankDetails && (
            <BankDetails bank={selectedBank} details={bankDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TradeFinanceDashboard;

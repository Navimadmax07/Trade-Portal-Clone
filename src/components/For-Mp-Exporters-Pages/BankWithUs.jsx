import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BankWithUs = () => {
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          "http://api.mptradeportal.org/list/banks"
        );
        setBanks(response.data.docs);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };
    fetchBanks();
  }, []);

  const handleBankSelect = async (event) => {
    const bankId = event.target.value;
    try {
      const response = await axios.get(
        `http://api.mptradeportal.org/bank/${bankId}`
      );
      setSelectedBank(response.data);
      setBankDetails(response.data.docs); // Assuming the API returns bank details in docs field
    } catch (error) {
      console.error("Error fetching bank details:", error);
    }
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-3 pt-3" id="sidemenu">
          <Link to="/dashboard" className="btn btn-default">
            <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true" />
          </Link>
        </div>

        <div className="col-md-9 pt-3">
          <h2 className="text-center">Bank with us</h2>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="input-group mb-3 input-group-sm">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-credit-card" aria-hidden="true" />
                    </span>
                  </div>
                  <select
                    className="form-control"
                    onChange={handleBankSelect}
                    required
                  >
                    <option value="" disabled selected>
                      Select Bank
                    </option>
                    {banks.map((bank) => (
                      <option key={bank.uid} value={bank.uid}>
                        {bank.bank_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center pt-3">
              <Link to="/credit-rating" className="btn btn-primary text-white">
                Credit Rating
              </Link>
              <Link to="#" className="btn btn-primary text-white">
                Master Circular
              </Link>
              <Link to="#" className="btn btn-primary text-white">
                AD Bank
              </Link>
            </div>

            <div className="col-md-12">
              <div className="card">
                {selectedBank && (
                  <div className="card-header p-4">
                    <h4>{selectedBank.bank_name}</h4>
                    <p>
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      {selectedBank.address}
                    </p>
                    <p>
                      <i className="fa fa-globe" aria-hidden="true" />{" "}
                      {selectedBank.website}
                      <i className="fa fa-envelope" /> {selectedBank.email}
                      <i className="fa fa-phone" /> {selectedBank.contact}
                    </p>
                    <p>
                      <i className="fa fa-line-chart" aria-hidden="true" />
                      <a
                        href={selectedBank.mclr_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MCLR: {selectedBank.mclr_link}
                      </a>
                    </p>
                  </div>
                )}

                {bankDetails && (
                  <div className="card-body">
                    <div className="row">
                      {bankDetails.map((detail, index) => (
                        <div className="col-md-4 card" key={index}>
                          <div className="card-header p-1">
                            <h5 style={{ color: "#6c757d" }}>
                              {detail.heading}
                            </h5>
                          </div>
                          <div className="card-body">
                            <p>
                              <b>Purpose:</b> {detail.purpose}
                              <br />
                              <b>Currency:</b> {detail.currency}
                              <br />
                              <b>Interest Rate / Commission / Fees:</b>{" "}
                              {detail.tenor}
                              <br />
                              <b>Any Other Condition:</b>{" "}
                              {detail.other_condition}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankWithUs;

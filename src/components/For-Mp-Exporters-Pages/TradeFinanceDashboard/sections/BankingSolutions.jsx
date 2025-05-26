import React, { useState } from "react";
import BankMenu from "./../../BankMenu";

const bankList = [
  { uid: "1", bank_name: "Allahabad Bank" },
  { uid: "2", bank_name: "State Bank of India" },
  { uid: "3", bank_name: "Punjab National Bank" },
];

const selectedBank = {
  bank_name: "Allahabad Bank",
  address: "2, NETAJI SUBHASH ROAD, KOLKATA 700 001",
  website: "www.allahabadbank.in",
  email: "customercare@allahabadbank.in",
  contact: "022-22670544",
  mclr_link: "https://www.allahabadbank.in/Dep_rate.aspx",
};

const rs = {
  docs: [
    {
      heading: "ADVANCE PAYMENT AGAINST IMPORTS",
      purpose: "TO FACILITATE IMPORTS OF GOODS.",
      currency: "USD, EUR, GBP, JPY, HKD, CAD, AUD, CHF",
      tenor:
        "AS PER CIRCULARISED INSTRUCTIONS AVAILABLE ON OUR BANK WEBSITE : www.allahabadbank.in/ AS PER TERMS OF SANCTION OF CREDIT FACILITY",
      other_condition: "NIL",
    },
    {
      heading: "IMPORT BILLS ON COLLECTION",
      purpose: "TO FACILITATE IMPORTS OF GOODS AND SETTLEMENT OF PAYMENT.",
      currency: "USD, EUR, GBP, JPY, HKD, CAD, AUD, CHF",
      tenor:
        "AS PER CIRCULARISED INSTRUCTIONS AVAILABLE ON OUR BANK WEBSITE : www.allahabadbank.in/ AS PER TERMS OF SANCTION OF CREDIT FACILITY",
      other_condition: "NIL",
    },
    {
      heading: "IMPORT LC",
      purpose: "TO FACILITATE IMPORTS OF GOODS AND SETTLEMENT OF PAYMENT.",
      currency: "USD, EUR, GBP, JPY, HKD, CAD, AUD, CHF",
      tenor:
        "AS PER CIRCULARISED INSTRUCTIONS AVAILABLE ON OUR BANK WEBSITE : www.allahabadbank.in/ AS PER TERMS OF SANCTION OF CREDIT FACILITY",
      other_condition: "NIL",
    },
  ],
};

const BankingSolution = () => {
  const [selectedBankUid, setSelectedBankUid] = useState("");
  const [showBankDetails, setShowBankDetails] = useState(false);

  const handleBankChange = (e) => {
    setSelectedBankUid(e.target.value);
    setShowBankDetails(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowBankDetails(true);
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-3 pt-3" id="sidemenu">
          <a href="/Client/Dashboard" className="btn btn-default">
            <i
              className="fa fa-chevron-circle-left fa-2x"
              aria-hidden="true"
            ></i>
          </a>
          <BankMenu />
        </div>
        <div className="col-md-9 pt-3">
          <h2 className="text-center">Bank with us</h2>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                      </span>
                    </div>
                    <select
                      className="form-control"
                      name="selected_bank"
                      required
                      value={selectedBankUid}
                      onChange={handleBankChange}
                    >
                      <option value="" disabled>
                        Select Bank
                      </option>
                      {bankList.map((value) => (
                        <option key={value.uid} value={value.uid}>
                          {value.bank_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group text-center">
                    <input
                      type="submit"
                      className="btn btn-danger"
                      value="Find Now"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center pt-3">
              <a className="btn btn-primary text-white" href="/CreditRating">
                Credit Rating
              </a>
              <a className="btn btn-primary text-white" href="#">
                Master Circular
              </a>
              <a className="btn btn-primary text-white" href="#">
                AD Bank
              </a>
            </div>
            <div className="col-md-12">
              {showBankDetails && (
                <div className="card">
                  <div className="card-header p-4">
                    <h4>{selectedBank.bank_name}</h4>
                    <p>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      {selectedBank.address}
                    </p>
                    <p>
                      <i className="fa fa-globe" aria-hidden="true"></i>{" "}
                      {selectedBank.website} <i className="fa fa-envelope"></i>{" "}
                      {selectedBank.email} <i className="fa fa-phone"></i>{" "}
                      {selectedBank.contact}
                    </p>
                    <p>
                      <i className="fa fa-line-chart" aria-hidden="true"></i>{" "}
                      <a
                        href={selectedBank.mclr_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MCLR: {selectedBank.mclr_link}
                      </a>
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      {rs.docs.map((detail, idx) => (
                        <div className="col-md-4 card" key={idx}>
                          <div className="card-header p-1">
                            <h5 style={{ color: "#6c757d" }}>
                              {detail.heading}
                            </h5>
                          </div>
                          <div className="card-body">
                            <p>
                              <b>Puspose:</b> {detail.purpose}
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingSolution;

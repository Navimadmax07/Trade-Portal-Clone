import React, { useState } from "react";
import BankMenu from "./../../BankMenu";

const CreditInsurance = () => {
  const [selectedOption, setSelectedOption] = useState("ECGC LTD");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option value="ECGC LTD">ECGC LTD</option>
                      <option value="CGTMSE">CGTMSE</option>
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
              <a className="btn btn-primary text-white" >
                Master Circular
              </a>
              <a className="btn btn-primary text-white" >
                AD Bank
              </a>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header p-4">
                  <h4>ECGC LTD. </h4>
                  <p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    REGISTERED OFFICE, ECGC Limited, Express Towers, 10th Floor,
                    Nariman Point, Mumbai - 400 021
                  </p>
                  <p>
                    <i className="fa fa-globe" aria-hidden="true"></i>{" "}
                    www.ecgc.in <i className="fa fa-envelope"></i>{" "}
                    webmaster@ecgc.in <i className="fa fa-phone"></i> 022 6659
                    0500 / 0510
                  </p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <h4>Shipment Comprehensive Risks (SCR) Policy</h4>
                      <p>
                        <b>Puspose:</b> An exporter whose anticipated annual
                        export turnover is more than INR 500 lakhs is eligible
                        for this Policy.
                        <br />
                        <b>Percentage Of Cover: </b> 90%
                        <br />
                        <b>Period Of Policy: </b>12 months
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h4>Exports Turnover Policy (ETP)</h4>
                      <p>
                        <b>Puspose:</b> Turnover Policy is for the benefit of
                        large exporters who contribute not less than INR 10
                        lakhs per annum towards premium based on projection of
                        the export turnover of the policy holder for a year.
                        <br />
                        <b>Percentage Of Cover: </b> 90% <br />
                        <b>Period Of Policy: </b>12 months
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h4>Specific Shipment Policy (SSP)</h4>
                      <p>
                        <b>Puspose:</b>The Specific Buyers Policy provides cover
                        for shipments made to a particular buyer or on L/C
                        opening bank for a set of buyers. <br />
                        <b>Percentage Of Cover: </b> 90% <br />
                        <b>Period Of Policy: </b>12 months
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditInsurance;

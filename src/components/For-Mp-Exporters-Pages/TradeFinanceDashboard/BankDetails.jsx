import React from "react";

const BankDetails = ({ bank, details }) => {
  return (
    <div className="col-md-12">
      <div className="card mt-4">
        <div className="card-header p-4">
          <h4>{bank.bank_name}</h4>
          <p>
            <i className="fa fa-map-marker me-2" aria-hidden="true" />
            {bank.address}
          </p>
          <p>
            <i className="fa fa-globe me-2" aria-hidden="true" /> {bank.website}
            <i className="fa fa-envelope mx-2" /> {bank.email}
            <i className="fa fa-phone mx-2" /> {bank.contact}
          </p>
          <p>
            <i className="fa fa-line-chart me-2" aria-hidden="true" />
            <a href={bank.mclr_link} target="_blank" rel="noopener noreferrer">
              MCLR: {bank.mclr_link}
            </a>
          </p>
        </div>

        {details.docs && (
          <div className="card-body">
            <div className="row">
              {details.docs.map((detail, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card h-100">
                    <div className="card-header p-1">
                      <h5 style={{ color: "#6c757d" }}>{detail.heading}</h5>
                    </div>
                    <div className="card-body">
                      <p>
                        <b>Purpose:</b> {detail.purpose}
                        <br />
                        <b>Currency:</b> {detail.currency}
                        <br />
                        <b>Interest Rate / Commission / Fees:</b> {detail.tenor}
                        <br />
                        <b>Any Other Condition:</b>{" "}
                        {detail.other_condition || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BankDetails;

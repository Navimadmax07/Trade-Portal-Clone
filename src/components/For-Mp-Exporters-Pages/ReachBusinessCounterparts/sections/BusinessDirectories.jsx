import React, { useState } from "react";
import CounterPartsMenu from "../../CounterPartsMenu";
// Dummy HS code options for demonstration
const hsCodeOptions = [
  { value: "", label: "Select HS Code" },
  { value: "01", label: "01 - Live animals" },
  { value: "02", label: "02 - Meat and edible meat offal" },
  {
    value: "03",
    label:
      "03 - Fish and crustaceans, molluscs and other aquatic invertebrates",
  },
  {
    value: "04",
    label:
      "04 - Dairy produce; birds' eggs; natural honey; edible products of animal origin, not elsewhere specified or included",
  },
  {
    value: "05",
    label:
      "05 - Products of animal origin, not elsewhere specified or included",
  },
  {
    value: "06",
    label:
      "06 - Live trees and other plants; bulbs, roots and the like; cut flowers and ornamental foliage",
  },
  { value: "07", label: "07 - Edible vegetables and certain roots and tubers" },
  {
    value: "08",
    label: "08 - Edible fruit and nuts; peel of citrus fruit or melons",
  },
  { value: "09", label: "09 - Coffee, tea, maté and spices" },
  { value: "10", label: "10 - Cereals" },
  // ...add more as needed
];

// Dummy companies data for demonstration
const dummyCompanies = [
  {
    _id: "1",
    company_name: "Global Exports Ltd.",
    number_of_products_traded: 12,
    number_of_employees: 100,
    country: "India",
    city: "Mumbai",
  },
  {
    _id: "2",
    company_name: "Euro Trade GmbH",
    number_of_products_traded: 8,
    number_of_employees: 50,
    country: "Germany",
    city: "Berlin",
  },
];

const BusinessDirectories = () => {
  const [selectedHSCode, setSelectedHSCode] = useState("");
  const [companies, setCompanies] = useState(dummyCompanies);
  const [modalCompany, setModalCompany] = useState(null);

  const handleHSCodeChange = (e) => {
    setSelectedHSCode(e.target.value);
    // In real app, fetch companies for selected HS code here
    // For demo, filter dummyCompanies
    if (e.target.value === "") {
      setCompanies(dummyCompanies);
    } else {
      setCompanies(dummyCompanies.filter((c) => c._id === "1")); // Just a demo filter
    }
  };

  const handleScheduleMeeting = (company) => {
    setModalCompany(company);
  };

  const handleCloseModal = () => {
    setModalCompany(null);
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
          <CounterPartsMenu />
        </div>
        <div className="col-md-9 pt-3">
          <div className="card col-md-12 bg-light">
            <div className="card-heading p-3">
              <h4 className="text-center">Companies by HS-Code</h4>
            </div>
            <div className="card-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                id="business"
              >
                <div className="row">
                  <div className="form-group col-10">
                    <select
                      className="form-control"
                      name="hs_code"
                      value={selectedHSCode}
                      onChange={handleHSCodeChange}
                    >
                      {hsCodeOptions.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          title={opt.label}
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-2">
                    <input
                      type="submit"
                      className="btn btn-danger"
                      value="Search"
                    />
                  </div>
                </div>
              </form>
              <br />
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Company Name</th>
                      <th>No. of Product Traded</th>
                      <th>No. of Employees</th>
                      <th>Country</th>
                      <th>City</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {companies.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center">
                          No Record Found
                        </td>
                      </tr>
                    ) : (
                      companies.map((f) => (
                        <tr key={f._id}>
                          <td>{f.company_name}</td>
                          <td>{f.number_of_products_traded}</td>
                          <td>{f.number_of_employees}</td>
                          <td>{f.country}</td>
                          <td>{f.city}</td>
                          <td>
                            <span
                              style={{ cursor: "pointer" }}
                              title="Schedule Meeting"
                              onClick={() => handleScheduleMeeting(f)}
                            >
                              <i
                                className="fa fa-handshake-o"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
                {/* Pagination can be added here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for scheduling meeting */}
      {modalCompany && (
        <div
          className="modal"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
          }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" style={{ marginTop: "10vh" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h4>Schedule Meeting</h4>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              </div>
              <div
                className="modal-body"
                style={{ backgroundColor: "antiquewhite" }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      `Meeting scheduled with ${modalCompany.company_name}!`
                    );
                    handleCloseModal();
                  }}
                >
                  <div className="row">
                    <div className="form-group col-9">
                      You are going to schedule meeting with
                      <br />
                      <b>{modalCompany.company_name}</b>
                    </div>
                    <div className="form-group col-2">
                      <input
                        type="submit"
                        className="btn btn-success"
                        value="Schedule"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessDirectories;

import React, { useState } from "react";
import CounterPartsMenu from "../../CounterPartsMenu";


// Dummy country list for demonstration (shortened for brevity)
const countryOptions = [
  "Afghanistan",
  "All",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "France",
  "Germany",
  "India",
  "Italy",
  "Japan",
  "Kenya",
  "Netherlands",
  "Nigeria",
  "Pakistan",
  "Russia",
  "South Africa",
  "United Kingdom",
  "United States of America",
  "Zimbabwe",
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

const BusinessDirectoriesCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [companies, setCompanies] = useState(dummyCompanies);
  const [modalCompany, setModalCompany] = useState(null);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    // In real app, fetch companies for selected country here
    // For demo, filter dummyCompanies
    if (e.target.value === "" || e.target.value === "All") {
      setCompanies(dummyCompanies);
    } else {
      setCompanies(dummyCompanies.filter((c) => c.country === e.target.value));
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
              <h4 className="text-center">Companies by Country</h4>
            </div>
            <div className="card-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="row">
                  <div className="form-group col-10">
                    <select
                      className="form-control"
                      name="country_name"
                      required
                      id="countryname"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                    >
                      <option value="">Select Country</option>
                      {countryOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
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

export default BusinessDirectoriesCountry;

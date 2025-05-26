import React, { useState } from "react";
import CounterPartsMenu from "../../CounterPartsMenu";


// Dummy country list for demonstration
const countryList = [
  { name: "India" },
  { name: "United States" },
  { name: "China" },
  { name: "Germany" },
  { name: "Brazil" },
];

const MarketInfo = () => {
  const [form, setForm] = useState({
    section_id: "1",
    name_section: "",
    post_section: "",
    contact_section: "",
    email_section: "",
    country_of_interest_section: "",
    hs_code_section: "",
    note_section: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Query submitted! (Demo only)");
    // Here you would send the form data to your backend
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
          <h3 className="text-center">Market Information</h3>
          <hr />
          <div className="row">
            <form onSubmit={handleSubmit} className="w-100">
              <div className="card">
                <div className="card-body bg-light">
                  <fieldset>
                    <legend>
                      <select
                        style={{
                          marginBottom: 5,
                          borderColor: "#000",
                          borderRadius: 5,
                        }}
                        className="form-control"
                        name="section_id"
                        value={form.section_id}
                        onChange={handleChange}
                      >
                        <option value="1">Best countries for trade</option>
                        <option value="2">Import / Export Flows</option>
                        <option value="3">Market Reports</option>
                        <option value="4">
                          HS Code specific Market analysis
                        </option>
                        <option value="5">Industry Alert</option>
                        <option value="6">Target Market Scan</option>
                        <option value="7">Market Trends</option>
                      </select>
                    </legend>
                    <div className="row">
                      <div className="form-group col-3">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name_section"
                          value={form.name_section}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-3">
                        <label>Post</label>
                        <input
                          type="text"
                          className="form-control"
                          name="post_section"
                          value={form.post_section}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-3">
                        <label>Contact Number</label>
                        <input
                          type="number"
                          className="form-control"
                          name="contact_section"
                          value={form.contact_section}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-3">
                        <label>Email Id</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email_section"
                          value={form.email_section}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-3">
                        <label>Country</label>
                        <select
                          className="form-control"
                          name="country_of_interest_section"
                          value={form.country_of_interest_section}
                          onChange={handleChange}
                        >
                          <option value="">Select Country</option>
                          {countryList.map((city) => (
                            <option key={city.name} value={city.name}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-3">
                        <label>HS Code</label>
                        <input
                          type="text"
                          className="form-control"
                          name="hs_code_section"
                          value={form.hs_code_section}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-6">
                        <label>Note</label>
                        <textarea
                          className="form-control"
                          name="note_section"
                          value={form.note_section}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </fieldset>
                  <hr />
                  <div className="row">
                    <div className="form-group col-3">
                      <input
                        type="submit"
                        className="btn btn-success"
                        value="Save"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInfo;

import React, { useState, useEffect } from "react";
// import { useSession } from "../SessionContext"; // Assuming you have a session context
import { useNavigate } from "react-router-dom";
import AnalyzeMenu from "./../AnalyzeMenu";
const MarketReport = () => {
  // const { isLoggedIn } = useSession(); // Assuming you have a session management context
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    section_id: "1",
    name_section: "",
    post_section: "",
    contact_section: "",
    email_section: "",
    country_of_interest_section: "",
    hs_code_section: "",
    note_section: "",
  });

  useEffect(() => {
    // Fetch countries data
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "http://api.mptradeportal.org/list/countries"
        );
        const data = await response.json();
        setCountries(data.doc.values);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${base_url}Client/MarketReport/saveData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Query submitted successfully!");
        // Reset form or redirect as needed
      } else {
        throw new Error("Failed to submit query");
      }
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("Error submitting query. Please try again.");
    }
  };

  // if (!isLoggedIn) {
  //   return (
  //     <div className="container-fluid" id="innerpage">
  //       <Header />
  //       <div className="row" id="dashboard">
  //         <div className="col-md-12">
  //           <p className="text-center py-5">
  //             <img src={`${base_url}assets/img/lock.gif`} alt="Lock" />
  //             <br />
  //             This feature can't be accessed without login
  //           </p>
  //         </div>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // }
  // const navigate = useNavigate();

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12">
          <div className="container mt-5">
            <div className="card bg-light">
              <div className="card-header text-center pt-2">
                <a
                  href="#"
                  onClick={() => navigate("/analyzeMarketTrend")}
                  className="btn btn-default pull-left"
                >
                  <i
                    className="fa fa-chevron-circle-left fa-2x"
                    aria-hidden="true"
                  ></i>
                </a>

                <h3>Post a Query</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <form onSubmit={handleSubmit}>
                    <div className="card">
                      <div className="card-body">
                        <fieldset>
                          <legend>
                            <select
                              style={{
                                marginBottom: "5px",
                                borderColor: "#000",
                                borderRadius: "5px",
                              }}
                              className="form-control"
                              name="section_id"
                              value={formData.section_id}
                              onChange={handleChange}
                            >
                              <option value="1">
                                Best countries for trade
                              </option>
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
                                placeholder=""
                                name="name_section"
                                value={formData.name_section}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-3">
                              <label>Designation</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="post_section"
                                value={formData.post_section}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-3">
                              <label>Contact Number</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder=""
                                name="contact_section"
                                value={formData.contact_section}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-3">
                              <label>Email Id</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder=""
                                name="email_section"
                                value={formData.email_section}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-3">
                              <label>Target Country</label>
                              <select
                                className="form-control"
                                name="country_of_interest_section"
                                value={formData.country_of_interest_section}
                                onChange={handleChange}
                              >
                                <option value="">Select Country</option>
                                {countries.map((country) => (
                                  <option
                                    key={country.name}
                                    value={country.name}
                                  >
                                    {country.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="form-group col-3">
                              <label>HS Code</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="hs_code_section"
                                value={formData.hs_code_section}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-6">
                              <label>Question/Description/Suggestion</label>
                              <textarea
                                className="form-control"
                                placeholder=""
                                name="note_section"
                                value={formData.note_section}
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
        </div>
      </div>
    </div>
  );
};

export default MarketReport;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const PostQuery = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend API
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="container mt-5">
          <div className="card col-md-12 bg-light">
            <div className="card-heading p-3">
              <Link to="/dashboard" className="btn btn-light">
                <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i>
              </Link>
              <h4 className="text-center">Post Your Query</h4>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Country*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Product Interest*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message*</label>
                      <textarea
                        className="form-control"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary px-5">
                        Submit Query
                      </button>
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

export default PostQuery;
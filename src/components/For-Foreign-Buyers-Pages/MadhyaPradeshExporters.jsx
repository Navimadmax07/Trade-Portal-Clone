import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MadhyaPradeshExporters = () => {
  const [searchBy, setSearchBy] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const [exporters, setExporters] = useState([]);

  const productCategories = [
    { value: "1", label: "Agricultural Products" },
    { value: "2", label: "Textiles and Garments" },
    { value: "3", label: "Engineering Goods" },
    { value: "4", label: "Pharmaceuticals" },
    { value: "5", label: "Chemicals and Allied Products" },
    { value: "6", label: "Leather Products" },
    { value: "7", label: "Handicrafts" },
    { value: "8", label: "Food Processing" },
    { value: "9", label: "Auto Components" },
    { value: "10", label: "Others" },
  ];

  useEffect(() => {
    // Fetch the exporter list from an API (Replace with actual API call)
    fetch("/api/exporters")
      .then((response) => response.json())
      .then((data) => setExporters(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, this would make an API call
    // For demo, setting some sample data
    setExporters([
      {
        id: 1,
        name: "ABC Exports Ltd",
        hs_code: "1234",
        address: "Indore, MP",
        email: "abc@example.com",
        contact_name: "John Doe",
        company_name: "ABC Exports Ltd",
        products: "Agricultural Products",
      },
      {
        id: 2,
        name: "XYZ Industries",
        hs_code: "5678",
        address: "Bhopal, MP",
        email: "xyz@example.com",
        contact_name: "Jane Smith",
        company_name: "XYZ Industries",
        products: "Engineering Goods",
      },
    ]);
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="container mt-5">
          <div className="card col-md-12 bg-light">
            <div className="card-heading p-3">
              <Link to="/dashboard" className="btn btn-light">
                <i
                  className="fa fa-chevron-circle-left fa-2x"
                  aria-hidden="true"
                ></i>
              </Link>
              <h4 className="text-center">List of Madhya Pradesh Exporters</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSearch}>
                <div className="form-group mb-4">
                  <label className="radio-inline me-4">
                    <input
                      type="radio"
                      name="search"
                      value="name"
                      checked={searchBy === "name"}
                      onChange={() => setSearchBy("name")}
                    />{" "}
                    Search By Company Name
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="search"
                      value="product"
                      checked={searchBy === "product"}
                      onChange={() => setSearchBy("product")}
                    />{" "}
                    Search By Product Category
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    {searchBy === "name" ? (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Company Name"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        required
                      />
                    ) : (
                      <select
                        className="form-select"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        required
                      >
                        <option value="">Select Product Category</option>
                        {productCategories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary w-100">
                      Search
                    </button>
                  </div>
                </div>
              </form>

              <div className="table-responsive mt-4">
                <table className="table table-hover table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Company Name</th>
                      <th>HS Code</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Contact Person</th>
                      <th>Products</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exporters.length > 0 ? (
                      exporters.map((exporter) => (
                        <tr key={exporter.id}>
                          <td>{exporter.name}</td>
                          <td>{exporter.hs_code}</td>
                          <td>{exporter.address}</td>
                          <td>{exporter.email}</td>
                          <td>{exporter.contact_name}</td>
                          <td>{exporter.products}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-primary"
                              data-bs-toggle="modal"
                              data-bs-target={`#contactModal${exporter.id}`}
                            >
                              Contact
                            </button>

                            {/* Contact Modal */}
                            <div
                              className="modal fade"
                              id={`contactModal${exporter.id}`}
                              tabIndex="-1"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">
                                      Contact {exporter.name}
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <p>
                                      To initiate contact with {exporter.name},
                                      please use the following contact
                                      information:
                                    </p>
                                    <ul className="list-unstyled">
                                      <li>
                                        <strong>Contact Person:</strong>{" "}
                                        {exporter.contact_name}
                                      </li>
                                      <li>
                                        <strong>Email:</strong> {exporter.email}
                                      </li>
                                      <li>
                                        <strong>Address:</strong>{" "}
                                        {exporter.address}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center py-4">
                          {searchValue
                            ? "No exporters found matching your search criteria."
                            : "Use the search form above to find exporters."}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadhyaPradeshExporters;

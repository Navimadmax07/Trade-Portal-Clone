import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnalyzeMenu from "./AnalyzeMenu";

const AnalyzeMarketTrend = () => {
  const [searchType, setSearchType] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("1");
  const [companyName, setCompanyName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    setSearchResults([]);
  };

  const products = [
    { value: "1", label: "Select Product" },
    { value: "2", label: "Base metals and articles of base metal" },
    { value: "3", label: "Chemicals" },
    { value: "4", label: "Fats and oils" },
    { value: "5", label: "Footwear, headgear, umbrellas, feathers" },
    { value: "6", label: "Jewellery, precious metals, pearls" },
    { value: "7", label: "Leather and articles thereof" },
    { value: "8", label: "Live animals; animal products" },
    { value: "9", label: "Machinery and mechanical appliances,..." },
    { value: "10", label: "Mineral products" },
    { value: "11", label: "Optical, photographic, precision, medical..." },
    { value: "12", label: "Paper, paperboards, pulp of wood" },
    { value: "13", label: "Plastics, rubber" },
    { value: "14", label: "Prepared foodstuffs, beverages, tobacco" },
    { value: "15", label: "Stone, plaster, cement, ceramic, glass ..." },
    { value: "16", label: "Textiles" },
    { value: "17", label: "Transport equipment" },
    { value: "18", label: "Vegetable products" },
    { value: "19", label: "Wood, cork" },
    { value: "20", label: "Works of arts, collectors' pieces and antiques" },
  ];

  return (
    <div className="container-fluid" id="innerpage">
          <div className="row" id="dashboard">
            <div className="col-md-3 pt-3" id="sidemenu">
              <Link to="/" className="btn btn-light mb-3">
              <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i>
    
              </Link>
          <AnalyzeMenu />
        </div>

        <div className="col-md-9">
          <div className="card mb-4 shadow">
            <div className="card-header bg-white p-4">
              <h4 className="text-primary mb-3">Search by Company / Product</h4>
              <form onSubmit={handleSearch}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-group d-flex gap-4">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="searchType"
                          id="productSearch"
                          value="product"
                          checked={searchType === "product"}
                          onChange={(e) => setSearchType(e.target.value)}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="productSearch"
                        >
                          Product
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="searchType"
                          id="companySearch"
                          value="company"
                          checked={searchType === "company"}
                          onChange={(e) => setSearchType(e.target.value)}
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="companySearch"
                        >
                          Company
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <select
                      className="form-select"
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      required
                    >
                      {products.map((product) => (
                        <option key={product.value} value={product.value}>
                          {product.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <select
                      className="form-select"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="china">China</option>
                      <option value="usa">USA</option>
                    </select>
                  </div>

                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary px-4">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th className="py-3">Company Name</th>
                      <th className="py-3">Address / State</th>
                      <th className="py-3">Product / No of Shipments</th>
                      <th className="py-3">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((result, index) => (
                      <tr key={index}>
                        <td className="py-3">{result.company}</td>
                        <td className="py-3">
                          {result.state} {result.address}
                        </td>
                        <td className="py-3">
                          {result.number_of_shipments} {result.product}
                        </td>
                        <td className="py-3">{result.description}</td>
                      </tr>
                    ))}
                    {searchResults.length === 0 && (
                      <tr>
                        <td colSpan="4" className="text-center py-4 text-muted">
                          No results found. Please modify your search criteria
                          and try again.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body text-center p-5">
              <h2 className="text-primary mb-4">Analyze Market Trends</h2>
              <p className="text-muted mb-4">
                Collect market information and select the most promising target
                countries for your products and services.
              </p>
              <div className="col-md-4 mx-auto">
                <img
                  src="/src/assets/trend.jpg"
                  className="img-fluid rounded"
                  alt="Market Trends"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeMarketTrend;

import React, { useState } from "react";

const countryOptions = [
  { value: "", label: "Select Country" },
  { value: "china", label: "China" },
  { value: "usa", label: "USA" },
];

const productOptions = [
  { value: "1", label: "Select Product" },
  { value: "2", label: "Base metals and articles of base metal" },
  { value: "3", label: "Chemicals" },
  { value: "4", label: "Fats and oils" },
  { value: "5", label: "Footwear, headgear, umbrellas, feathers" },
  { value: "6", label: "Jewellery, precious metals, pearls" },
  { value: "7", label: "Leather and articles thereof" },
  { value: "8", label: "Live animals; animal products" },
  { value: "9", label: "Machinery and mechanical appliances" },
  { value: "10", label: "Mineral products" },
  { value: "11", label: "Optical, photographic, precision, medical" },
  { value: "12", label: "Paper, paperboards, pulp of wood" },
  { value: "13", label: "Plastics, rubber" },
  { value: "14", label: "Prepared foodstuffs, beverages, tobacco" },
  { value: "15", label: "Stone, plaster, cement, ceramic, glass" },
  { value: "16", label: "Textiles" },
  { value: "17", label: "Transport equipment" },
  { value: "18", label: "Vegetable products" },
  { value: "19", label: "Wood, cork" },
  { value: "20", label: "Works of arts, collectors' pieces and antiques" },
];

const dummyResults = [
  {
    company: "ABC Exports Ltd.",
    state: "California",
    address: "123 Main St, Los Angeles",
    number_of_shipments: 12,
    product: "Machinery",
    description: "Leading exporter of industrial machinery.",
  },
  {
    company: "Global Foods",
    state: "Texas",
    address: "456 Market Ave, Houston",
    number_of_shipments: 8,
    product: "Prepared foodstuffs",
    description: "Exporter of packaged foods and beverages.",
  },
];

const BusinessCounterparts = () => {
  const [searchType, setSearchType] = useState("");
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("1");
  const [companyName, setCompanyName] = useState("");
  const [results, setResults] = useState(dummyResults);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would fetch and set results based on search criteria
    setResults(dummyResults); // For demo, always show dummy results
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-3 pt-3" id="sidemenu">
          <a href="/" className="btn btn-default">
            <i
              className="fa fa-chevron-circle-left fa-2x"
              aria-hidden="true"
            ></i>
          </a>
          {/* <CounterPartsMenu /> */}
        </div>
        <div className="col-md-9 pt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header p-4">
                  <h4 className="text-center">Search by Company / Product</h4>
                  <br />
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-5">
                        <label>
                          <input
                            type="radio"
                            name="search"
                            value="product"
                            checked={searchType === "product"}
                            onChange={() => setSearchType("product")}
                            required
                          />{" "}
                          Product
                        </label>
                        &nbsp;&nbsp;
                        <label>
                          <input
                            type="radio"
                            name="search"
                            value="company"
                            checked={searchType === "company"}
                            onChange={() => setSearchType("company")}
                            required
                          />{" "}
                          Company
                        </label>
                      </div>
                      <div className="form-group col-5">
                        <select
                          className="form-control"
                          name="country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          required
                        >
                          {countryOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-5">
                        <select
                          className="form-control"
                          name="product"
                          value={product}
                          onChange={(e) => setProduct(e.target.value)}
                        >
                          {productOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-5">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Company Name"
                          name="company_name"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-2">
                        <input
                          type="submit"
                          className="btn btn-primary"
                          value="Search"
                          name="Reach_business_counterparts"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Address / State</th>
                        <th>Product / No of Shipments</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="text-center">
                            Please select any option
                          </td>
                        </tr>
                      ) : (
                        results.map((r, idx) => (
                          <tr key={idx}>
                            <td>{r.company}</td>
                            <td>
                              {r.state} {r.address}
                            </td>
                            <td>
                              {r.number_of_shipments} {r.product}
                            </td>
                            <td>{r.description}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  {/* Pagination or links can be added here if needed */}
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <h2>Reach Business Counterparts</h2>
                  <p>
                    Planning to start Exporting business? Use Analyse Market
                    Trend to get best information
                  </p>
                  <div className="col-md-4 offset-4">
                    <img
                      src="/assets/trend.jpg"
                      className="img-fluid"
                      alt="Market Trend"
                    />
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

export default BusinessCounterparts;

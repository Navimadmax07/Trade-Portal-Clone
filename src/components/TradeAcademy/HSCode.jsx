import React, { useState } from "react";

const HSCode = () => {
  const [searchType, setSearchType] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTypeChange = (e) => setSearchType(e.target.value);
  const handleValueChange = (e) => setSearchValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let url = "";
    if (searchType === "name") {
      url = `https://api.mptradeportal.org/hscode/name/${searchValue}?page=1`;
    } else {
      url = `https://api.mptradeportal.org/hscode/number/${searchValue}?page=1`;
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data?.docs || []);
    } catch {
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <div className="container" id="innerpage">
      <div className="row">
        <div className="col-md-4 offset-md-4 text-center">
          <h2 className="text-center font-weight-bold mt-5 text-uppercase">
            Search HS Code
          </h2>
          <hr />
          <form
            action="https://mptradeportal.org/SearchCode/SearchHSCode"
            method="post"
          >
            <div className="form-group">
              <label className="radio-inline">
                <input
                  type="radio"
                  name="search"
                  value="name"
                  id="name"
                  required
                />{" "}
                Search By Name
              </label>
              &ensp;&ensp;
              <label className="radio-inline">
                <input
                  type="radio"
                  name="search"
                  value="code"
                  id="code"
                  required
                />{" "}
                Search By Code
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="search_hs"
                id="search_by_name"
                className="form-control"
                placeholder="Search by Name/Code"
                required
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-danger" value="Search Now" />
            </div>
          </form>
        </div>
        <div className="col-md-10 offset-md-1">
          <table
            className="table table-hover table-bordered mt-4"
            id="order-listing"
          >
            <thead>
              <tr>
                <th>Code</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <p className="text-center">No Record Found </p>
        </div>
      </div>
    </div>
  );
};

export default HSCode;

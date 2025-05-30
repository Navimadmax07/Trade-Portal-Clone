import React, { useEffect, useState } from "react";

function LabellingRules() {
  // Placeholder for authentication (removed login check)
  const [countries, setCountries] = useState([]);
  const [form, setForm] = useState({
    import_country: "",
    export_country: "",
    manufacture_country: "",
    mode_of_transport: "1",
    document_specific: "1",
  });
  const [exportDocs, setExportDocs] = useState([]);
  const [importDocs, setImportDocs] = useState([]);
  const [activeTab, setActiveTab] = useState("export");

  useEffect(() => {
    // Fetch country data from API
    fetch("http://api.mptradeportal.org/list/countries")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.doc && data.doc.values) {
          setCountries(data.doc.values);
        }
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real API call
    // Simulate fetching documents
    setExportDocs([
      {
        _id: "1",
        name: "Export Doc 1",
        description: "Description for export doc 1",
        source: "Source A",
        document_type: "Type X",
        filename: "#",
      },
    ]);
    setImportDocs([
      {
        _id: "2",
        name: "Import Doc 1",
        description: "Description for import doc 1",
        source: "Source B",
        document_type: "Type Y",
        filename: "#",
      },
    ]);
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light"
      id="innerpage"
    >
      <div className="row w-100 justify-content-center" id="dashboard">
        <div className="col-md-10 pt-3" id="sidemenu">
          <div className="row justify-content-center">
            <div className="col-12">
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="card shadow">
                  <div className="card-heading p-3 bg-primary text-white rounded-top">
                    <h4 className="text-center m-0">Labelling Rules</h4>
                  </div>
                  <div className="card-body bg-light">
                    <div className="row">
                      <div className="form-group col-12 col-md-4 mb-3">
                        <label>Import Country</label>
                        <select
                          className="form-control"
                          name="import_country"
                          value={form.import_country}
                          onChange={handleChange}
                        >
                          <option value="">Select Country</option>
                          {countries.map((city) => (
                            <option key={city.value} value={city.value}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-12 col-md-4 mb-3">
                        <label>Export Country</label>
                        <select
                          className="form-control"
                          name="export_country"
                          value={form.export_country}
                          onChange={handleChange}
                        >
                          <option value="">Select Country</option>
                          {countries.map((city) => (
                            <option key={city.value} value={city.value}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-12 col-md-4 mb-3">
                        <label>Manufacturing Country</label>
                        <select
                          className="form-control"
                          name="manufacture_country"
                          value={form.manufacture_country}
                          onChange={handleChange}
                        >
                          <option value="">Select Country</option>
                          {countries.map((city) => (
                            <option key={city.value} value={city.value}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-12 col-md-4 mb-3">
                        <label>Mode of Transport</label>
                        <select
                          className="form-control"
                          name="mode_of_transport"
                          value={form.mode_of_transport}
                          onChange={handleChange}
                        >
                          <option value="1">Air</option>
                          <option value="2">Sea</option>
                          <option value="3">Land</option>
                        </select>
                      </div>
                      <div className="form-group col-12 col-md-4 mb-3">
                        <label>Document Specific</label>
                        <select
                          className="form-control"
                          name="document_specific"
                          value={form.document_specific}
                          onChange={handleChange}
                        >
                          <option value="1">Country Specific</option>
                          <option value="2">
                            Country and Product Specific
                          </option>
                        </select>
                      </div>
                      <div className="form-group col-12 col-md-4 mb-3 d-flex align-items-end">
                        <button type="submit" className="btn btn-info w-100">
                          Search Documents
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="card shadow">
                <div className="card-heading bg-secondary rounded-top">
                  <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                      <button
                        className={`nav-link${
                          activeTab === "export" ? " active" : ""
                        }`}
                        onClick={() => setActiveTab("export")}
                        type="button"
                      >
                        Export Documents ({exportDocs.length})
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link${
                          activeTab === "import" ? " active" : ""
                        }`}
                        onClick={() => setActiveTab("import")}
                        type="button"
                      >
                        Import Documents ({importDocs.length})
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    {activeTab === "export" && (
                      <div className="tab-pane fade show active" id="export">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Description</th>
                              <th>Source</th>
                              <th>Document Type</th>
                              <th>File</th>
                            </tr>
                          </thead>
                          <tbody>
                            {exportDocs.length === 0 ? (
                              <tr>
                                <td colSpan="5" className="text-center">
                                  No export documents found.
                                </td>
                              </tr>
                            ) : (
                              exportDocs.map((r) => (
                                <tr key={r._id}>
                                  <td>{r.name}</td>
                                  <td>
                                    <span
                                      style={{ cursor: "pointer" }}
                                      title={r.description}
                                    >
                                      <i
                                        className="fa fa-file-text pr-2"
                                        aria-hidden="true"
                                      ></i>
                                      click
                                    </span>
                                  </td>
                                  <td>{r.source}</td>
                                  <td>{r.document_type}</td>
                                  <td>
                                    {r.filename && (
                                      <a
                                        href={r.filename}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <i
                                          className="fa fa-file-pdf-o"
                                          aria-hidden="true"
                                          title="download"
                                        ></i>
                                      </a>
                                    )}
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {activeTab === "import" && (
                      <div className="tab-pane fade show active" id="import">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Description</th>
                              <th>Source</th>
                              <th>Document Type</th>
                              <th>File</th>
                            </tr>
                          </thead>
                          <tbody>
                            {importDocs.length === 0 ? (
                              <tr>
                                <td colSpan="5" className="text-center">
                                  No import documents found.
                                </td>
                              </tr>
                            ) : (
                              importDocs.map((r) => (
                                <tr key={r._id}>
                                  <td>{r.name}</td>
                                  <td>
                                    <span
                                      style={{ cursor: "pointer" }}
                                      title={r.description}
                                    >
                                      <i
                                        className="fa fa-file-text pr-2"
                                        aria-hidden="true"
                                      ></i>
                                      click
                                    </span>
                                  </td>
                                  <td>{r.source}</td>
                                  <td>{r.document_type}</td>
                                  <td>
                                    {r.filename && (
                                      <a
                                        href={r.filename}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <i
                                          className="fa fa-file-pdf-o"
                                          aria-hidden="true"
                                          title="download"
                                        ></i>
                                      </a>
                                    )}
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabellingRules;

import React, { useState } from "react";
import CounterPartsMenu from "../../CounterPartsMenu";

// Dummy country data for dropdowns
const countryList = [
  { value: "", name: "Select Country" },
  { value: "IN", name: "India" },
  { value: "US", name: "United States" },
  { value: "CN", name: "China" },
];

// Dummy documents data for demonstration
const dummyExportDocs = [
  {
    _id: "exp1",
    name: "Export Invoice",
    description: "A commercial invoice required for export.",
    source: "Exporter",
    document_type: "Invoice",
    filename: "/docs/export_invoice.pdf",
  },
];
const dummyImportDocs = [
  {
    _id: "imp1",
    name: "Import License",
    description: "A license required for import.",
    source: "Importer",
    document_type: "License",
    filename: "/docs/import_license.pdf",
  },
];

const ImportControl = () => {
  const [importCountry, setImportCountry] = useState("");
  const [exportCountry, setExportCountry] = useState("");
  const [manufactureCountry, setManufactureCountry] = useState("");
  const [modeOfTransport, setModeOfTransport] = useState("1");
  const [documentSpecific, setDocumentSpecific] = useState("1");
  const [activeTab, setActiveTab] = useState("export");
  const [exportDocs] = useState(dummyExportDocs);
  const [importDocs] = useState(dummyImportDocs);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can fetch and update docs here based on form values
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-3" id="sidemenu">
          <a href="/Client/Dashboard" className="btn btn-default">
            <i
              className="fa fa-chevron-circle-left fa-2x"
              aria-hidden="true"
            ></i>
          </a>
          <CounterPartsMenu />
        </div>
        <div className="col-md-9 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-heading p-3">
                <h4 className="text-center">Import Control</h4>
              </div>
              <div className="card-body bg-light">
                <div className="row">
                  <div className="form-group col-4">
                    <label>Import Country</label>
                    <select
                      className="form-control"
                      name="import_country"
                      value={importCountry}
                      onChange={(e) => setImportCountry(e.target.value)}
                    >
                      {countryList.map((city) => (
                        <option key={city.value} value={city.value}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-4">
                    <label>Export Country</label>
                    <select
                      className="form-control"
                      name="export_country"
                      value={exportCountry}
                      onChange={(e) => setExportCountry(e.target.value)}
                    >
                      {countryList.map((city) => (
                        <option key={city.value} value={city.value}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-4">
                    <label>Manufacturing Country</label>
                    <select
                      className="form-control"
                      name="manufacture_country"
                      value={manufactureCountry}
                      onChange={(e) => setManufactureCountry(e.target.value)}
                    >
                      {countryList.map((city) => (
                        <option key={city.value} value={city.value}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-4">
                    <label>Mode of Transport</label>
                    <select
                      className="form-control"
                      name="mode_of_transport"
                      value={modeOfTransport}
                      onChange={(e) => setModeOfTransport(e.target.value)}
                    >
                      <option value="1">Air</option>
                      <option value="2">Sea</option>
                      <option value="3">Land</option>
                    </select>
                  </div>
                  <div className="form-group col-4">
                    <label>Document Specific</label>
                    <select
                      className="form-control"
                      name="document_specific"
                      value={documentSpecific}
                      onChange={(e) => setDocumentSpecific(e.target.value)}
                    >
                      <option value="1">Country Specific</option>
                      <option value="2">Country and Product Specific</option>
                    </select>
                  </div>
                  <div className="form-group col-4 mt-4">
                    <input
                      type="submit"
                      id="searchBtn"
                      name="searchBtn"
                      className="btn btn-info float-right"
                      value="Search Documents"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="card">
            <div className="card-heading">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    href="#export"
                    className={`nav-link${
                      activeTab === "export" ? " active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("export");
                    }}
                  >
                    Export Documents ({exportDocs.length})
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#import"
                    className={`nav-link${
                      activeTab === "import" ? " active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("import");
                    }}
                  >
                    Import Documents ({importDocs.length})
                  </a>
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
                            <td colSpan={5} className="text-center">
                              Please select any option
                            </td>
                          </tr>
                        ) : (
                          exportDocs.map((r) => (
                            <tr key={r._id}>
                              <td>{r.name}</td>
                              <td>
                                {r.description ? (
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#007bff",
                                    }}
                                    title={r.description}
                                  >
                                    <i
                                      className="fa fa-file-text pr-2"
                                      aria-hidden="true"
                                    ></i>
                                    click
                                  </span>
                                ) : null}
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
                            <td colSpan={5} className="text-center">
                              Please select any option
                            </td>
                          </tr>
                        ) : (
                          importDocs.map((r1) => (
                            <tr key={r1._id}>
                              <td>{r1.name}</td>
                              <td>
                                {r1.description ? (
                                  <span
                                    style={{
                                      cursor: "pointer",
                                      color: "#007bff",
                                    }}
                                    title={r1.description}
                                  >
                                    <i
                                      className="fa fa-file-text pr-2"
                                      aria-hidden="true"
                                    ></i>
                                    click
                                  </span>
                                ) : null}
                              </td>
                              <td>{r1.source}</td>
                              <td>{r1.document_type}</td>
                              <td>
                                {r1.filename && (
                                  <a
                                    href={r1.filename}
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
  );
};

export default ImportControl;

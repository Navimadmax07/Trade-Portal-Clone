import React, { useState } from "react";
import ShipmentsMenu from "../ShipmentsMenu";

const dummyCountries = [
  { value: "IN", name: "India" },
  { value: "US", name: "United States" },
  { value: "CN", name: "China" },
];

const dummyExportDocuments = [
  {
    _id: "1",
    name: "Export Invoice",
    description: "A document issued by the exporter to the importer.",
    source: "Exporter",
    document_type: "Invoice",
    filename: "https://example.com/export-invoice.pdf",
  },
];

const dummyImportDocuments = [
  {
    _id: "2",
    name: "Import License",
    description: "A document required for importing goods.",
    source: "Importer",
    document_type: "License",
    filename: "https://example.com/import-license.pdf",
  },
];

const ExportControl = () => {
  const [importCountry, setImportCountry] = useState("");
  const [exportCountry, setExportCountry] = useState("");
  const [manufactureCountry, setManufactureCountry] = useState("");
  const [modeOfTransport, setModeOfTransport] = useState("1");
  const [documentSpecific, setDocumentSpecific] = useState("1");
  const [showResults, setShowResults] = useState(false);
  const [modalDesc, setModalDesc] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const openModal = (desc) => {
    setModalDesc(desc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalDesc("");
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-3" id="sidemenu">
          <a href="/manageShipments" className="btn btn-default">
            <i
              className="fa fa-chevron-circle-left fa-2x"
              aria-hidden="true"
            ></i>
          </a>
          <ShipmentsMenu />
        </div>
        <div className="col-md-9 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-heading p-3">
                <h4 className="text-center">Export Control</h4>
              </div>
              <div className="card-body bg-light">
                <div className="row">
                  <div className="form-group col-4">
                    <label>Import Country</label>
                    <select
                      className="form-control"
                      value={importCountry}
                      onChange={(e) => setImportCountry(e.target.value)}
                      id="import_country"
                    >
                      <option value="">Select Country</option>
                      {dummyCountries.map((city) => (
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
                      value={exportCountry}
                      onChange={(e) => setExportCountry(e.target.value)}
                      id="export_country"
                    >
                      <option value="">Select Country</option>
                      {dummyCountries.map((city) => (
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
                      value={manufactureCountry}
                      onChange={(e) => setManufactureCountry(e.target.value)}
                      id="manufacture_country"
                    >
                      <option value="">Select Country</option>
                      {dummyCountries.map((city) => (
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
                      value={modeOfTransport}
                      onChange={(e) => setModeOfTransport(e.target.value)}
                      name="mode_of_transport"
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
                      value={documentSpecific}
                      onChange={(e) => setDocumentSpecific(e.target.value)}
                      name="document_specific"
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
          {showResults && (
            <div className="card">
              <div className="card-heading">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      href="#export"
                      className="nav-link active"
                      data-toggle="tab"
                    >
                      Export Documents ({dummyExportDocuments.length})
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#import" className="nav-link" data-toggle="tab">
                      Import Documents ({dummyImportDocuments.length})
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
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
                        {dummyExportDocuments.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="text-center">
                              No export documents found.
                            </td>
                          </tr>
                        ) : (
                          dummyExportDocuments.map((r) => (
                            <tr key={r._id}>
                              <td>{r.name}</td>
                              <td>
                                {r.description && (
                                  <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => openModal(r.description)}
                                  >
                                    <i
                                      className="fa fa-file-text pr-2"
                                      aria-hidden="true"
                                    ></i>
                                    click
                                  </span>
                                )}
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
                  <div className="tab-pane fade" id="import">
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
                        {dummyImportDocuments.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="text-center">
                              No import documents found.
                            </td>
                          </tr>
                        ) : (
                          dummyImportDocuments.map((r1) => (
                            <tr key={r1._id}>
                              <td>{r1.name}</td>
                              <td>
                                {r1.description && (
                                  <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => openModal(r1.description)}
                                  >
                                    <i
                                      className="fa fa-file-text pr-2"
                                      aria-hidden="true"
                                    ></i>
                                    click
                                  </span>
                                )}
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
                </div>
              </div>
            </div>
          )}
          {modalOpen && (
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
                    <button
                      type="button"
                      className="close"
                      onClick={closeModal}
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body text-justify">{modalDesc}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExportControl;

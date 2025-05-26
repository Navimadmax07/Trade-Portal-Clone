import React, { useState } from "react";

const Standard = () => {
  // Dummy data for demonstration. Replace with real data/fetch as needed.
  const [exportDocuments] = useState([]);
  const [importDocuments] = useState([]);
   // Set to false to show lock message

  // Example: handle form submit (replace with real logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch documents logic here
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center p-0" id="innerpage" style={{background: '#fff', minHeight: '100vh', minWidth: '100vw'}}>
      <div className="row w-100 h-100 justify-content-center m-0" id="dashboard">
        <div className="col-12 p-0 h-100" id="sidemenu">
          <div className="row justify-content-center h-100 m-0">
            {/* Sidebar menu placeholder. Replace with a React component if needed. */}
            {/* <div className="col-md-3"><ShipmentsMenu /></div> */}
            <div className="col-12 d-flex flex-column align-items-center h-100 p-0">
                <>
                  <form method="post" onSubmit={handleSubmit} style={{width: '110%'}}>
                    <div className="card mt-5 mx-auto" style={{maxWidth: '1000px', marginTop: '80px'}}>
                      <div className="card-heading p-3">
                        <h4 className="text-center">Standards</h4>
                      </div>
                      <div className="card-body bg-light">
                        <div className="row">
                          <div className="form-group col-4">
                            <label>Import Country</label>
                            <select className="form-control" name="import_country">
                              <option value="">Select Country</option>
                            </select>
                          </div>
                          <div className="form-group col-4">
                            <label>Export Country</label>
                            <select className="form-control" name="export_country">
                              <option value="">Select Country</option>
                            </select>
                          </div>
                          <div className="form-group col-4">
                            <label>Manufacturing Country</label>
                            <select className="form-control" name="manufacture_country">
                              <option value="">Select Country</option>
                            </select>
                          </div>
                          <div className="form-group col-4">
                            <label>Mode of Transport</label>
                            <select className="form-control" name="mode_of_transport">
                              <option value="1">Air</option>
                              <option value="2">Sea</option>
                              <option value="3">Land</option>
                            </select>
                          </div>
                          <div className="form-group col-4">
                            <label>Document Specific</label>
                            <select className="form-control" name="document_specific">
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
                  <div className="card mt-4">
                    <div className="card-heading">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a href="#export" className="nav-link active" data-toggle="tab">
                            Export Documents ({exportDocuments.length})
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#import" className="nav-link" data-toggle="tab">
                            Import Documents ({importDocuments.length})
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
                              {exportDocuments.length === 0 ? (
                                <tr>
                                  <td colSpan="5" className="text-center">
                                    Please select any option
                                  </td>
                                </tr>
                              ) : (
                                exportDocuments.map((r) => (
                                  <tr key={r._id}>
                                    <td>{r.name}</td>
                                    <td>
                                      {r.description && (
                                        <span
                                          style={{ cursor: "pointer" }}
                                          title={r.description}
                                        >
                                          <i className="fa fa-file-text pr-2" aria-hidden="true"></i>
                                          click
                                        </span>
                                      )}
                                    </td>
                                    <td>{r.source}</td>
                                    <td>{r.document_type}</td>
                                    <td>
                                      {r.filename && (
                                        <a href={r.filename} target="_blank" rel="noopener noreferrer">
                                          <i className="fa fa-file-pdf-o" aria-hidden="true" title="download"></i>
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
                              {importDocuments.length === 0 ? (
                                <tr>
                                  <td colSpan="5" className="text-center">
                                    Please select any option
                                  </td>
                                </tr>
                              ) : (
                                importDocuments.map((r1) => (
                                  <tr key={r1._id}>
                                    <td>{r1.name}</td>
                                    <td>
                                      {r1.description && (
                                        <span
                                          style={{ cursor: "pointer" }}
                                          title={r1.description}
                                        >
                                          <i className="fa fa-file-text pr-2" aria-hidden="true"></i>
                                          click
                                        </span>
                                      )}
                                    </td>
                                    <td>{r1.source}</td>
                                    <td>{r1.document_type}</td>
                                    <td>
                                      {r1.filename && (
                                        <a href={r1.filename} target="_blank" rel="noopener noreferrer">
                                          <i className="fa fa-file-pdf-o" aria-hidden="true" title="download"></i>
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
                </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standard;
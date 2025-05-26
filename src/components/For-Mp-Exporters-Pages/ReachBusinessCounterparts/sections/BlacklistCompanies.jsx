import React from "react";
import CounterPartsMenu from "../../CounterPartsMenu";


const BlacklistCompanies = ({ results = [], links = "" }) => {
  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-3 pt-3" id="sidemenu">
          <a href="/Client/Dashboard" className="btn btn-default">
            <i
              className="fa fa-chevron-circle-left fa-2x"
              aria-hidden="true"
            ></i>
          </a>
          <CounterPartsMenu /> 

        </div>


        <div className="col-md-9 pt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header p-4">
                  <h4>Blacklisted Companies</h4>
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Type</th>
                        <th>Contact Person</th>
                        <th>Source of Info</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.length === 0 ? (
                        <tr>
                          <td colSpan={5}>Please select any option</td>
                        </tr>
                      ) : (
                        results.map((r, idx) => (
                          <tr key={idx}>
                            <td>{r.name || ""}</td>
                            <td>{r.type || ""}</td>
                            <td>{r.call_sign || ""}</td>
                            <td>
                              {r.source_information_url ? (
                                <a
                                  href={r.source_information_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Link
                                </a>
                              ) : (
                                ""
                              )}
                            </td>
                            <td>{r.remarks || ""}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  {links && (
                    <div
                      className="pagination"
                      dangerouslySetInnerHTML={{ __html: links }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlacklistCompanies;

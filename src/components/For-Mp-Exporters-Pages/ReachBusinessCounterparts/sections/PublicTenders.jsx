import React from "react";
import CounterPartsMenu from "../../CounterPartsMenu";

// Dummy data for demonstration
const tenders = [
  {
    title: "Supply of Office Equipment",
    published_date: "2024-05-01",
    tender_start_date: "2024-05-05",
    tender_end_date: "2024-05-20",
    contract_start_date: "2024-06-01",
    contract_end_date: "2025-06-01",
    description:
      "Supply and installation of office equipment for the new branch.",
    url: "https://example.com/tender/1",
  },
  {
    title: "Construction of Warehouse",
    published_date: "2024-04-15",
    tender_start_date: "2024-04-20",
    tender_end_date: "2024-05-10",
    contract_start_date: "2024-06-15",
    contract_end_date: "2025-12-31",
    description: "Construction of a new warehouse in the industrial area.",
    url: "https://example.com/tender/2",
  },
];

const PublicTenders = () => {
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
          {/* <CounterPartsMenu /> */}
          <CounterPartsMenu />
        </div>
        <div className="col-md-9 pt-3">
          <div className="col-md-12">
            <div className="card col-12">
              <div className="card-heading">
                <h3 className="card-title p-4">Public Tenders</h3>
              </div>
              <div className="card-body table-responsive">
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                    <tr>
                      <th width="10">Tender Title</th>
                      <th width="10">Published On</th>
                      <th width="10">Tender Start/End Date</th>
                      <th width="10">Contract Start/End Date</th>
                      <th width="10">Description</th>
                      <th width="10">More Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tenders.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center">
                          No tenders available.
                        </td>
                      </tr>
                    ) : (
                      tenders.map((r, i) => (
                        <tr key={i}>
                          <td>{r.title}</td>
                          <td>
                            {r.published_date &&
                              new Date(r.published_date).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                          </td>
                          <td>
                            {r.tender_start_date &&
                              new Date(r.tender_start_date).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            <br />
                            {r.tender_end_date &&
                              new Date(r.tender_end_date).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                          </td>
                          <td>
                            {r.contract_start_date &&
                              new Date(
                                r.contract_start_date
                              ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            <br />
                            {r.contract_end_date &&
                              new Date(r.contract_end_date).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                          </td>
                          <td>
                            <span
                              style={{ cursor: "pointer", color: "#007bff" }}
                              title={r.description}
                              onClick={() => alert(r.description)}
                            >
                              <i
                                className="fa fa-file-text pr-2"
                                aria-hidden="true"
                              ></i>
                              click
                            </span>
                          </td>
                          <td>
                            <a
                              href={r.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              More Details
                            </a>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
                {/* Pagination can be added here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicTenders;

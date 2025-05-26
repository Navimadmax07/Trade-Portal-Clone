import React from "react";
import CounterPartsMenu from "../../CounterPartsMenu";


// Dummy data for demonstration
const tradeShows = [
  {
    id: 1,
    event_id: "EVT001",
    start_date: "2024-06-01",
    end_date: "2024-06-05",
    event_type: "Exhibition",
    name: "Global Trade Expo",
    url: "https://example.com/global-trade-expo",
    description:
      "A major international trade exhibition for exporters and importers.",
    cost: 100,
    registration_url: "https://example.com/register/global-trade-expo",
  },
  {
    id: 2,
    event_id: "EVT002",
    start_date: "2024-07-10",
    end_date: "2024-07-12",
    event_type: "Conference",
    name: "International Business Conference",
    url: "https://example.com/business-conference",
    description: "Conference for business networking and knowledge sharing.",
    cost: 50,
    registration_url: "https://example.com/register/business-conference",
  },
];

const TradeShows = () => {
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
        <div className="col-md-9">
          <div className="card col-md-12 bg-light">
            <div className="card-heading p-3">
              <h4>Trade Shows</h4>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-thumbnail">
                <thead>
                  <tr>
                    <th>Event No.</th>
                    <th>Duration Time</th>
                    <th>Event Type</th>
                    <th>Event Name</th>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tradeShows.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center">
                        No trade shows available.
                      </td>
                    </tr>
                  ) : (
                    tradeShows.map((r) => (
                      <tr key={r.id}>
                        <td>{r.id}</td>
                        <td>
                          {new Date(r.start_date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                          <br />
                          To <br />
                          {new Date(r.end_date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td>{r.event_type}</td>
                        <td>
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {r.name}
                          </a>
                        </td>
                        <td>
                          <span
                            style={{ cursor: "pointer" }}
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
                        <td>${r.cost}</td>
                        <td>
                          <a
                            href={r.registration_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            register here
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
  );
};

export default TradeShows;

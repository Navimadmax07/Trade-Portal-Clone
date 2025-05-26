import React from "react";

const undertakings = [
  {
    id: "p1",
    header: "ECGC Limited",
    img: "/src/assets/img/public_sector/1.jpg",
    name: "ECGC Limited",
    address:
      "(Formerly Export Credit Guarantee Corporation of India Limited) Express Tower, 10thFloor, Nariman Point, Mumbai -400021",
    phone: "(022) 6659 0500, (022) 6659 0510",
    fax: "(022)6659 0517/0546",
    email: "webmaster@ecgc.in",
  },
  {
    id: "p2",
    header: "India Trade Promotion Organization (ITPO)",
    img: "/src/assets/img/public_sector/2.jpg",
    name: "India Trade Promotion Organization (ITPO)",
    address: "Pragati Bhawan, Pragati Maidan, New Delhi-110001",
    phone: "91-11-23371540 (EPABX)",
    fax: "(91)11-23371492, 23371493",
    email: null,
  },
  {
    id: "p3",
    header: "MMTC Limited",
    img: "/src/assets/img/public_sector/3.jpg",
    name: "MMTC Limited",
    address:
      "Core 1, Scope Complex, 7, Institutional Area, Lodhi Road, New Delhi-110003.",
    phone: "(91)11- 24362200",
    fax: "(91)11-24362224",
    email: null,
  },
  {
    id: "p4",
    header: "PEC Limited",
    img: "/src/assets/img/public_sector/4.jpg",
    name: "PEC Limited",
    address: "'Hansalaya', 15, Barakhamba Road, New Delhi-110001",
    phone: "00-91-11-23316397",
    fax: "00-91-11-23316397",
    email: "pec@peclimited.com",
  },
  {
    id: "p5",
    header: "State Trading Corporation of India Limited (STC)",
    img: "/src/assets/img/public_sector/5.jpg",
    name: "State Trading Corporation of India Limited (STC)",
    address: "Jawahar Vaypar Bhawan, Tolstoy Marg, New Delhi-110001.",
    phone: "(91)11-23313177, (91)11-23701100",
    fax: "(91)11-23701123, 23701191",
    email: "co.stc@nic.in",
  },
];

const PublicSectorUndertaking = () => (
  <div className="container" id="innerpage">
    <div className="row">
      <div className="col-md-12">
        <h3 className="text-center font-weight-bold mt-5 text-uppercase">
          Public Sector Undertakings
        </h3>
        <div className="col-md-12" id="accordionExample">
          {undertakings.map((u, idx) => (
            <div className="card" key={u.id}>
              <div className="card-header" id={`head${idx + 1}`}>
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left text-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${u.id}`}
                    aria-expanded="true"
                    aria-controls={u.id}
                  >
                    {u.header}
                  </button>
                </h2>
              </div>
              <div
                id={u.id}
                className="collapse show"
                aria-labelledby={`head${idx + 1}`}
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={u.img} className="img-fluid" alt={u.name} />
                    </div>
                    <div className="col-md-6">
                      <h4>{u.name}</h4>
                      <p className="d-flex">
                        <i className="fa fa-building d-flex pr-3 pt-2"></i>{" "}
                        {u.address}
                      </p>
                      <p className="d-flex">
                        <i className="fa fa-phone d-flex pr-3 pt-2"></i>{" "}
                        {u.phone}
                      </p>
                      <p className="d-flex">
                        <i className="fa fa-print d-flex pr-3 pt-2"></i> {u.fax}
                      </p>
                      {u.email && (
                        <p className="d-flex">
                          <i className="fa fa-envelope d-flex pr-3 pt-1"></i>{" "}
                          {u.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PublicSectorUndertaking;

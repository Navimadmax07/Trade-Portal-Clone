import React from "react";

const organisations = [
  {
    id: "p1",
    header: "Bureau of Indian Standards",
    img: "/src/assets/img/other/1.png",
    name: "Bureau of Indian Standards",
    address: "Manak Bhavan 9 Bahadur Shah Zafar Marg, New Delhi 110 002, India",
    phone: "+91 11 23230131, 23233375, 23239402 (10 lines)",
    fax: "91 11 23234062, 23239399, 23239382",
    email: "info@bis.org.in",
  },
  {
    id: "p2",
    header: "Confederation of Indian Industry (CII)",
    img: "/src/assets/img/other/2.jpg",
    name: "Confederation of Indian Industry (CII)",
    address:
      "Mantosh Sondhi Centre 23 Institutional Area, Lodi Road, New Delhi-110003",
    phone: "91-11-24629994-7",
    fax: "91-11-2462 6149",
    email: null,
  },
  {
    id: "p3",
    header: "Export Inspection Council of India",
    img: "/src/assets/img/other/3.jpg",
    name: "Export Inspection Council of India",
    address:
      "IIIrd Floor - NDYMCA Cultural Centre Building, 1, Jaisingh Road, New Delhi – 110001",
    phone: "+91 – 11 – 23341263 / 23748189, 23365540",
    fax: "011 - 23748024",
    email: "eic@eicindia.gov.in",
  },
  {
    id: "p4",
    header: "Federation of Indian Chambers of Commerce and Industry (FICCI)",
    img: "/src/assets/img/other/4.jpg",
    name: "Federation of Indian Chambers of Commerce and Industry (FICCI)",
    address:
      "Federation House 1, Tansen Marg, Todermal Road Area, Mandi House, New Delhi-110001",
    phone: "91-11-23738760-70",
    fax: "00-91-11-23316397",
    email: "ficci@ficci.com",
  },
  {
    id: "p5",
    header: "Food Safety And Standard Authority of India (FSSAI)",
    img: "/src/assets/img/other/5.jpg",
    name: "Food Safety And Standard Authority of India (FSSAI)",
    address: "FDA Bhawan Near Bal Bhavan, Kotla Road, New Delhi-110002",
    phone: "011-23236975",
    fax: "011-23220994",
    email: null,
  },
  {
    id: "p6",
    header: "Footwear Design & Development Institute (FDDI)",
    img: "/src/assets/img/other/6.jpg",
    name: "Footwear Design & Development Institute (FDDI)",
    address:
      "A - 10 / A, Sector-24, Noida -201301 Gautam Budh Nagar, Uttar Pradesh",
    phone: "+91-120-4500100",
    fax: "+91(120) 2412556, 2411301",
    email: null,
  },
  {
    id: "p7",
    header: "Indian Diamond Institute",
    img: "/src/assets/img/other/7.jpg",
    name: "Indian Diamond Institute",
    address:
      "Katargam, GIDC, Post Box No.: 508 Sumul Dairy Road, Surat-395008, Gujarat",
    phone: "+ 91- 261-2407847/48",
    fax: "+ 91-261-2407849",
    email: "info@diamondinstitute.net , admission@diamondinstitute.net",
  },
  {
    id: "p8",
    header: "Indian Institute of Foreign Trade (IIFT)",
    img: "/src/assets/img/other/8.jpg",
    name: "Indian Institute of Foreign Trade (IIFT)",
    address:
      "IIFT Bhawan, B-21, Block B, Qutab Institutional Area, New Delhi-110016",
    phone: "+91-11-26965124, +91-11-26965051",
    fax: "+91-1126853956",
    email: null,
  },
  {
    id: "p9",
    header: "Indian Institute of Packaging",
    img: "/src/assets/img/other/9.jpg",
    name: "Indian Institute of Packaging",
    address: "E-2, MIDC Area, Post Box No. 9432, Andheri (E), Mumbai - 400093",
    phone: "91-22-28219803/6751/9469, 28391506, 28329623, 28254631",
    fax: "91-22-28328178/28375302",
    email: "iip@iip-in.com",
  },
  {
    id: "p10",
    header: "National Centre for Trade Information",
    img: "/src/assets/img/other/10.jpg",
    name: "National Centre for Trade Information",
    address: "Hall # 19, Pragati Maidan New Delhi - 110001",
    phone: "+91-11-23371948, 50, 53",
    fax: "+91-11-23371979",
    email: "ncti@ncti.gov.in",
  },
  {
    id: "p11",
    header: "Plant Quarantine Information System (PQIS)",
    img: "/src/assets/img/other/11.jpg",
    name: "Plant Quarantine Information System (PQIS)",
    address: "Dte. Of PPQ&S, N.H.-IV, Faridabad–121001 (Haryana)",
    phone: "0129-2413985, 0129-2418506",
    fax: "0129-2412125",
    email: null,
  },
  {
    id: "p12",
    header: "Quality Council of India",
    img: "/src/assets/img/other/12.jpg",
    name: "Quality Council of India",
    address:
      "Institution of Engineers Building, IInd Floor, 2 - Bahadur Shah Zafar Marg, New Delhi - 110002, India.",
    phone: "+91-11- 2337 9321, 2337 80",
    fax: "91-11-2337 8678",
    email: "info@qcin.org",
  },
];

const OtherOrganisations = () => {
  return (
    <div className="container" id="innerpage">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center font-weight-bold mt-5 text-uppercase">
            Other Organisations
          </h3>
          <div className="col-md-12" id="accordionExample">
            {organisations.map((org, idx) => (
              <div className="card" key={org.id}>
                <div className="card-header" id={`head${idx + 1}`}>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left text-dark"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#${org.id}`}
                      aria-expanded="true"
                      aria-controls={org.id}
                    >
                      {org.header}
                    </button>
                  </h2>
                </div>
                <div
                  id={org.id}
                  className="collapse show"
                  aria-labelledby={`head${idx + 1}`}
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={org.img}
                          className="img-fluid"
                          alt={org.name}
                        />
                      </div>
                      <div className="col-md-6">
                        <h4>{org.name}</h4>
                        <p className="d-flex">
                          <i className="fa fa-building d-flex pr-3 pt-2"></i>{" "}
                          {org.address}
                        </p>
                        <p className="d-flex">
                          <i className="fa fa-phone d-flex pr-3 pt-2"></i>{" "}
                          {org.phone}
                        </p>
                        <p className="d-flex">
                          <i className="fa fa-print d-flex pr-3 pt-2"></i>{" "}
                          {org.fax}
                        </p>
                        {org.email && (
                          <p className="d-flex">
                            <i className="fa fa-envelope d-flex pr-3 pt-1"></i>{" "}
                            {org.email}
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
};

export default OtherOrganisations;

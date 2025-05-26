import React from "react";

const check = (e, url) => {
  // Show alert for external links
  alert("You are navigating to other Website");
  // Allow navigation after alert
  window.open(url, "_blank");
};

const acts = [
  {
    label: "Customs Act, 1962",
    url: "https://www.cbic.gov.in/",
    external: true,
  },
  {
    label: "Customs Tariff Act, 1975",
    url: "https://www.cbic.gov.in/",
    external: true,
  },
  {
    label: "Foreign Exchange Management Act, 1999",
    url: "http://www.dor.gov.in/Foreign_Exchange",
    external: true,
  },
  {
    label: "Foreign Trade Development and Regulation Amendment Act, 2010",
    url: "/assets/pdf/ftdract2010.pdf",
    external: false,
  },
  {
    label: "Foreign Trade Development and Regulation Act, 1992",
    url: "/assets/pdf/FTDR_Act.pdf",
    external: false,
  },
  {
    label: "Special Economic Zones Act, 2005",
    url: "http://sezindia.nic.in/cms/sez-act.php",
    external: true,
  },
  {
    label: "CGST (Extension to Jammu and Kashmir) Act, 2017",
    url: "https://www.cbic.gov.in/",
    external: true,
  },
  {
    label: "CGST Act",
    url: "https://www.cbic.gov.in/",
    external: true,
  },
  {
    label: "GST Compensation to States Act",
    url: "https://www.cbic.gov.in/",
    external: true,
  },
  {
    label: "IGST Act",
    url: "https://www.cbic.gov.in/",
    external: true,
  },
  {
    label: "IGST (Extension to Jammu and Kashmir) Act, 2017",
    url: "https://www.cbic.gov.in/",
    external: true,
  },
  {
    label: "UTGST Act",
    url: "https://www.cbic.gov.in/",
    external: true,
  },
];

const Acts = () => (
  <div className="container-fluid" id="innerpage">
    <style>{`
      #acts a {
        text-decoration: none;
        color: #4B6CB7;
        font-size: 20px;
        transition: color 0.2s, margin-left 0.2s linear 0s;
      }
      #acts ul {
        list-style: none;
      }
      #acts ul li a:hover {
        color: red;
        margin-left: 10px;
      }
    `}</style>
    <div className="row bg-white" id="dashboard">
      <div className="col-md-12">
        <div className="container" id="acts">
          <h3 className="text-center font-weight-bold mt-5 text-uppercase">
            India's Foreign Trade Related Acts
          </h3>
          <div className="row mt-5">
            <div className="col-md-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <ul>
                    {acts.map((act, idx) => (
                      <li
                        className={idx === 0 ? "title" : "mt-3"}
                        key={act.label}
                      >
                        {act.external ? (
                          <a
                            href={act.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.preventDefault();
                              check(e, act.url);
                            }}
                          >
                            <i className="fa fa-angle-double-right"></i>{" "}
                            {act.label}
                          </a>
                        ) : (
                          <a
                            href={act.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-angle-double-right"></i>{" "}
                            {act.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Acts;

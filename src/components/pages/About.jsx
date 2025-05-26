import React from "react";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";

const About = () => {
  return (
    <>
      {/* <Header /> */}

      <div className="container" id="innerpage">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center font-weight-bold mt-5">
              ABOUT MP TRADE PORTAL
            </h3>
            <hr />
            <div className="row">
              <p className="text-justify">
                The MP Trade Portal is an initiative of the Department of
                Industrial Policy and Investment Promotion, GoMP and is
                developed and maintained by MP Industrial Development
                Corporation.
              </p>
              <p className="text-justify">
                It aims to simplify market research for new and existing
                exporters of Madhya Pradesh, and especially Small and Medium
                Enterprises, Farmers & FPOs, Handicraft and Handlooms
                entrepreneurs, startups etc. by integrating trade and business
                information into a single online portal.
              </p>
              <p>
                The MP Trade Portal brings together crucial information from
                across agencies in a user-friendly format to improve access to
                information for exporters from Madhya Pradesh and to provide
                access to crucial resources that can empower them to become
                active exporters.
              </p>
            </div>

            <div className="row mt-4">
              <div className="col-md-12 p-2">
                <div className="card">
                  <div className="card-header p-4">
                    <h2>Benefits of using MP Trade Portal</h2>
                  </div>
                  <div className="card-body">
                    <h3>
                      Explore Markets - A strategic overview of opportunities in
                      your target market
                    </h3>
                    <p className="text-justify">
                      <b>
                        How large is the demand for my product in the target
                        market?
                      </b>
                      <br />
                      Access annual import data for your target country for the
                      last 5 years, growth in demand over the last five years,
                      your country’s market share and remaining room for export
                      growth in the coming 5 years.
                    </p>

                    <h3>Assess Requirements</h3>
                    <p className="text-justify">
                      <b>
                        Can I access this market? What are the conditions and
                        requirements I will face?
                      </b>
                      <br />
                      Find information about applied and preferential tariffs,
                      regulatory requirements you will face in the target
                      market, as well as information about recent regulatory
                      changes.
                    </p>

                    <h3>Navigate Procedures</h3>
                    <p className="text-justify">
                      <b>
                        What are the steps I need to take to get my products to
                        market?
                      </b>
                      <br />
                      Get to know the procedures required by your country to get
                      your good to markets and the institutions you will need to
                      engage with to complete the process.
                    </p>

                    <h3>Identify Partners</h3>
                    <p className="text-justify">
                      <b>
                        Which key partners can help me implement my export plan?
                      </b>
                      <br />
                      Find contact information for importing companies, trade
                      finance providers, and trade promotion organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <h3 className="font-weight-bold mt-5 text-uppercase">
                Export Scenario of Madhya Pradesh
              </h3>
              <hr />
              <p>
                Madhya Pradesh has exported merchandise of $6.4 Billion in
                2020-21 which is 45% more than $4.4 Billion in 2016-17.
              </p>
              <p>
                With around 15,000 exporters registered in Madhya Pradesh,
                sectors in which Madhya Pradesh is excelling are
              </p>
              <ol>
                <li>Pharmaceutical</li>
                <li>Textile Viscose</li>
                <li>Garment</li>
                <li>Engineering Goods and Machinery</li>
                <li>Chemicals</li>
                <li>Mining and Minerals</li>
                <li>Electrical & Electronics</li>
                <li>Auto & Auto Component</li>
                <li>Agriculture and Allied Products</li>
              </ol>
            </div>

            <div className="col-md-12">
              <h3
                className="text-center font-weight-bold mt-5 text-uppercase"
                style={{ color: "red" }}
              >
                Analysis of Top Exported items from Madhya Pradesh
              </h3>
              <br />
            </div>

            <div className="col-md-12">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#industrial"
                  >
                    Top Industrial Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#agriculture"
                  >
                    Top Agriculture Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#gi">
                    Top GI Products
                  </a>
                </li>
              </ul>

              <div className="tab-content mt-3">
                <div className="tab-pane fade show active" id="industrial">
                  <Table1 />
                </div>
                <div className="tab-pane fade" id="agriculture">
                  <Table2 />
                </div>
                <div className="tab-pane fade" id="gi">
                  <Table3 />
                </div>
              </div>
            </div>

            {/* Download Button (Optional)
            <div className="col-md-12 text-center mt-5">
              <h3 className="text-uppercase font-weight-bold">
                FOR DETAILED REPORT PLEASE CLICK HERE TO DOWNLOAD
                <a href="/assets/Top30ProductMP.xlsx" download="Top30ProductMP.xlsx">
                  <button className="btn btn-warning ml-2">
                    <i className="fas fa-file-download"></i>
                  </button>
                </a>
              </h3>
            </div> */}
          </div>
        </div>
      </div>

      <br />
      <br />
      {/* <Footer /> */}
    </>
  );
};

export default About;

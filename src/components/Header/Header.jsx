import React from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="wsmainfull clearfix">
      <div className="clearfix">
        <nav className="wsmenu clearfix">
          <ul className="wsmenu-list">
            <li aria-haspopup="true" className="wscenterlogo">
              <a href="/">
                <img
                  src="/src/assets/img/logo.png"
                  width="50px"
                  height="50px"
                  alt="Logo"
                />
                <img
                  src="/src/assets/img/mpidc.png"
                  width="100px"
                  style={{
                    marginLeft: "5px",
                    borderLeft: "1px solid darkgrey",
                  }}
                  alt="MPIDC"
                />
              </a>
            </li>

            <li aria-haspopup="true">
              <a  onClick={() => navigate("about")}>
                About Us
              </a>
            </li>

            <li aria-haspopup="true">
              <a href="javascript:void(0)">
                For MP Exporters <span className="wsarrow"></span>
              </a>
              <ul className="sub-menu">
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("analyzeMarketTrend")}>
                    <i className="fas fa-angle-right"></i> Analyze Market Trends
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a
                    
                    onClick={() => navigate("reachBusinessCounterparts")}
                  >
                    <i className="fas fa-angle-right"></i> Reach Business
                    Counterparts
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("manageShipments")}>
                    <i className="fas fa-angle-right"></i> Manage Shipments
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("tradeFinance")}>
                    <i className="fas fa-angle-right"></i> Trade Finance
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("establishOverseas")}>
                    <i className="fas fa-angle-right"></i> Establish Overseas
                  </a>
                </li>
              </ul>
            </li>

            <li aria-haspopup="true">
              <a href="javascript:void(0)">
                For Foreign Buyers <span className="wsarrow"></span>
              </a>
              <ul className="sub-menu">
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("mpExporters")}>
                    <i className="fas fa-angle-right"></i> List of Madhya
                    Pradesh Exporters
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("postQuery")}>
                    <i className="fas fa-angle-right"></i> Post a query
                  </a>
                </li>
              </ul>
            </li>

            <li aria-haspopup="true">
              <a href="javascript:void(0)">
                ODOP <span className="wsarrow"></span>
              </a>
              <ul className="sub-menu">
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("districtProfileOdop")}>
                    <i className="fas fa-angle-right"></i> District ODOP Profile
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a
                    href="/src/assets/pdf/mpodopseller.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-angle-right"></i> Madhya Pradesh ODOP
                    Seller List
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("stateNodalOfficers")}>
                    <i className="fas fa-angle-right"></i> State Nodal Officers
                    List
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a
                    href="/src/assets/pdf/odop_activity.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-angle-right"></i> ODOP Activities
                  </a>
                </li>
              </ul>
            </li>

            <li aria-haspopup="true">
              <a  onClick={() => navigate("howToStartExport")}>
                How to Start Export?
              </a>
            </li>

            <li aria-haspopup="true">
              <a href="javascript:void(0)">
                Resource <span className="wsarrow"></span>
              </a>
              <div className="wsmegamenu clearfix">
                <div className="typography-text clearfix">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-sm-12">
                        <ul className="link-list">
                          <li>
                            <a
                              
                              onClick={() => navigate("exportPromotionCouncil")}
                            >
                              <i className="fas fa-angle-right"></i> Export
                              Promotion Councils of India
                            </a>
                          </li>
                          <li>
                            <a
                              
                              onClick={() => navigate("commodityBoards")}
                            >
                              <i className="fas fa-angle-right"></i> Commodity
                              Boards of India
                            </a>
                          </li>
                          <li>
                            <a
                              
                              onClick={() =>
                                navigate("publicSectorUndertaking")
                              }
                            >
                              <i className="fas fa-angle-right"></i> Public
                              Sector Undertaking
                            </a>
                          </li>
                          <li>
                            <a
                              
                              onClick={() => navigate("otherOrganisations")}
                            >
                              <i className="fas fa-angle-right"></i> Other
                              organisations
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-sm-12">
                        <ul className="link-list">
                          <li>
                            <a
                              
                              onClick={() =>
                                navigate("internationalTradeBodies")
                              }
                            >
                              <i className="fas fa-angle-right"></i>{" "}
                              International Trade Bodies
                            </a>
                          </li>
                          <li className="mt-1">
                            <a
                              href="https://mea.gov.in/indian-missions-abroad-new.htm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fas fa-angle-right"></i> Indian
                              Missions Abroad
                            </a>
                          </li>
                          <li className="mt-1">
                            <a
                              href="https://www.icegate.gov.in/Webappl/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fas fa-angle-right"></i> Customs
                              Duty Calculator
                            </a>
                          </li>
                          <li className="mt-1">
                            <a
                              href="https://www.dgft.gov.in/CP/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fas fa-angle-right"></i> Directorate
                              General of Foreign Trade
                            </a>
                          </li>
                          <li className="mt-1">
                            <a
                              href="https://www.cbic.gov.in/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fas fa-angle-right"></i> Central
                              Board of Indirect Taxes and Customs
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-sm-12">
                        <ul className="link-list">
                          <li>
                            <a  onClick={() => navigate("acts")}>
                              <i className="fas fa-angle-right"></i> Acts
                            </a>
                          </li>
                          <li className="mt-1">
                            <a
                              href="https://www.makeinindia.com/home"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fas fa-angle-right"></i> Make In
                              India
                            </a>
                          </li>
                          <li className="mt-1">
                            <a
                              href="https://www.cbic.gov.in/resources//htdocs-cbec/deptt_offcr/customs-manual2018.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fas fa-angle-right"></i> Customs
                              Manual
                            </a>
                          </li>
                          <li className="mt-1">
                            <a
                              href="/src/assets/pdf/SPS-ENQ.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fas fa-angle-right"></i> SPS Enquiry
                              Point
                            </a>
                          </li>
                          <li className="mt-1">
                            <a
                              href="/src/assets/pdf/TBT-Enquirypoint.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fas fa-angle-right"></i> TBT Enquiry
                              Point
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li aria-haspopup="true">
              <a href="javascript:void(0)">
                Trade Academy <span className="wsarrow"></span>
              </a>
              <ul className="sub-menu">
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("currencyAnalysis")}>
                    <i className="fas fa-angle-right"></i> Currency Analysis
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("measurement")}>
                    <i className="fas fa-angle-right"></i> Measurement
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("hsCode")}>
                    <i className="fas fa-angle-right"></i> HS Code
                  </a>
                </li>
                <li aria-haspopup="true">
                  <a  onClick={() => navigate("loadCalculator")}>
                    <i className="fas fa-angle-right"></i> Load Calculator
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";
import helpImage from "../../../../assets/img/help.jpg";


const HelpUs = () => {
  const navigate = useNavigate();

  // Function to handle external links
  // const handleExternalLink = (url) => {
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  // return (
  //   <>
  //     <div className="container">
  //       <div className="row my-sm-5">
  //         <div className="col-md-12">
  //           <div className="card">
  //             <div className="card-header">
  //               <h3 className="font-weight-bold">HELP US</h3>
  //             </div>

  //             <div className="card-body">
  //               <div className="row">
  //                 <div className="col-sm-3">
  //                   <img
  //                     src={helpImage}
  //                     className="img img-reponsive img-thumbnail"
  //                     alt="Help"
  //                   />
  //                 </div>

  //                 <div className="col-sm-9">
  //                   <p>
  //                     Are you finding it difficult to access/navigate through
  //                     the content/pages of this Portal? This section attempts to
  //                     help you have a pleasant experience while browsing this
  //                     Portal.
  //                   </p>

  //                   <div className="row mt-sm-4">
  //                     <div className="col-md-12">
  //                       <h4>Sections of this portal</h4>
  //                     </div>

  //                     <div className="col-md-6">
  //                       <ul>
  //                         <li>
  //                           Home
  //                           <ul>
  //                             <li>
  //                               <button
  //                                 className="btn btn-link p-0 text-left"
  //                                 onClick={() => navigate("/about")}
  //                               >
  //                                 About Us
  //                               </button>
  //                             </li>
  //                             <li>
  //                               <button
  //                                 className="btn btn-link p-0 text-left"
  //                                 onClick={() => navigate("/Formation")}
  //                               >
  //                                 Formation
  //                               </button>
  //                             </li>
  //                             <li>
  //                               <button
  //                                 className="btn btn-link p-0 text-left"
  //                                 onClick={() => navigate("/Objective")}
  //                               >
  //                                 Objective
  //                               </button>
  //                             </li>
  //                           </ul>
  //                         </li>

  //                         <li>
  //                           For MP Exporters
  //                           <ul>
  //                             <li>
  //                               Analyze Market Trends
  //                               <ul>
  //                                 <li>
  //                                   <button
  //                                     className="btn btn-link p-0 text-left"
  //                                     onClick={() =>
  //                                       navigate(
  //                                         "/analyzeMarketTrend/importExportFLows"
  //                                       )
  //                                     }
  //                                   >
  //                                     Import Export Flows
  //                                   </button>
  //                                 </li>
  //                                 <li>
  //                                   <button
  //                                     className="btn btn-link p-0 text-left"
  //                                     onClick={() =>
  //                                       navigate(
  //                                         "/analyzeMarketTrend/marketReport"
  //                                       )
  //                                     }
  //                                   >
  //                                     Market Report
  //                                   </button>
  //                                 </li>
  //                                 <li>
  //                                   <button
  //                                     className="btn btn-link p-0 text-left"
  //                                     onClick={() =>
  //                                       navigate(
  //                                         "/analyzeMarketTrend/findExporters"
  //                                       )
  //                                     }
  //                                   >
  //                                     Find Exporters
  //                                   </button>
  //                                 </li>
  //                               </ul>
  //                             </li>

  //                             {/* Continue converting all internal links to button navigation */}
  //                             {/* ... rest of the internal links ... */}
  //                           </ul>
  //                         </li>

  //                         {/* Other sections */}
  //                         <li>
  //                           <button
  //                             className="btn btn-link p-0 text-left"
  //                             onClick={() => handleNavigation("/FAQ")}
  //                           >
  //                             FAQ
  //                           </button>
  //                         </li>
  //                         <li>
  //                           <button
  //                             className="btn btn-link p-0 text-left"
  //                             onClick={() => handleNavigation("/ContactUs")}
  //                           >
  //                             Contact Us
  //                           </button>
  //                         </li>
  //                         {/* ... other navigation items ... */}
  //                       </ul>
  //                     </div>

  //                     <div className="col-md-6">
  //                       <ul>
  //                         {/* External links section */}
  //                         <li>
  //                           Resource
  //                           <ul>
  //                             <li>
  //                               <button
  //                                 className="btn btn-link p-0 text-left"
  //                                 onClick={() =>
  //                                   handleExternalLink(
  //                                     "https://mea.gov.in/indian-missions-abroad-new.htm"
  //                                   )
  //                                 }
  //                               >
  //                                 Indian Missions Abroad
  //                               </button>
  //                             </li>
  //                             {/* ... other external links ... */}
  //                           </ul>
  //                         </li>
  //                       </ul>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <div className="container">
      <div className="row my-sm-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="font-weight-bold">HELP US</h3>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <img
                    src={helpImage}
                    className="img img-reponsive img-thumbnail"
                  />
                </div>

                <div className="col-sm-9">
                  <p>
                    Are you finding it difficult to access/navigate through the
                    content/pages of this Portal? This section attempts to help
                    you have a pleasant experience while browsing this Portal.
                  </p>

                  <div className="row mt-sm-4">
                    <div className="col-md-12">
                      <h4>Sections of this portal</h4>
                    </div>

                    <div className="col-md-6">
                      <ul>
                        <li>
                          Home
                          <ul>
                            <li>
                              <a className="btn btn-link p-0 text-left" onClick={() => navigate("/about")}>About Us</a>
                            </li>
                            <li>
                                 <button
                                   className="btn btn-link p-0 text-left"
                                 onClick={() => navigate("/Formation")}
                                 >
                                   Formation
                                 </button>
                               </li>
                               <li>
                                 <button
                                   className="btn btn-link p-0 text-left"
                                   onClick={() => navigate("/Objective")}
                                 >
                                   Objective
                                 </button>
                               </li>
                          </ul>
                        </li>

                        <li>
                             For MP Exporters
                             <ul>
                               <li>
                                 Analyze Market Trends
                                 <ul>
                                   <li>
                                     <button
                                       className="btn btn-link p-0 text-left"
                                       onClick={() =>
                                         navigate(
                                           "/analyzeMarketTrend/importExportFLows"
                                         )
                                       }
                                     >
                                       Import Export Flows
                                     </button>
                                   </li>
                                   <li>
                                     <button
                                       className="btn btn-link p-0 text-left"
                                       onClick={() =>
                                         navigate(
                                           "/analyzeMarketTrend/marketReport"
                                         )
                                       }
                                     >
                                       Market Report
                                     </button>
                                   </li>
                                   <li>
                                     <button
                                       className="btn btn-link p-0 text-left"
                                       onClick={() =>
                                         navigate(
                                           "/analyzeMarketTrend/findExporters"
                                         )
                                       }
                                     >
                                       Find Exporters
                                     </button>
                                   </li>
                                 </ul>
                               </li>

                            <li>
                              Reach Business Counterparts
                              <ul>
                                <li>
                                  <button  className="btn btn-link p-0 text-left" onClick={() => navigate("/analyzeMarketTrend/findExporters")}>
                                    Business Directories Country
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/reachBusinessCounterparts/publicTenders")}>
                                    Public Tenders
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/reachBusinessCounterparts/businessDirectories")}>
                                    Find Importers worldwide by HS-Code
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/reachBusinessCounterparts/businessDirectoriesCity")}>
                                    Find Importers in Cities
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/reachBusinessCounterparts/marketInfo")}>
                                    Market Information
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/reachBusinessCounterparts/tradeShows")}>
                                    National & International Trade Shows
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/reachBusinessCounterparts/businessDirectoriesCompany")}>
                                    Potential Client list
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/reachBusinessCounterparts/blacklistCompanies")}>
                                    Blacklisted Companies & Individuals
                                  </button>
                                </li>
                              </ul>
                            </li>

                            <li>
                              Manage Shipments
                              <ul>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/manageShipments/importControl")}>
                                    Import Control
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/manageShipments/exportControl")}>
                                    Export Control
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/manageShipments/labellingRules")}>
                                    Labelling Rules
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/Standard")}>
                                    Standards
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/manageShipments/customDuties")}>
                                    Custom Duties
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/manageShipments/tradeRemedies")}>
                                    Trade Remedies
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/manageShipments/regulatoryRequirements")}>
                                    Regulatory Requirements
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/manageShipments/exportPriceCalculator")}>
                                    Export Price Calculator
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/manageShipments/measurementCalculator")}>
                                    Measurement Calculator
                                  </button>
                                </li>
                              </ul>
                            </li>

                            <li>
                              Trade Finance
                              <ul>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/tradeFinance/bankingSolution")}>
                                    Banking Solutions
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/tradeFinance/creditInsurance")}>
                                    Credit Insurance/Guarantee
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/tradeFinance/incoterms")}>
                                    Incoterms
                                  </button>
                                </li>
                              </ul>
                            </li>

                            <li>
                              Establish Overseas
                              <ul>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/establishOverseas")}>
                                    Operating Business
                                  </button>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>                        <li>
                          <button 
                            className="btn btn-link p-0 text-left" 
                            data-bs-toggle="modal" 
                            data-bs-target="#signup"
                          >
                            Customer Login
                          </button>
                        </li>

                        <li>
                          <button className="btn btn-link p-0 text-left" onClick={() => navigate("/fAQ")} >FAQ</button>
                        </li>

                        <li>
                          <button className="btn btn-link p-0 text-left" onClick={() => navigate("/contactUs") } >Contact Us</button>
                        </li>

                        <li>
                          <button className="btn btn-link p-0 text-left" onClick={() => navigate("/calendar")}>
                            Event Calendar
                          </button>
                        </li>

                        <li>
                          <button className="btn btn-link p-0 text-left" onClick={() => navigate("/TermsAndConditions")}>
                            Terms And Conditions
                          </button>
                        </li>

                        <li>
                          <button className="btn btn-link p-0 text-left" onClick={() => navigate("/PrivacyPolicy")}>
                            Privacy Policy
                          </button>
                        </li>

                        <li>
                          <button className="btn btn-link p-0 text-left" onClick={() => navigate("/searchPage")}>
                            Search
                          </button>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-6">
                      <ul>
                        <li>
                          For Foreign Buyers
                          <ul>
                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/mpExporters")}>
                                List Of Madhya Pradesh Exporters
                              </button>
                              {/* <!-- <ul>
												Import Export Flows</a></li>
												<li><a href="<?= base_url(); ?>Client/MarketReport">Market Report</a></li>
												<li><a href="<?= base_url(); ?>Client/Exporters">Find Exporters</a></li>
											</ul> --> */}
                            </li>

                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/postQuery")}>
                                Post a query
                              </button>
                              {/* <!-- <ul>
												<li><a href="<?= base_url(); ?>Client/ImportExportFlows">Import Export Flows</a></li>
												<li><a href="<?= base_url(); ?>Client/MarketReport">Market Report</a></li>
												<li><a href="<?= base_url(); ?>Client/Exporters">Find Exporters</a></li>
											</ul> --> */}
                            </li>

                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/mpExporters")}>
                                Find a right expoter
                              </button>
                              {/* <!-- <ul>
												<li><a href="<?= base_url(); ?>Client/ImportExportFlows">Import Export Flows</a></li>
												<li><a href="<?= base_url(); ?>Client/MarketReport">Market Report</a></li>
												<li><a href="<?= base_url(); ?>Client/Exporters">Find Exporters</a></li>
											</ul> --> */}
                            </li>
                          </ul>
                        </li>

                        <li>
                          Resource
                          <ul>
                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/exportPromotionCouncil")}>
                                Export Promotion Council of India
                              </button>
                            </li>
                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/commodityBoards")}>
                                Commodity Boards of India
                              </button>
                            </li>
                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/publicSectorUndertaking")}>
                                Public Sector Undertakings
                              </button>
                            </li>
                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/otherOrganisations")}>
                                Other Organisations
                              </button>
                            </li>
                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/internationalTradeBodies")}>
                                International Trade Bodies
                              </button>
                            </li>

                            <li>
                              <a
                                className="btn btn-link p-0 text-left"
                                href="https://mea.gov.in/indian-missions-abroad-new.htm"
                                onClick="return check()"
                                target="_blank"
                              >
                                Indian Missions Abroad
                              </a>
                            </li>

                            <li>
                              <a
                                className="btn btn-link p-0 text-left"
                                href="https://www.icegate.gov.in/Webappl/"
                                onclick="return check()"
                                target="_blank"
                              >
                                Customs Duty Calculator
                              </a>
                            </li>

                            <li>
                              <a
                                className="btn btn-link p-0 text-left"
                                href="https://www.dgft.gov.in/CP/"
                                onclick="return check()"
                                target="_blank"
                              >
                                Directorate General of Foregin Trade
                              </a>
                            </li>

                            <li>
                              <a
                                className="btn btn-link p-0 text-left"
                                href="https://www.cbic.gov.in/"
                                onclick="return check()"
                                target="_blank"
                              >
                                Central Board of Indirect Taxes and Customs
                              </a>
                            </li>

                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/acts")}>Acts</button>
                            </li>

                            <li>
                              <a
                                className="btn btn-link p-0 text-left"
                                href="https://www.makeinindia.com/home"
                                onclick="return check()"
                                target="_blank"
                              >
                                Make In India
                              </a>
                            </li>

                            <li>
                              <a
                                className="btn btn-link p-0 text-left"
                                href="https://www.cbic.gov.in/resources//htdocs-cbec/deptt_offcr/customs-manual2018.pdf"
                                onclick="return check()"
                                target="_blank"
                              >
                                Customs Manual
                              </a>
                            </li>

                            <li>
                              <a
                              className="btn btn-link p-0 text-left"
                              href="/src/assets/pdf/SPS-ENQ.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            SPS Enquiry
                              Point
                            </a>
                            </li>

                            <li>
                              <a
                              className="btn btn-link p-0 text-left"
                              href="/src/assets/pdf/TBT-Enquirypoint.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            TBT Enquiry
                              Point
                            </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          Features
                          <ul>
                            <li>
                              Other Services
                              <ul>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/gallery")}>Gallery</button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/mediacoverage")}>Coverage in Media</button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/districtProfileOdop")}>ODOP</button>
                                </li>

                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("//howToStartExport")}>How to Export Guide
                                  </button>
                                </li>
                              </ul>
                            </li>
                            <li>
                              Trade Academy
                              <ul className="link-list">
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/currencyAnalysis")}>Currency Analysis</button>
                                    
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/measurement")}>Measurement</button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/hsCode")}>HS Code</button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/loadCalculator")}>Load Calculator</button>
                                </li>
                              </ul>
                            </li>
                            <li>
                              Export Promotion Scheme
                              <ul>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/nationalScheme")}>
                                    National Schemes
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/mpSchemes")}>
                                    MP Schemes
                                  </button>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpUs;

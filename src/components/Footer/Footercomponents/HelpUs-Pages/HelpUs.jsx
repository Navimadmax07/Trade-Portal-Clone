import React from "react";
import { useNavigate } from "react-router-dom";
import helpImage from "../../../../assets/img/help.jpg";

const HelpUs = () => {
  const navigate = useNavigate();

  // Function to handle external links
  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
    <div class="container">
      <div class="row my-sm-5">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="font-weight-bold">HELP US</h3>
            </div>

            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <img
                    src={helpImage}
                    class="img img-reponsive img-thumbnail"
                  />
                </div>

                <div class="col-sm-9">
                  <p>
                    Are you finding it difficult to access/navigate through the
                    content/pages of this Portal? This section attempts to help
                    you have a pleasant experience while browsing this Portal.
                  </p>

                  <div class="row mt-sm-4">
                    <div class="col-md-12">
                      <h4>Sections of this portal</h4>
                    </div>

                    <div class="col-md-6">
                      <ul>
                        <li>
                          Home
                          <ul>
                            <li>
                              <a onClick={() => navigate("/about")}>About Us</a>
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
                                  <button href="<?= base_url(); ?>Client/BusinessDirectoriesCountry">
                                    Business Directories Country
                                  </button>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/PublicTenders">
                                    Public Tenders
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/BusinessDirectories">
                                    Find Importers worldwide by HS-Code
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/BusinessDirectoriesCity">
                                    Find Importers in Cities
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/CreateMarketInfo">
                                    Market Information
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/TradeShows">
                                    National & International Trade Shows
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/BusinessDirectoriesCompany">
                                    Potential Client list
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/BlackListedCompanies">
                                    Blacklisted Companies & Individuals
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              Manage Shipments
                              <ul>
                                <li>
                                  <a href="<?= base_url(); ?>Client/ImportControl">
                                    Import Control
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/ExportControl">
                                    Export Control
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/LabellingRules">
                                    Labelling Rules
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/Standards">
                                    Standards
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/CustomDuties">
                                    Custom Duties
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/TradeRemedies">
                                    Trade Remedies
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/RegulatoryRequirements">
                                    Regulatory Requirements
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/ExportPriceCalculator">
                                    Export Price Calculator
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Measurements">
                                    Measurement Calculator
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              Trade Finance
                              <ul>
                                <li>
                                  <a href="<?= base_url(); ?>Client/BankWithUs">
                                    Banking Solutions
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/CreditInsurance">
                                    Credit Insurance/Guarantee
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>Client/Incoterms">
                                    Incoterms
                                  </a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              Establish Overseas
                              <ul>
                                <li>
                                  <a href="<?= base_url(); ?>Client/OperatingBusiness">
                                    Operating Business
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#signup"
                          >
                            Customer Login
                          </a>
                        </li>

                        <li>
                          <a href="<?= base_url(); ?>FAQ">FAQ</a>
                        </li>

                        <li>
                          <a href="<?= base_url(); ?>ContactUs">Contact Us</a>
                        </li>

                        <li>
                          <a href="<?= base_url(); ?>Calendar">
                            Event Calendar
                          </a>
                        </li>

                        <li>
                          <a href="<?= base_url(); ?>TermsAndConditions">
                            Terms And Conditions
                          </a>
                        </li>

                        <li>
                          <a href="<?= base_url(); ?>PrivacyPolicy">
                            Privacy Policy
                          </a>
                        </li>

                        <li>
                          <a href="<?= base_url(); ?>Search">Search</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-6">
                      <ul>
                        <li>
                          For Foreign Buyers
                          <ul>
                            <li>
                              <a href="<?= base_url(); ?>Client/ImportExportFlows">
                                List Of Madhya Pradesh Exporters
                              </a>
                              {/* <!-- <ul>
												Import Export Flows</a></li>
												<li><a href="<?= base_url(); ?>Client/MarketReport">Market Report</a></li>
												<li><a href="<?= base_url(); ?>Client/Exporters">Find Exporters</a></li>
											</ul> --> */}
                            </li>

                            <li>
                              <a href="<?= base_url(); ?>Client/MarketReport">
                                Post a query
                              </a>
                              {/* <!-- <ul>
												<li><a href="<?= base_url(); ?>Client/ImportExportFlows">Import Export Flows</a></li>
												<li><a href="<?= base_url(); ?>Client/MarketReport">Market Report</a></li>
												<li><a href="<?= base_url(); ?>Client/Exporters">Find Exporters</a></li>
											</ul> --> */}
                            </li>

                            <li>
                              <a href="<?= base_url(); ?>Client/Exporters">
                                Find a right expoter
                              </a>
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
                              <a href="<?= base_url(); ?>ExportPromotion">
                                Export Promotion Council of India
                              </a>
                            </li>
                            <li>
                              <a href="<?= base_url(); ?>CommodityBoard">
                                Commodity Boards of India
                              </a>
                            </li>
                            <li>
                              <a href="<?= base_url(); ?>PublicSectorUndertaking">
                                Public Sector Undertakings
                              </a>
                            </li>
                            <li>
                              <a href="<?= base_url(); ?>OtherOrganisations">
                                Other Organisations
                              </a>
                            </li>
                            <li>
                              <a href="<?= base_url(); ?>Resource">
                                International Trade Bodies
                              </a>
                            </li>

                            <li>
                              <a
                                href="https://mea.gov.in/indian-missions-abroad-new.htm"
                                onclick="return check()"
                                target="_blank"
                              >
                                Indian Missions Abroad
                              </a>
                            </li>

                            <li>
                              <a
                                href="https://www.icegate.gov.in/Webappl/"
                                onclick="return check()"
                                target="_blank"
                              >
                                Customs Duty Calculator
                              </a>
                            </li>

                            <li>
                              <a
                                href="https://www.dgft.gov.in/CP/"
                                onclick="return check()"
                                target="_blank"
                              >
                                Directorate General of Foregin Trade
                              </a>
                            </li>

                            <li>
                              <a
                                href="https://www.cbic.gov.in/"
                                onclick="return check()"
                                target="_blank"
                              >
                                Central Board of Indirect Taxes and Customs
                              </a>
                            </li>

                            <li>
                              <a href="<?=base_url();?>Resource/acts">Acts</a>
                            </li>

                            <li>
                              <a
                                href="https://www.makeinindia.com/home"
                                onclick="return check()"
                                target="_blank"
                              >
                                Make In India
                              </a>
                            </li>

                            <li>
                              <a
                                href="https://www.cbic.gov.in/resources//htdocs-cbec/deptt_offcr/customs-manual2018.pdf"
                                onclick="return check()"
                                target="_blank"
                              >
                                Customs Manual
                              </a>
                            </li>

                            <li>
                              <a
                                href="<?= base_url(); ?>assets/pdf/SPS-ENQ.pdf"
                                target="_blank"
                              >
                                SPS Enquiry Point
                              </a>
                            </li>

                            <li>
                              <a
                                href="<?= base_url(); ?>assets/pdf/TBT-Enquirypoint.pdf"
                                target="_blank"
                              >
                                TBT Enquiry Point
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
                                  <a href="<?=base_url();?>Gallery">Gallery</a>
                                </li>
                                <li>
                                  <a href="<?=base_url();?>MediaCoverage">
                                    Coverage in Media
                                  </a>
                                </li>
                                <li>
                                  <a href="<?=base_url();?>ODOP">ODOP</a>
                                </li>

                                <li>
                                  <a href="<?=base_url();?>ExportGuide">
                                    How to Export Guide
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              Trade Academy
                              <ul class="link-list">
                                <li>
                                  <a href="<?=base_url();?>Currency">
                                    Currency Analysis
                                  </a>
                                </li>
                                <li>
                                  <a href="<?=base_url();?>Measurements">
                                    Measurement
                                  </a>
                                </li>
                                <li>
                                  <a href="<?=base_url();?>SearchCode">
                                    HS Code
                                  </a>
                                </li>
                                <li>
                                  <a href="<?=base_url();?>LoadCalculator">
                                    Load Calculator
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              Export Promotion Scheme
                              <ul>
                                <li>
                                  <a href="<?= base_url(); ?>NationalScheme">
                                    National Schemes
                                  </a>
                                </li>
                                <li>
                                  <a href="<?= base_url(); ?>MPScheme">
                                    MP Schemes
                                  </a>
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

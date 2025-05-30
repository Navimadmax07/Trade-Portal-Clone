import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState(null);

  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Function to extract all menu items for searching
  const extractMenuItems = (items) => {
    let result = [];
    items.forEach(item => {
      if (typeof item === 'object') {
        // Add the main item
        if (item.text) {
          result.push({
            text: item.text,
            path: item.path,
            isExternal: item.isExternal,
            url: item.url
          });
        }
        // Add subitems recursively
        if (item.items) {
          result = [...result, ...extractMenuItems(item.items)];
        }
      }
    });
    return result;
  };

  // Navigation data structure
  const navigationData = [
    {
      text: 'Home',
      items: [
        { text: 'About Us', path: '/about' },
        { text: 'Formation', path: '/Formation' },
        { text: 'Objective', path: '/Objective' }
      ]
    },
    {
      text: 'For MP Exporters',
      items: [
        {
          text: 'Analyze Market Trends',
          items: [
            { text: 'Import Export Flows', path: '/analyzeMarketTrend/importExportFlows' },
            { text: 'Market Report', path: '/analyzeMarketTrend/marketReport' },
            { text: 'Find Exporters', path: '/analyzeMarketTrend/findExporters' }
          ]
        },
        {
          text: 'Reach Business Counterparts',
          items: [
            { text: 'Business Directories Country', path: '/reachBusinessCounterparts/businessDirectoriesCountry' },
            { text: 'Public Tenders', path: '/reachBusinessCounterparts/publicTenders' },
            { text: 'Find Importers worldwide by HS-Code', path: '/reachBusinessCounterparts/businessDirectories' },
            { text: 'Find Importers in Cities', path: '/reachBusinessCounterparts/businessDirectoriesCity' },
            { text: 'Market Information', path: '/reachBusinessCounterparts/marketInfo' },
            { text: 'National & International Trade Shows', path: '/reachBusinessCounterparts/tradeShows' },
            { text: 'Potential Client list', path: '/reachBusinessCounterparts/potentialClients' },
            { text: 'Blacklisted Companies & Individuals', path: '/reachBusinessCounterparts/blacklistedCompanies' }
          ]
        },
        {
          text: 'Manage Shipments',
          items: [
            { text: 'Import Control', path: '/manageShipments/importControl' },
            { text: 'Export Control', path: '/manageShipments/exportControl' },
            { text: 'Labelling Rules', path: '/manageShipments/labellingRules' },
            { text: 'Standards', path: '/manageShipments/standards' },
            { text: 'Custom Duties', path: '/manageShipments/customDuties' },
            { text: 'Trade Remedies', path: '/manageShipments/tradeRemedies' },
            { text: 'Regulatory Requirements', path: '/manageShipments/regulatoryRequirements' },
            { text: 'Export Price Calculator', path: '/manageShipments/exportPriceCalculator' },
            { text: 'Measurement Calculator', path: '/manageShipments/measurements' }
          ]
        },
        {
          text: 'Trade Finance',
          items: [
            { text: 'Banking Solutions', path: '/tradeFinance/bankWithUs' },
            { text: 'Credit Insurance/Guarantee', path: '/tradeFinance/creditInsurance' },
            { text: 'Incoterms', path: '/tradeFinance/incoterms' }
          ]
        },
        {
          text: 'Establish Overseas',
          items: [
            { text: 'Operating Business', path: '/establishOverseas/operatingBusiness' }
          ]
        }
      ]
    },
    {
      text: 'Customer',
      items: [
        { text: 'Customer Login', path: '/#signup' },
        { text: 'FAQ', path: '/FAQ' },
        { text: 'Contact Us', path: '/ContactUs' },
        { text: 'Event Calendar', path: '/Calendar' },
        { text: 'Terms And Conditions', path: '/TermsAndConditions' },
        { text: 'Privacy Policy', path: '/PrivacyPolicy' }
      ]
    },
    {
      text: 'For Foreign Buyers',
      items: [
        { text: 'List Of Madhya Pradesh Exporters', path: '/foreignBuyers/mpExporters' },
        { text: 'Post a query', path: '/foreignBuyers/postQuery' },
        { text: 'Find a right exporter', path: '/foreignBuyers/findExporter' }
      ]
    },
    {
      text: 'Resource',
      items: [
        { text: 'Export Promotion Council of India', path: '/resource/exportPromotion' },
        { text: 'Commodity Boards of India', path: '/resource/commodityBoard' },
        { text: 'Public Sector Undertakings', path: '/resource/publicSectorUndertaking' },
        { text: 'Other Organisations', path: '/resource/otherOrganisations' },
        { text: 'International Trade Bodies', path: '/resource/tradeBodies' },
        { text: 'Indian Missions Abroad', url: 'https://mea.gov.in/indian-missions-abroad-new.htm', isExternal: true },
        { text: 'Customs Duty Calculator', url: 'https://www.icegate.gov.in/Webappl/', isExternal: true },
        { text: 'Directorate General of Foreign Trade', url: 'https://www.dgft.gov.in/CP/', isExternal: true },
        { text: 'Central Board of Indirect Taxes and Customs', url: 'https://www.cbic.gov.in/', isExternal: true },
        { text: 'Acts', path: '/resource/acts' },
        { text: 'Make In India', url: 'https://www.makeinindia.com/home', isExternal: true },
        { text: 'Customs Manual', url: 'https://www.cbic.gov.in/resources//htdocs-cbec/deptt_offcr/customs-manual2018.pdf', isExternal: true },
        { text: 'SPS Enquiry Point', path: '/resource/spsEnquiry' },
        { text: 'TBT Enquiry Point', path: '/resource/tbtEnquiry' }
      ]
    },
    {
      text: 'Features',
      items: [
        {
          text: 'Other Services',
          items: [
            { text: 'Gallery', path: '/features/gallery' },
            { text: 'Coverage in Media', path: '/features/mediaCoverage' },
            { text: 'ODOP', path: '/features/odop' },
            { text: 'How to Export Guide', path: '/features/exportGuide' }
          ]
        },
        {
          text: 'Trade Academy',
          items: [
            { text: 'Currency Analysis', path: '/currencyAnalysis' },
            { text: 'Measurement', path: '/measurement' },
            { text: 'HS Code', path: '/hsCode' },
            { text: 'Load Calculator', path: '/loadCalculator' }
          ]
        },
        {
          text: 'Export Promotion Scheme',
          items: [
            { text: 'National Schemes', path: '/exportPromotion/nationalSchemes' },
            { text: 'MP Schemes', path: '/exportPromotion/mpSchemes' }
          ]
        }
      ]
    }
  ];

  // Search function
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredContent(null);
      return;
    }

    const allItems = extractMenuItems(navigationData);
    const filtered = allItems.filter(item =>
      item.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredContent(filtered);
  }, [searchTerm]);

  // Render search results
  const renderSearchResults = () => {
    if (!filteredContent) {
      return null;
    }

    return (
      <div className="search-results">
        <ul className="list-unstyled">
          {filteredContent.map((item, index) => (
            <li key={index}>
              {item.isExternal ? (
                <button
                  className="btn btn-link p-0 text-left"
                  onClick={() => handleExternalLink(item.url)}
                >
                  {item.text}
                </button>
              ) : (
                <button
                  className="btn btn-link p-0 text-left"
                  onClick={() => navigate(item.path)}
                >
                  {item.text}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row my-sm-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="form-group">
                <input
                  type="text"
                  name="search"
                  placeholder="Enter Page Name or Service Name for search"
                  className="form-control"
                  id="myInput"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-sm-12">
                  <div className="row mt-sm-4" id="all_result">
                    <div className="col-md-12 mb-sm-4">
                      <h5 className="font-weight-bold text-uppercase">
                        {searchTerm.trim() ? 'Search Results' : 'All Pages'}
                      </h5>
                    </div>

                    {searchTerm.trim() ? (
                      renderSearchResults()
                    ) : (
                      <>
                        <div className="col-md-6 myDivData">
                          <ul>
                            <li>
                              Home
                              <ul>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/about")}>
                                    About Us
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/Formation")}>
                                    Formation
                                  </button>
                                </li>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/Objective")}>
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
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/analyzeMarketTrend/importExportFlows")}>
                                        Import Export Flows
                                      </button>
                                    </li>
                                    <li>
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/analyzeMarketTrend/marketReport")}>
                                        Market Report
                                      </button>
                                    </li>
                                    <li>
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/analyzeMarketTrend/findExporters")}>
                                        Find Exporters
                                      </button>
                                    </li>
                                  </ul>
                                </li>

                                <li>
                              Reach Business Counterparts
                              <ul>
                                <li>
                                  <button href="#" className="btn btn-link p-0 text-left" onClick={() => navigate("/analyzeMarketTrend/findExporters")}>
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
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/Client/CustomDuties")}>
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
                            </li>

                            <li>
                              <button className="btn btn-link p-0 text-left" data-toggle="modal" data-target="#signup">
                                Customer Login
                              </button>
                            </li>

                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/fAQ")}>
                                FAQ
                              </button>
                            </li>

                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/ContactUs")}>
                                Contact Us
                              </button>
                            </li>

                            <li>
                              <button className="btn btn-link p-0 text-left" onClick={() => navigate("/Calendar")}>
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
                          </ul>
                        </div>

                        <div className="col-md-6 myDivData">
                          <ul>
                            <li>
                              For Foreign Buyers
                              <ul>
                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/mpExporters")}>
                                    List Of Madhya Pradesh Exporters
                                  </button>
                                </li>

                                <li> 
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/postQuery")}>
                                    Post a query
                                  </button>
                                </li>

                                <li>
                                  <button className="btn btn-link p-0 text-left" onClick={() => navigate("/mpExporters")}>
                                    Find a right exporter
                                  </button>
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
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/gallery")}>
                                        Gallery
                                      </button>
                                    </li>
                                    <li>
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/mediaCoverage")}>
                                        Coverage in Media
                                      </button>
                                    </li>
                                    <li>
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/DistrictProfileOdop")}>
                                        ODOP
                                      </button>
                                    </li>
                                    <li>
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/howToStartExport")}>
                                        How to Export Guide
                                      </button>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  Trade Academy
                                  <ul className="link-list">
                                    <li>
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/currencyAnalysis")}>
                                        Currency Analysis
                                      </button>
                                    </li>
                                    <li>
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/measurement")}>
                                        Measurement
                                      </button>
                                    </li>
                                    <li>
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/hsCode")}>
                                        HS Code
                                      </button>
                                    </li>
                                    <li>
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/loadCalculator")}>
                                        Load Calculator
                                      </button>
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
                                      <button className="btn btn-link p-0 text-left" onClick={() => navigate("/mpScheme")}>
                                        MP Schemes
                                      </button>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
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

export default SearchPage;
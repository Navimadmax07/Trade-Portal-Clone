import React, { useState } from "react";
import ShipmentsMenu from "../ShipmentsMenu";

const countries = [
  { value: "", label: "Select Destination Country" },
  { value: "004", label: "Afghanistan" },
  { value: "008", label: "Albania" },
  { value: "012", label: "Algeria" },
  { value: "636", label: "America not elsewhere specified" },
  { value: "016", label: "American Samoa" },
  { value: "020", label: "Andorra" },
  { value: "024", label: "Angola" },
  { value: "660", label: "Anguilla" },
  { value: "028", label: "Antigua and Barbuda" },
  { value: "899", label: "Area Nes" },
  { value: "032", label: "Argentina" },
  { value: "051", label: "Armenia" },
  { value: "533", label: "Aruba" },
  { value: "946", label: "Asia not elsewhere specified" },
  { value: "036", label: "Australia" },
  { value: "040", label: "Austria" },
  { value: "031", label: "Azerbaijan" },
  { value: "044", label: "Bahamas" },
  { value: "048", label: "Bahrain" },
  { value: "050", label: "Bangladesh" },
  { value: "052", label: "Barbados" },
  { value: "112", label: "Belarus" },
  { value: "056", label: "Belgium" },
  { value: "084", label: "Belize" },
  { value: "204", label: "Benin" },
  { value: "060", label: "Bermuda" },
  { value: "064", label: "Bhutan" },
  { value: "068", label: "Bolivia, Plurinational State of" },
  { value: "535", label: "Bonaire, Sint Eustatius and Saba" },
  { value: "070", label: "Bosnia and Herzegovina" },
  { value: "072", label: "Botswana" },
  { value: "074", label: "Bouvet Island" },
  { value: "076", label: "Brazil" },
  { value: "080", label: "British Antarctic Territory" },
  { value: "086", label: "British Indian Ocean Territory" },
  { value: "092", label: "British Virgin Islands" },
  { value: "096", label: "Brunei Darussalam" },
  { value: "100", label: "Bulgaria" },
  { value: "854", label: "Burkina Faso" },
  { value: "108", label: "Burundi" },
  { value: "132", label: "Cabo Verde" },
  { value: "116", label: "Cambodia" },
  { value: "120", label: "Cameroon" },
  { value: "124", label: "Canada" },
  { value: "129", label: "Caribbean Nes" },
  { value: "136", label: "Cayman Islands" },
  { value: "471", label: "Centr.Amer.Com.Market (CACM) Nes" },
  { value: "140", label: "Central African Republic" },
  { value: "148", label: "Chad" },
  { value: "152", label: "Chile" },
  { value: "156", label: "China" },
  { value: "162", label: "Christmas Island" },
  { value: "166", label: "Cocos (Keeling) Islands" },
  { value: "170", label: "Colombia" },
  { value: "174", label: "Comoros" },
  { value: "178", label: "Congo" },
  { value: "180", label: "Congo, Democratic Republic of the" },
  { value: "184", label: "Cook Islands" },
  { value: "188", label: "Costa Rica" },
  { value: "384", label: "Côte d'Ivoire" },
  { value: "191", label: "Croatia" },
  { value: "192", label: "Cuba" },
  { value: "531", label: "Curaçao" },
  { value: "196", label: "Cyprus" },
  { value: "203", label: "Czech Republic" },
  { value: "208", label: "Denmark" },
  { value: "262", label: "Djibouti" },
  { value: "212", label: "Dominica" },
  { value: "214", label: "Dominican Republic" },
  { value: "221", label: "East Europe not elsewhere specified" },
  { value: "218", label: "Ecuador" },
  { value: "818", label: "Egypt" },
  { value: "222", label: "El Salvador" },
  { value: "226", label: "Equatorial Guinea" },
  { value: "232", label: "Eritrea" },
  { value: "233", label: "Estonia" },
  { value: "748", label: "Eswatini" },
  { value: "231", label: "Ethiopia" },
  { value: "697", label: "Europe EFTA not elsewhere specified" },
  { value: "568", label: "Europe Othr. Nes" },
  { value: "492", label: "European Union Nes" },
  { value: "238", label: "Falkland Islands (Malvinas)" },
  { value: "234", label: "Faroe Islands" },
  { value: "242", label: "Fiji" },
  { value: "246", label: "Finland" },
  { value: "251", label: "France" },
  { value: "838", label: "Free Zones" },
  { value: "258", label: "French Polynesia" },
  { value: "260", label: "French Southern and Antarctic Territories" },
  { value: "266", label: "Gabon" },
  { value: "270", label: "Gambia" },
  { value: "268", label: "Georgia" },
  { value: "276", label: "Germany" },
  { value: "288", label: "Ghana" },
  { value: "292", label: "Gibraltar" },
  { value: "300", label: "Greece" },
  { value: "304", label: "Greenland" },
  { value: "308", label: "Grenada" },
  { value: "316", label: "Guam" },
  { value: "320", label: "Guatemala" },
  { value: "324", label: "Guinea" },
  { value: "624", label: "Guinea-Bissau" },
  { value: "328", label: "Guyana" },
  { value: "332", label: "Haiti" },
  { value: "340", label: "Honduras" },
  { value: "344", label: "Hong Kong, China" },
  { value: "348", label: "Hungary" },
  { value: "352", label: "Iceland" },
  { value: "360", label: "Indonesia" },
  { value: "364", label: "Iran, Islamic Republic of" },
  { value: "368", label: "Iraq" },
  { value: "372", label: "Ireland" },
  { value: "376", label: "Israel" },
  { value: "381", label: "Italy" },
  { value: "388", label: "Jamaica" },
  { value: "392", label: "Japan" },
  { value: "400", label: "Jordan" },
  { value: "398", label: "Kazakhstan" },
  { value: "404", label: "Kenya" },
  { value: "296", label: "Kiribati" },
  { value: "408", label: "Korea, Democratic People's Republic of" },
  { value: "410", label: "Korea, Republic of" },
  { value: "414", label: "Kuwait" },
  { value: "417", label: "Kyrgyzstan" },
  { value: "473", label: "LAIA not elsewhere specified" },
  { value: "418", label: "Lao People's Democratic Republic" },
  { value: "428", label: "Latvia" },
  { value: "422", label: "Lebanon" },
  { value: "426", label: "Lesotho" },
  { value: "430", label: "Liberia" },
  { value: "434", label: "Libya, State of" },
  { value: "440", label: "Lithuania" },
  { value: "442", label: "Luxembourg" },
  { value: "446", label: "Macao, China" },
  { value: "807", label: "Macedonia, North" },
  { value: "450", label: "Madagascar" },
  { value: "454", label: "Malawi" },
  { value: "458", label: "Malaysia" },
  { value: "462", label: "Maldives" },
  { value: "466", label: "Mali" },
  { value: "470", label: "Malta" },
  { value: "584", label: "Marshall Islands" },
  { value: "478", label: "Mauritania" },
  { value: "480", label: "Mauritius" },
  { value: "175", label: "Mayotte" },
  { value: "484", label: "Mexico" },
  { value: "583", label: "Micronesia, Federated States of" },
  { value: "498", label: "Moldova, Republic of" },
  { value: "496", label: "Mongolia" },
  { value: "499", label: "Montenegro" },
  { value: "500", label: "Montserrat" },
  { value: "504", label: "Morocco" },
  { value: "508", label: "Mozambique" },
  { value: "104", label: "Myanmar" },
  { value: "516", label: "Namibia" },
  { value: "520", label: "Nauru" },
  { value: "524", label: "Nepal" },
  { value: "528", label: "Netherlands" },
  { value: "530", label: "Netherlands Antilles" },
  { value: "536", label: "Neutral Zone" },
  { value: "540", label: "New Caledonia" },
  { value: "554", label: "New Zealand" },
  { value: "558", label: "Nicaragua" },
  { value: "562", label: "Niger" },
  { value: "566", label: "Nigeria" },
  { value: "570", label: "Niue" },
  { value: "574", label: "Norfolk Island" },
  { value: "290", label: "North Africa not elsewhere specified" },
  { value: "637", label: "North America and Central America, nes" },
  { value: "580", label: "Northern Mariana Islands" },
  { value: "579", label: "Norway" },
  { value: "527", label: "Oceania Nes" },
  { value: "512", label: "Oman" },
  { value: "586", label: "Pakistan" },
  { value: "585", label: "Palau" },
  { value: "275", label: "Palestine, State of" },
  { value: "591", label: "Panama" },
  { value: "598", label: "Papua New Guinea" },
  { value: "600", label: "Paraguay" },
  { value: "604", label: "Peru" },
  { value: "608", label: "Philippines" },
  { value: "612", label: "Pitcairn" },
  { value: "616", label: "Poland" },
  { value: "620", label: "Portugal" },
  { value: "634", label: "Qatar" },
  { value: "642", label: "Romania" },
  { value: "643", label: "Russian Federation" },
  { value: "646", label: "Rwanda" },
  { value: "654", label: "Saint Helena" },
  { value: "659", label: "Saint Kitts and Nevis" },
  { value: "662", label: "Saint Lucia" },
  { value: "670", label: "Saint Vincent and the Grenadines" },
  { value: "882", label: "Samoa" },
  { value: "678", label: "Sao Tome and Principe" },
  { value: "682", label: "Saudi Arabia" },
  { value: "686", label: "Senegal" },
  { value: "688", label: "Serbia" },
  { value: "891", label: "Serbia and Montenegro" },
  { value: "690", label: "Seychelles" },
  { value: "837", label: "Ship stores and bunkers" },
  { value: "694", label: "Sierra Leone" },
  { value: "702", label: "Singapore" },
  { value: "534", label: "Sint Maarten (Dutch part)" },
  { value: "703", label: "Slovakia" },
  { value: "705", label: "Slovenia" },
  { value: "090", label: "Solomon Islands" },
  { value: "706", label: "Somalia" },
  { value: "710", label: "South Africa" },
  { value: "728", label: "South Sudan" },
  { value: "724", label: "Spain" },
  { value: "839", label: "Special categories" },
  { value: "144", label: "Sri Lanka" },
  { value: "666", label: "St. Pierre and Miquelon" },
  { value: "729", label: "Sudan" },
  { value: "736", label: "Sudan (before 2012)" },
  { value: "740", label: "Suriname" },
  { value: "752", label: "Sweden" },
  { value: "757", label: "Switzerland" },
  { value: "760", label: "Syrian Arab Republic" },
  { value: "490", label: "Taipei, Chinese" },
  { value: "762", label: "Tajikistan" },
  { value: "834", label: "Tanzania, United Republic of" },
  { value: "999", label: "Territory not allocated" },
  { value: "764", label: "Thailand" },
  { value: "626", label: "Timor-Leste" },
  { value: "768", label: "Togo" },
  { value: "772", label: "Tokelau" },
  { value: "776", label: "Tonga" },
  { value: "780", label: "Trinidad and Tobago" },
  { value: "788", label: "Tunisia" },
  { value: "792", label: "Turkey" },
  { value: "795", label: "Turkmenistan" },
  { value: "796", label: "Turks and Caicos Islands" },
  { value: "798", label: "Tuvalu" },
  { value: "800", label: "Uganda" },
  { value: "804", label: "Ukraine" },
  { value: "784", label: "United Arab Emirates" },
  { value: "826", label: "United Kingdom" },
  { value: "849", label: "United States Minor Outlying Islands" },
  { value: "842", label: "United States of America" },
  { value: "858", label: "Uruguay" },
  { value: "860", label: "Uzbekistan" },
  { value: "548", label: "Vanuatu" },
  { value: "862", label: "Venezuela, Bolivarian Republic of" },
  { value: "704", label: "Viet Nam" },
  { value: "876", label: "Wallis and Futuna Islands" },
  { value: "879", label: "West Asia not elsewhere specified" },
  { value: "732", label: "Western Sahara" },
  { value: "887", label: "Yemen" },
  { value: "894", label: "Zambia" },
  { value: "716", label: "Zimbabwe" },
];

const dummyResult = {
  doc: {
    Year: "2024",
    ReferenceData: "Reference for customs tariffs.",
    CustomDuty: [
      {
        NTLCCode: "1001",
        NTLCDescription: "Wheat and meslin",
        TariffRegime: "MFN",
        TariffReported: "10%",
        TariffAve: "8%",
        TariffNote: "Standard rate applies.",
        Revision: "Rev. 1",
      },
    ],
    NTLCCodeLabel: "HS Code",
    NTLCCodeTooltipLabel: "Harmonized System Code",
    TariffRegimeLabel: "Tariff Regime",
    TariffRegimeTooltipLabel: "Type of tariff regime",
    TariffReportedLabel: "Tariff Reported",
    TariffReportedTooltipLabel: "Reported tariff rate",
    TariffAveLabel: "Average Tariff",
    TariffAveTooltipLabel: "Average tariff rate",
    TariffNoteLabel: "Tariff Note",
  },
};

const CustomDuties = () => {
  const [toCountry, setToCountry] = useState("");
  const [hsCode, setHsCode] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    if (toCountry && hsCode) {
      setResult(dummyResult);
      setError("");
    } else {
      setResult(null);
      setError("Please select a country and enter HS-Code.");
    }
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3 pt-3" id="sidemenu">
              <a href="/manageShipments" className="btn btn-default">
                <i
                  className="fa fa-chevron-circle-left fa-2x"
                  aria-hidden="true"
                ></i>
              </a>
              <ShipmentsMenu />
            </div>
            <div className="col-md-9 pt-3">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <select
                          className="form-control"
                          name="to_country_code"
                          required
                          id="ccode"
                          value={toCountry}
                          onChange={(e) => setToCountry(e.target.value)}
                        >
                          {countries.map((c) => (
                            <option key={c.value} value={c.value}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-4">
                        <input
                          type="number"
                          className="form-control"
                          name="hs_code"
                          placeholder="enter HS-Code"
                          required
                          value={hsCode}
                          onChange={(e) => setHsCode(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-4 float-right">
                        <input
                          type="submit"
                          className="btn btn-info"
                          value="Search"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <span style={{ display: "inline-flex" }}>
                    <h3>Customs tariffs </h3>
                    <i
                      className="fa fa-info-circle"
                      aria-hidden="true"
                      title="Customs tariffs are charges levied by the importing country on foreign goods crossing its border."
                      style={{ marginLeft: 8, marginTop: 10 }}
                    ></i>
                  </span>
                  {result && result.doc ? (
                    <>
                      <p>Exported from India to Destination Country</p>
                      <p>
                        Tariff year: {result.doc.Year} (
                        {result.doc.CustomDuty[0].Revision})
                      </p>
                      <p>{result.doc.ReferenceData}</p>
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>
                              {result.doc.NTLCCodeLabel}
                              <i
                                className="fa fa-info-circle"
                                aria-hidden="true"
                                title={result.doc.NTLCCodeTooltipLabel}
                                style={{ marginLeft: 4 }}
                              ></i>
                            </th>
                            <th>
                              {result.doc.TariffRegimeLabel}
                              <i
                                className="fa fa-info-circle"
                                aria-hidden="true"
                                title={result.doc.TariffRegimeTooltipLabel}
                                style={{ marginLeft: 4 }}
                              ></i>
                            </th>
                            <th>
                              {result.doc.TariffReportedLabel}
                              <i
                                className="fa fa-info-circle"
                                aria-hidden="true"
                                title={result.doc.TariffReportedTooltipLabel}
                                style={{ marginLeft: 4 }}
                              ></i>
                            </th>
                            <th>
                              {result.doc.TariffAveLabel}
                              <i
                                className="fa fa-info-circle"
                                aria-hidden="true"
                                title={result.doc.TariffAveTooltipLabel}
                                style={{ marginLeft: 4 }}
                              ></i>
                            </th>
                            <th>{result.doc.TariffNoteLabel}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.doc.CustomDuty &&
                          result.doc.CustomDuty.length > 0 ? (
                            result.doc.CustomDuty.map((r, idx) => (
                              <tr key={idx}>
                                <td>
                                  {r.NTLCCode} - {r.NTLCDescription}
                                </td>
                                <td>{r.TariffRegime}</td>
                                <td>{r.TariffReported}</td>
                                <td>{r.TariffAve}</td>
                                <td>{r.TariffNote}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={5} className="text-center">
                                No Record Found
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      <p className="text-center">{error}</p>
                    </>
                  ) : (
                    <p className="text-center">{error}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDuties;

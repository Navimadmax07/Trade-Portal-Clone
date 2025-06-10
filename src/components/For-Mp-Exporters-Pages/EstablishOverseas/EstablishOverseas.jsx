import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountryData from "./CountryData";
import { useNavigate } from "react-router-dom";

const countries = [
  { code: "004", title: "Afghanistan", name: "Afghanistan" },
  { code: "008", title: "Albania", name: "Albania" },
  { code: "012", title: "Algeria", name: "Algeria" },
  {
    code: "636",
    title: "America not elsewhere specified",
    name: "America not elsewhere specified",
  },
  { code: "016", title: "American Samoa", name: "American Samoa" },
  { code: "020", title: "Andorra", name: "Andorra" },
  { code: "024", title: "Angola", name: "Angola" },
  { code: "660", title: "Anguilla", name: "Anguilla" },
  {
    code: "028",
    title: "Antigua and Barbuda",
    name: "Antigua and Barbuda",
  },
  { code: "899", title: "Area Nes", name: "Area Nes" },
  { code: "032", title: "Argentina", name: "Argentina" },
  { code: "156", title: "China", name: "China" },
  { code: "036", title: "Australia", name: "Australia" },
  { code: "040", title: "Austria", name: "Austria" },
  { code: "031", title: "Azerbaijan", name: "Azerbaijan" },
  { code: "044", title: "Bahamas", name: "Bahamas" },
  { code: "048", title: "Bahrain", name: "Bahrain" },
  { code: "050", title: "Bangladesh", name: "Bangladesh" },
  { code: "052", title: "Barbados", name: "Barbados" },
  { code: "112", title: "Belarus", name: "Belarus" },
  { code: "056", title: "Belgium", name: "Belgium" },
  { code: "084", title: "Belize", name: "Belize" },
  { code: "204", title: "Benin", name: "Benin" },
  { code: "060", title: "Bermuda", name: "Bermuda" },
  { code: "064", title: "Bhutan", name: "Bhutan" },

  // Add more countries as needed
];

const EstablishOverseas = () => {
  const navigate = useNavigate();
  // const [selectedCountry, setSelectedCountry] = useState("");

  // const handleCountryChange = (e) => {
  //   setSelectedCountry(e.target.value);
  // };
  // const operating_a_business = document.getElementById("operating_a_business");
  // const china = document.getElementById("china");

  // operating_a_business.addEventListener("click", () => {
  //   if (china.style.display === "none") {
  //     china.style.display = "inline";
  //   } else {
  //     china.style.display = "none";
  //   }
  // });

  return (
    <div className="container-fluid" id="innerpage">
          <div className="row" id="dashboard">
            <div className="col-md-3 pt-3" id="sidemenu">
              <Link to="/" className="btn btn-light mb-3">
              <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i>
    
              </Link>
          <div className="card">
            <div className="card-header">
              <h4 className="text-center pt-2">Establish Overseas</h4>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="javascript:void(0)" onClick={() => navigate("/operatingBusiness")} id="operating_a_business">
                    Operating a business
                  </a>
                </li>
                <li className="list-group-item">
                  <a  onClick={() => navigate("establishOverseas")}>
                    Tax system{" "}
                    <span className="badge badge-danger">
                      {/* {" "} */}
                      {/* <i className="fa fa-lock"> </i>{" "} */}
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="javascript:void(0)">
                    Legal Environment{" "}
                    <span className="badge badge-danger">
                      {/* {" "} */}
                      {/* <i className="fa fa-lock"> </i>{" "} */}
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="javascript:void(0)">
                    Foreign Investment{" "}
                    <span className="badge badge-danger">
                      {/* {" "} */}
                      {/* <i className="fa fa-lock"> </i>{" "} */}
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="javascript:void(0)">
                    Business Practices{" "}
                    <span className="badge badge-danger">
                      {/* {" "} */}
                      {/* <i className="fa fa-lock"> </i>{" "} */}
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="javascript:void(0)">
                    Entry requirement{" "}
                    <span className="badge badge-danger">
                      {/* {" "} */}
                      {/* <i className="fa fa-lock"> </i>{" "} */}
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="javascript:void(0)">
                    Practical Information{" "}
                    <span className="badge badge-danger">
                      {/* {" "} */}
                      {/* <i className="fa fa-lock"> </i>{" "} */}
                    </span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="javascript:void(0)">
                    Living{" "}
                    <span className="badge badge-danger">
                      {/* {" "} */}
                      {/* <i className="fa fa-lock"> </i>{" "} */}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-9 text-center">
          <div className="card mb-4">
            <div className="card-body">
              <h2>Establish Overseas</h2>
              <p className="mb-4">
                Learn how to operate a business abroad and manage
                international investments.
              </p>
              <div className="col-md-4 offset-4 mb-4">
                <img
                  src="/src/assets/oversease.png"
                  alt="Establish Overseas"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Operating a Business</h3>
            </div>
            <div className="card-body">
              <select className="form-control" name="from_country_code">
                <option value="">Select Country</option>
                <option value="004" title="Afghanistan">
                  Afghanistan
                </option>
                <option value="008" title="Albania">
                  Albania
                </option>
                <option value="012" title="Algeria">
                  Algeria
                </option>
                <option value="636" title="America not elsewhere specified">
                  America not elsewhere specified
                </option>
                <option value="016" title="American Samoa">
                  American Samoa
                </option>
                <option value="020" title="Andorra">
                  Andorra
                </option>
                <option value="024" title="Angola">
                  Angola
                </option>
                <option value="660" title="Anguilla">
                  Anguilla
                </option>
                <option value="028" title="Antigua and Barbuda">
                  Antigua and Barbuda
                </option>
                <option value="899" title="Area Nes">
                  Area Nes
                </option>
                <option value="032" title="Argentina">
                  Argentina
                </option>
                <option value="051" title="Armenia">
                  Armenia
                </option>
                <option value="533" title="Aruba">
                  Aruba
                </option>
                <option value="946" title="Asia not elsewhere specified">
                  Asia not elsewhere specified
                </option>
                <option value="036" title="Australia">
                  Australia
                </option>
                <option value="040" title="Austria">
                  Austria
                </option>
                <option value="031" title="Azerbaijan">
                  Azerbaijan
                </option>
                <option value="044" title="Bahamas">
                  Bahamas
                </option>
                <option value="048" title="Bahrain">
                  Bahrain
                </option>
                <option value="050" title="Bangladesh">
                  Bangladesh
                </option>
                <option value="052" title="Barbados">
                  Barbados
                </option>
                <option value="112" title="Belarus">
                  Belarus
                </option>
                <option value="056" title="Belgium">
                  Belgium
                </option>
                <option value="084" title="Belize">
                  Belize
                </option>
                <option value="204" title="Benin">
                  Benin
                </option>
                <option value="060" title="Bermuda">
                  Bermuda
                </option>
                <option value="064" title="Bhutan">
                  Bhutan
                </option>
                <option value="068" title="Bolivia, Plurinational State of">
                  Bolivia, Plurinational State of
                </option>
                <option
                  value="535"
                  title="Bonaire, Sint Eustatius and Saba"
                >
                  Bonaire, Sint Eustatius and Saba
                </option>
                <option value="070" title="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="072" title="Botswana">
                  Botswana
                </option>
                <option value="074" title="Bouvet Island">
                  Bouvet Island
                </option>
                <option value="076" title="Brazil">
                  Brazil
                </option>
                <option value="080" title="British Antarctic Territory">
                  British Antarctic Territory
                </option>
                <option value="086" title="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="092" title="British Virgin Islands">
                  British Virgin Islands
                </option>
                <option value="096" title="Brunei Darussalam">
                  Brunei Darussalam
                </option>
                <option value="100" title="Bulgaria">
                  Bulgaria
                </option>
                <option value="854" title="Burkina Faso">
                  Burkina Faso
                </option>
                <option value="108" title="Burundi">
                  Burundi
                </option>
                <option value="132" title="Cabo Verde">
                  Cabo Verde
                </option>
                <option value="116" title="Cambodia">
                  Cambodia
                </option>
                <option value="120" title="Cameroon">
                  Cameroon
                </option>
                <option value="124" title="Canada">
                  Canada
                </option>
                <option value="129" title="Caribbean Nes">
                  Caribbean Nes
                </option>
                <option value="136" title="Cayman Islands">
                  Cayman Islands
                </option>
                <option
                  value="471"
                  title="Centr.Amer.Com.Market (CACM) Nes"
                >
                  Centr.Amer.Com.Market (CACM) Nes
                </option>
                <option value="140" title="Central African Republic">
                  Central African Republic
                </option>
                <option value="148" title="Chad">
                  Chad
                </option>
                <option value="152" title="Chile">
                  Chile
                </option>
                <option value="156" title="China">
                  China
                </option>
                <option value="162" title="Christmas Island">
                  Christmas Island
                </option>
                <option value="166" title="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="170" title="Colombia">
                  Colombia
                </option>
                <option value="174" title="Comoros">
                  Comoros
                </option>
                <option value="178" title="Congo">
                  Congo
                </option>
                <option
                  value="180"
                  title="Congo, Democratic Republic of the"
                >
                  Congo, Democratic Republic of the
                </option>
                <option value="184" title="Cook Islands">
                  Cook Islands
                </option>
                <option value="188" title="Costa Rica">
                  Costa Rica
                </option>
                <option value="384" title="Côte d'Ivoire">
                  Côte d'Ivoire
                </option>
                <option value="191" title="Croatia">
                  Croatia
                </option>
                <option value="192" title="Cuba">
                  Cuba
                </option>
                <option value="531" title="Curaçao">
                  Curaçao
                </option>
                <option value="196" title="Cyprus">
                  Cyprus
                </option>
                <option value="203" title="Czech Republic">
                  Czech Republic
                </option>
                <option value="208" title="Denmark">
                  Denmark
                </option>
                <option value="262" title="Djibouti">
                  Djibouti
                </option>
                <option value="212" title="Dominica">
                  Dominica
                </option>
                <option value="214" title="Dominican Republic">
                  Dominican Republic
                </option>
                <option
                  value="221"
                  title="East Europe not elsewhere specified"
                >
                  East Europe not elsewhere specified
                </option>
                <option value="218" title="Ecuador">
                  Ecuador
                </option>
                <option value="818" title="Egypt">
                  Egypt
                </option>
                <option value="222" title="El Salvador">
                  El Salvador
                </option>
                <option value="226" title="Equatorial Guinea">
                  Equatorial Guinea
                </option>
                <option value="232" title="Eritrea">
                  Eritrea
                </option>
                <option value="233" title="Estonia">
                  Estonia
                </option>
                <option value="748" title="Eswatini">
                  Eswatini
                </option>
                <option value="231" title="Ethiopia">
                  Ethiopia
                </option>
                <option
                  value="697"
                  title="Europe EFTA not elsewhere specified"
                >
                  Europe EFTA not elsewhere specified
                </option>
                <option value="568" title="Europe Othr. Nes">
                  Europe Othr. Nes
                </option>
                <option value="492" title="European Union Nes">
                  European Union Nes
                </option>
                <option value="238" title="Falkland Islands (Malvinas)">
                  Falkland Islands (Malvinas)
                </option>
                <option value="234" title="Faroe Islands">
                  Faroe Islands
                </option>
                <option value="242" title="Fiji">
                  Fiji
                </option>
                <option value="246" title="Finland">
                  Finland
                </option>
                <option value="251" title="France">
                  France
                </option>
                <option value="838" title="Free Zones">
                  Free Zones
                </option>
                <option value="258" title="French Polynesia">
                  French Polynesia
                </option>
                <option
                  value="260"
                  title="French Southern and Antarctic Territories"
                >
                  French Southern and Antarctic Territories
                </option>
                <option value="266" title="Gabon">
                  Gabon
                </option>
                <option value="270" title="Gambia">
                  Gambia
                </option>
                <option value="268" title="Georgia">
                  Georgia
                </option>
                <option value="276" title="Germany">
                  Germany
                </option>
                <option value="288" title="Ghana">
                  Ghana
                </option>
                <option value="292" title="Gibraltar">
                  Gibraltar
                </option>
                <option value="300" title="Greece">
                  Greece
                </option>
                <option value="304" title="Greenland">
                  Greenland
                </option>
                <option value="308" title="Grenada">
                  Grenada
                </option>
                <option value="316" title="Guam">
                  Guam
                </option>
                <option value="320" title="Guatemala">
                  Guatemala
                </option>
                <option value="324" title="Guinea">
                  Guinea
                </option>
                <option value="624" title="Guinea-Bissau">
                  Guinea-Bissau
                </option>
                <option value="328" title="Guyana">
                  Guyana
                </option>
                <option value="332" title="Haiti">
                  Haiti
                </option>
                <option value="340" title="Honduras">
                  Honduras
                </option>
                <option value="344" title="Hong Kong, China">
                  Hong Kong, China
                </option>
                <option value="348" title="Hungary">
                  Hungary
                </option>
                <option value="352" title="Iceland">
                  Iceland
                </option>
                <option value="699" title="India">
                  India
                </option>
                <option value="360" title="Indonesia">
                  Indonesia
                </option>
                <option value="364" title="Iran, Islamic Republic of">
                  Iran, Islamic Republic of
                </option>
                <option value="368" title="Iraq">
                  Iraq
                </option>
                <option value="372" title="Ireland">
                  Ireland
                </option>
                <option value="376" title="Israel">
                  Israel
                </option>
                <option value="381" title="Italy">
                  Italy
                </option>
                <option value="388" title="Jamaica">
                  Jamaica
                </option>
                <option value="392" title="Japan">
                  Japan
                </option>
                <option value="400" title="Jordan">
                  Jordan
                </option>
                <option value="398" title="Kazakhstan">
                  Kazakhstan
                </option>
                <option value="404" title="Kenya">
                  Kenya
                </option>
                <option value="296" title="Kiribati">
                  Kiribati
                </option>
                <option
                  value="408"
                  title="Korea, Democratic People's Republic of"
                >
                  Korea, Democratic People's Republic of
                </option>
                <option value="410" title="Korea, Republic of">
                  Korea, Republic of
                </option>
                <option value="414" title="Kuwait">
                  Kuwait
                </option>
                <option value="417" title="Kyrgyzstan">
                  Kyrgyzstan
                </option>
                <option value="473" title="LAIA not elsewhere specified">
                  LAIA not elsewhere specified
                </option>
                <option
                  value="418"
                  title="Lao People's Democratic Republic"
                >
                  Lao People's Democratic Republic
                </option>
                <option value="428" title="Latvia">
                  Latvia
                </option>
                <option value="422" title="Lebanon">
                  Lebanon
                </option>
                <option value="426" title="Lesotho">
                  Lesotho
                </option>
                <option value="430" title="Liberia">
                  Liberia
                </option>
                <option value="434" title="Libya, State of">
                  Libya, State of
                </option>
                <option value="440" title="Lithuania">
                  Lithuania
                </option>
                <option value="442" title="Luxembourg">
                  Luxembourg
                </option>
                <option value="446" title="Macao, China">
                  Macao, China
                </option>
                <option value="807" title="Macedonia, North">
                  Macedonia, North
                </option>
                <option value="450" title="Madagascar">
                  Madagascar
                </option>
                <option value="454" title="Malawi">
                  Malawi
                </option>
                <option value="458" title="Malaysia">
                  Malaysia
                </option>
                <option value="462" title="Maldives">
                  Maldives
                </option>
                <option value="466" title="Mali">
                  Mali
                </option>
                <option value="470" title="Malta">
                  Malta
                </option>
                <option value="584" title="Marshall Islands">
                  Marshall Islands
                </option>
                <option value="478" title="Mauritania">
                  Mauritania
                </option>
                <option value="480" title="Mauritius">
                  Mauritius
                </option>
                <option value="175" title="Mayotte">
                  Mayotte
                </option>
                <option value="484" title="Mexico">
                  Mexico
                </option>
                <option value="583" title="Micronesia, Federated States of">
                  Micronesia, Federated States of
                </option>
                <option value="498" title="Moldova, Republic of">
                  Moldova, Republic of
                </option>
                <option value="496" title="Mongolia">
                  Mongolia
                </option>
                <option value="499" title="Montenegro">
                  Montenegro
                </option>
                <option value="500" title="Montserrat">
                  Montserrat
                </option>
                <option value="504" title="Morocco">
                  Morocco
                </option>
                <option value="508" title="Mozambique">
                  Mozambique
                </option>
                <option value="104" title="Myanmar">
                  Myanmar
                </option>
                <option value="516" title="Namibia">
                  Namibia
                </option>
                <option value="520" title="Nauru">
                  Nauru
                </option>
                <option value="524" title="Nepal">
                  Nepal
                </option>
                <option value="528" title="Netherlands">
                  Netherlands
                </option>
                <option value="530" title="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="536" title="Neutral Zone">
                  Neutral Zone
                </option>
                <option value="540" title="New Caledonia">
                  New Caledonia
                </option>
                <option value="554" title="New Zealand">
                  New Zealand
                </option>
                <option value="558" title="Nicaragua">
                  Nicaragua
                </option>
                <option value="562" title="Niger">
                  Niger
                </option>
                <option value="566" title="Nigeria">
                  Nigeria
                </option>
                <option value="570" title="Niue">
                  Niue
                </option>
                <option value="574" title="Norfolk Island">
                  Norfolk Island
                </option>
                <option
                  value="290"
                  title="North Africa not elsewhere specified"
                >
                  North Africa not elsewhere specified
                </option>
                <option
                  value="637"
                  title="North America and Central America, nes"
                >
                  North America and Central America, nes
                </option>
                <option value="580" title="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="579" title="Norway">
                  Norway
                </option>
                <option value="527" title="Oceania Nes">
                  Oceania Nes
                </option>
                <option value="512" title="Oman">
                  Oman
                </option>
                <option value="586" title="Pakistan">
                  Pakistan
                </option>
                <option value="585" title="Palau">
                  Palau
                </option>
                <option value="275" title="Palestine, State of">
                  Palestine, State of
                </option>
                <option value="591" title="Panama">
                  Panama
                </option>
                <option value="598" title="Papua New Guinea">
                  Papua New Guinea
                </option>
                <option value="600" title="Paraguay">
                  Paraguay
                </option>
                <option value="604" title="Peru">
                  Peru
                </option>
                <option value="608" title="Philippines">
                  Philippines
                </option>
                <option value="612" title="Pitcairn">
                  Pitcairn
                </option>
                <option value="616" title="Poland">
                  Poland
                </option>
                <option value="620" title="Portugal">
                  Portugal
                </option>
                <option value="634" title="Qatar">
                  Qatar
                </option>
                <option value="642" title="Romania">
                  Romania
                </option>
                <option value="643" title="Russian Federation">
                  Russian Federation
                </option>
                <option value="646" title="Rwanda">
                  Rwanda
                </option>
                <option value="654" title="Saint Helena">
                  Saint Helena
                </option>
                <option value="659" title="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="662" title="Saint Lucia">
                  Saint Lucia
                </option>
                <option
                  value="670"
                  title="Saint Vincent and the Grenadines"
                >
                  Saint Vincent and the Grenadines
                </option>
                <option value="882" title="Samoa">
                  Samoa
                </option>
                <option value="678" title="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="682" title="Saudi Arabia">
                  Saudi Arabia
                </option>
                <option value="686" title="Senegal">
                  Senegal
                </option>
                <option value="688" title="Serbia">
                  Serbia
                </option>
                <option value="891" title="Serbia and Montenegro">
                  Serbia and Montenegro
                </option>
                <option value="690" title="Seychelles">
                  Seychelles
                </option>
                <option value="837" title="Ship stores and bunkers">
                  Ship stores and bunkers
                </option>
                <option value="694" title="Sierra Leone">
                  Sierra Leone
                </option>
                <option value="702" title="Singapore">
                  Singapore
                </option>
                <option value="534" title="Sint Maarten (Dutch part)">
                  Sint Maarten (Dutch part)
                </option>
                <option value="703" title="Slovakia">
                  Slovakia
                </option>
                <option value="705" title="Slovenia">
                  Slovenia
                </option>
                <option value="090" title="Solomon Islands">
                  Solomon Islands
                </option>
                <option value="706" title="Somalia">
                  Somalia
                </option>
                <option value="710" title="South Africa">
                  South Africa
                </option>
                <option value="728" title="South Sudan">
                  South Sudan
                </option>
                <option value="724" title="Spain">
                  Spain
                </option>
                <option value="839" title="Special categories">
                  Special categories
                </option>
                <option value="144" title="Sri Lanka">
                  Sri Lanka
                </option>
                <option value="666" title="St. Pierre and Miquelon">
                  St. Pierre and Miquelon
                </option>
                <option value="729" title="Sudan">
                  Sudan
                </option>
                <option value="736" title="Sudan (before 2012)">
                  Sudan (before 2012)
                </option>
                <option value="740" title="Suriname">
                  Suriname
                </option>
                <option value="752" title="Sweden">
                  Sweden
                </option>
                <option value="757" title="Switzerland">
                  Switzerland
                </option>
                <option value="760" title="Syrian Arab Republic">
                  Syrian Arab Republic
                </option>
                <option value="490" title="Taipei, Chinese">
                  Taipei, Chinese
                </option>
                <option value="762" title="Tajikistan">
                  Tajikistan
                </option>
                <option value="834" title="Tanzania, United Republic of">
                  Tanzania, United Republic of
                </option>
                <option value="999" title="Territory not allocated">
                  Territory not allocated
                </option>
                <option value="764" title="Thailand">
                  Thailand
                </option>
                <option value="626" title="Timor-Leste">
                  Timor-Leste
                </option>
                <option value="768" title="Togo">
                  Togo
                </option>
                <option value="772" title="Tokelau">
                  Tokelau
                </option>
                <option value="776" title="Tonga">
                  Tonga
                </option>
                <option value="780" title="Trinidad and Tobago">
                  Trinidad and Tobago
                </option>
                <option value="788" title="Tunisia">
                  Tunisia
                </option>
                <option value="792" title="Turkey">
                  Turkey
                </option>
                <option value="795" title="Turkmenistan">
                  Turkmenistan
                </option>
                <option value="796" title="Turks and Caicos Islands">
                  Turks and Caicos Islands
                </option>
                <option value="798" title="Tuvalu">
                  Tuvalu
                </option>
                <option value="800" title="Uganda">
                  Uganda
                </option>
                <option value="804" title="Ukraine">
                  Ukraine
                </option>
                <option value="784" title="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="826" title="United Kingdom">
                  United Kingdom
                </option>
                <option
                  value="849"
                  title="United States Minor Outlying Islands"
                >
                  United States Minor Outlying Islands
                </option>
                <option value="842" title="United States of America">
                  United States of America
                </option>
                <option value="858" title="Uruguay">
                  Uruguay
                </option>
                <option value="860" title="Uzbekistan">
                  Uzbekistan
                </option>
                <option value="548" title="Vanuatu">
                  Vanuatu
                </option>
                <option
                  value="862"
                  title="Venezuela, Bolivarian Republic of"
                >
                  Venezuela, Bolivarian Republic of
                </option>
                <option value="704" title="Viet Nam">
                  Viet Nam
                </option>
                <option value="876" title="Wallis and Futuna Islands">
                  Wallis and Futuna Islands
                </option>
                <option
                  value="879"
                  title="West Asia not elsewhere specified"
                >
                  West Asia not elsewhere specified
                </option>
                <option value="732" title="Western Sahara">
                  Western Sahara
                </option>
                <option value="887" title="Yemen">
                  Yemen
                </option>
                <option value="894" title="Zambia">
                  Zambia
                </option>
                <option value="716" title="Zimbabwe">
                  Zimbabwe
                </option>
              </select>

              <div
                className="col-md-12"
                id="china"
                style={{ display: "none" }}
              >
                <p>
                  <strong>CHINA</strong>
                </p>
                <p>
                  <strong>Legal Forms of Companies</strong>
                </p>
                <p>
                  <strong>
                    Wholly foreign-owned enterprise (WFOE)Number of
                    partners:{" "}
                  </strong>
                  One juridical person or one or more shareholders.
                </p>
                <p>
                  Entity owned 100% by foreign interests that have the same
                  rights as a local company.
                </p>
                <p>
                  Capital (max/min): Minimum varies according to the sector
                  of activity.
                </p>
                <p>
                  Shareholders and liability: Limited to the amount of
                  contributions.
                </p>
                <p>
                  <strong>
                    Equity Joint Venture (EJV)Number of partners:{" "}
                  </strong>
                  Minimum of one Chinese entity and minimum one foreign
                  entity.
                </p>
                <p>
                  Capital (max/min): No minimum capital required, but at
                  least 25% must originate from foreign investors.
                </p>
                <p>
                  Shareholders and liability: Limited to the amount of
                  contributions.
                </p>
                <p>
                  Co-operative Joint Ventures (CJV)Number of partners:
                  Minimum of two partners: one Chinese entity and one
                  foreign entity.
                </p>
                <p>Capital (max/min): No minimum capital required.</p>
                <p>
                  Shareholders and liability: Limited to the amount of
                  contributions.
                </p>
                <p>
                  <strong>
                    Foreign Investment Joint Stock Company (JSC)Number of
                    partners:
                  </strong>
                  Minimum two partners.
                </p>
                <p>
                  Capital (max/min): Minimum capital needed: CNY 5 million
                  if domestic capital, CNY 30 million if foreign capital.
                </p>
                <p>
                  Shareholders and liability: Each shareholder contributes
                  the same amount to the share capital and is linked to the
                  company by its share of the share capital.
                </p>
                <p>
                  <strong>Holding:</strong> Number of partners: Minimum
                  one&nbsp; partner.
                </p>
                <p>Capital (max/min): Minimum capital USD 30 million.</p>
                <p>
                  Shareholders and liability: Each shareholder contributes
                  the same amount to the share capital and is linked to the
                  company by its share of the share capital.
                </p>
                <p>
                  <strong>Enterprises Federation: </strong>Chinese
                  Association of International SME Cooperation
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>Business Setup Procedures</strong>
                </p>
                <p>
                  Setting Up a Company&nbsp;&nbsp; China&nbsp; East Asia
                  &amp; Pacific
                </p>
                <p>
                  Procedures (number)&nbsp;&nbsp;&nbsp;
                  4.00&nbsp;&nbsp;&nbsp;&nbsp; 7.00
                </p>
                <p>
                  Time (days)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  8.60&nbsp;&nbsp;&nbsp;&nbsp; 23.90
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>For Further Information: </strong>Doing Business:
                  China, to learn about procedures to start a business in
                  China
                </p>
                <p>
                  <strong>The Competent Organisation: </strong>Ministry of
                  Commerce
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>Recovery Procedures</strong>
                </p>
                <p>
                  <strong>PrincipleMinimum </strong>Debt-to-Capital Ratio
                  Triggering LiquidationBankruptcy LawsCompany bankruptcy
                  laws
                </p>
                <p>
                  The law on bankruptcy is being reshaped in China. It is
                  difficult to be declared as bankrupt. To be declared as
                  bankrupt, equities must be negative.
                  <strong>
                    Reorganization and Rehabilitation LawsCompany bankruptcy
                    laws
                  </strong>
                </p>
                <p>&nbsp;</p>
                <p>The Active Population in Figures</p>
                <p>
                  2011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  2013&nbsp;&nbsp;&nbsp; 2015
                </p>
                <p>
                  Labour Force&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  795,500,000&nbsp;&nbsp;&nbsp;
                  797,600,000&nbsp;&nbsp;&nbsp; 804,000,000
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  2015&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  2016&nbsp;&nbsp;&nbsp; 2017
                </p>
                <p>
                  Total activity
                  rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  70.91%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  70.77%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  70.54%
                </p>
                <p>
                  Men activity
                  rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  62.15%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  62.21%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  62.27%
                </p>
                <p>
                  Women activity rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  63.58%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  63.35%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  63.03%
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Working Conditions</strong>
                </p>
                <p>
                  <strong>Opening Hours </strong>
                </p>
                <p>
                  <strong>Legal Weekly Duration</strong>
                </p>
                <p>40 hours</p>
                <p>
                  <strong>Maximum Duration</strong>
                </p>
                <p>
                  8 hours per day with a maximum of 44 hours per week on an
                  average. Not more than additional 36 hours per month.
                </p>
                <p>
                  <strong>Night Hours: </strong>NA
                </p>
                <p>
                  <strong>Working Rest Day: </strong>One day per week.
                </p>
                <p>
                  <strong>Paid Annual VacationRetirement Age: </strong>The
                  retirement age is 55 for women and 60 for men.
                </p>
                <p>
                  <strong>
                    Child Labour and Minimum Age For Employment:{" "}
                  </strong>
                  More than 15 years for the industry. For other sectors,
                  children can work at 13-14 years under certain conditions.
                </p>
                <p>
                  <strong>Informal Labour Market: </strong>Moonlighting is
                  estimated at 18.5% of national workers and 72.5% of
                  foreign workers<strong>.</strong>
                </p>
                <p>
                  <strong>The Cost of Labour</strong>
                </p>
                <p>
                  <strong>Pay</strong>
                </p>
                <p>
                  <strong>Minimum Wage: </strong>The minimum wage varies
                  across the provinces. Currently, the highest monthly
                  minimum wages are in parts of Guangdong, Jiangsu, and
                  Zhejiang provinces, which have all surpassed the RMB 2,000
                  (US$289) mark. Shanghai continues to have the highest
                  minimum wage in China, at RMB 2,480 (US$358) per month,
                  followed by Shenzhen and Beijing, both at RMB 2,200
                  (US$318) per month. Among the lowest minimum wages are
                  those in some rural areas: Liaoning (1,120 RMB/US$162),
                  Hunan (1,130 RMB/US$163) and Anhui (1,150 RMB/US$166).
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Average Wage: </strong>The average monthly salary
                  was 8,452 yuan ($1,228.38) in 37 major cities during the
                  second quarter of 2019, with Beijing, Shanghai and
                  Shenzhen all topping 10,000 yuan.
                </p>
                <p>
                  NB: the average wage varies according to the provinces.
                </p>
                <p>
                  <strong>Other Forms of Pay</strong>
                </p>
                <p>
                  <strong>Pay For Overtime: </strong>Increase of 150% if the
                  worker is requested to work more
                </p>
                <p>
                  Increase of 200% if an additional rest day cannot be
                  granted
                </p>
                <p>
                  <strong>Pay For Rest Days Worked: </strong>NA
                </p>
                <p>
                  <strong>Pay For Night Hours: </strong>NA
                </p>
                <p>
                  <strong>Pay For Overtime at Night: </strong>NA
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Social Security Costs</strong>
                </p>
                <p>
                  <strong>The Areas Covered: </strong>Pension, medical,
                  maternity, unemployment and work-related injury insurance
                  schemes are provided.ContributionsContributions Paid By
                  the Employer:
                </p>
                <p>
                  Contributions vary across the country and for different
                  schemes. China&rsquo;s Social Security System consists of
                  5 mandatory insurance schemes (pension fund, medical
                  insurance, industrial injury insurance, unemployment
                  insurance, and maternity insurance) and a housing fund
                  (only applicable to Chinese employees). In Beijing, the
                  employer's share of social insurance contributions amounts
                  approximately to 27.8% to 29.5%:
                </p>
                <p>&nbsp;</p>
                <p>Pension 16%</p>
                <p>Medical expenses 10%</p>
                <p>Unemployment 0.8%</p>
                <p>Maternity 0.8%</p>
                <p>Work-related injury 0.2% to 1.9%</p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>Contributions Paid By the Employee:</p>
                <p>
                  Contributions vary across the country and for different
                  schemes. China&rsquo;s Social Security System consists of
                  5 mandatory insurance schemes (pension fund, medical
                  insurance, industrial injury insurance, unemployment
                  insurance, and maternity insurance) and&nbsp; a housing
                  fund (only applicable to Chinese employees). In Beijing,
                  the employee's share of social insurance contributions
                  amounts approximately to 10.2%:
                </p>
                <p>&nbsp;</p>
                <p>Pension 8%</p>
                <p>Medical expenses 2%</p>
                <p>Unemployment 0.2%</p>
                <p>Maternity 0%</p>
                <p>Work-related injury 0%</p>
                <p>
                  <strong>Competent Organization: </strong>Ministry of Human
                  Resources and Social Security (MOHRSS)
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Management of Human Resources</strong>
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Recruitment</strong>
                </p>
                <p>
                  <strong>Method of Recruitment: </strong>Recruitment is
                  done more and more through Internet. But announcements in
                  the newspapers are the most used means for the job offers.
                  Numerous trade fairs are also organized and are a good
                  means to recruit. Recruitment campaigns in the
                  universities are also organized. The most prevalent method
                  of recruitment is the interview. Certain companies must
                  also pass technical or English tests. The psychological
                  tests are not used in China, however role playing,
                  simulations or group interviews are becoming more and more
                  common.Recruitment AgenciesMany recruitment agencies are
                  found in China. Hudson, Wang-li, Michael Page.Recruitment
                  WebsitesChinaHR.com
                </p>
                <p>Zhaopin.com</p>
                <p>51job.com</p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>The Contract</strong>
                </p>
                <p>
                  <strong>Type of Contract: </strong>Legal provisions govern
                  work contracts and collective agreements, but may be
                  supplemented by individual negotiations. Formalities
                  regarding employment contracts and recruiting conditions
                  are strict, while dismissal constraints are rather
                  flexible. There are 3 types of contracts: permanent
                  contracts, fixed term contracts and project-specific
                  contracts.
                </p>
                <p>Breach of Contracts</p>
                <p>Retirement</p>
                <p>At the age envisaged, not before.</p>
                <p>
                  Necessity for all the projects to submit a business plan
                  subject to approval by the competent authorities.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>Dismissals</strong>
                </p>
                <p>
                  An employee can be dismissed if he has demonstrated during
                  his trial period that he was not qualified for the post,
                  when he violates the company rules, when he causes great
                  loss to the company because of professional misconduct. A
                  dismissal is also accepted when the employee after a long
                  illness cannot resume his job again or another job in the
                  company, if the employee is inefficient even after
                  training, or if no arrangement is possible between the
                  parties on a change of contract.
                </p>
                <p>Other Possible Methods</p>
                <p>Dismissals.Labour LawsEmployment law</p>
                <p>
                  <strong>Doing Business: </strong>China, to obtain a
                  summary of labour regulations that apply to local
                  entreprises
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Dispute Settlement</strong>
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Conciliation Process</strong>
                </p>
                <p>
                  <strong>Cases of Dispute: </strong>Conflicts between
                  employer and employee on the non respect of the labor law.
                </p>
                <p>Legal Framework</p>
                <p>
                  In the event of dispute between the employer and employee,
                  the parties can have recourse to mediation or arbitration,
                  present the case before the Court or come to a mutual
                  arrangement. During a mediation or an arbitration if one
                  of the parties has an objection to the resolution, it can
                  proceed to the Court for a lawsuit. Many contracts
                  prescribe arbitration by the China International Economic
                  and Trade Arbitration Commission (CIETAC). For contracts
                  involving at least one foreign party, offshore arbitration
                  may be adopted.
                </p>
                <p>Procedure</p>
                <p>
                  <strong>Employment law: </strong>NA
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Judicial Structures: </strong>NA
                </p>
                <p>
                  <strong>Legal Framework: </strong>NA
                </p>
                <p>
                  <strong>Employment Law: </strong>NA
                </p>
                <p>
                  <strong>Competent Legal Body: </strong>NA
                </p>
                <p>
                  <strong>People's court: </strong>NA
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Social Partners</strong>
                </p>
                <p>
                  <strong>
                    Social Dialogue and Involvement of Social Partners:{" "}
                  </strong>
                  While worker protests and work stoppages occur regularly,
                  the right to strike is not protected by law. China has not
                  ratified core International Labour Organisation
                  conventions on freedom of association and collective
                  bargaining. The enforcement of existing labour regulations
                  is reportedly poor. The only trade union recognised by the
                  Chinese Communist Party is the All China Federation of
                  Trade Unions (ACFTU). As independent trade unions are
                  illegal, some dispute that the ACFTU can be an effective
                  voice for workers. Unions All China Federation of Trade
                  Unions (ACFTU)
                </p>
                <p>
                  <strong>Regulation Bodies: </strong>Ministry of Employment
                </p>
                <p>
                  <strong>&nbsp; </strong>
                </p>
                <p>
                  <strong>&nbsp;&nbsp;</strong>
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
              </div>
            </div>
            {/* <div className="card-body">
              <select
                className="form-control"
                value={selectedCountry}
                onChange={handleCountryChange}
                name="from_country_code"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option
                    key={country.code}
                    value={country.code}
                    title={country.title}
                  >
                    {country.name}
                  </option>
                ))}
              </select>

              {selectedCountry === "156" && <CountryData />}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstablishOverseas;

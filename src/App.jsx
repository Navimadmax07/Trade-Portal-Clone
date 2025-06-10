import React from "react";
import "./assets/css/all.css";
import "./assets/css/webslidemenu.css";
import "./assets/css/bootstrap.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/white-red.css";
import "./assets/css/fade-down.css";
import "./components/Chatbot/Chatbot.css";
// import "./map.jsx";

import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import CurrencyAnalysis from "./components/TradeAcademy/CurrencyAnalysis";
import LoadCalculator from "./components/TradeAcademy/LoadCalculator";
import HSCode from "./components/TradeAcademy/HSCode";
import ReachBusinessCounterparts from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts";
import AnalyzeMarketTrend from "./components/For-Mp-Exporters-Pages/AnalyzeMarketTrend";
import ManageShipments from "./components/For-Mp-Exporters-Pages/ManageShipments";
import MadhyaPradeshExporters from "./components/For-Foreign-Buyers-Pages/MadhyaPradeshExporters";
import PostQuery from "./components/For-Foreign-Buyers-Pages/PostQuery";
import TradeFinanceDashboard from "./components/For-Mp-Exporters-Pages/TradeFinanceDashboard/TradeFinanceDashboard";
import EstablishOverseas from "./components/For-Mp-Exporters-Pages/EstablishOverseas/EstablishOverseas";
import StateNodalOfficers from "./components/ODOP-pages/StateNodalOfficers.jsx";
import HowToStartExport from "./components/HowToStartExport.jsx";
import Acts from "./components/ResourcePage/Acts.jsx";
// import ImportControl from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts/sections/ImportControl.jsx";
import BusinessDirectories from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts/sections/BusinessDirectories.jsx";
import BusinessDirectoriesCountry from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts/sections/BusinessDirectoriesCountry.jsx";
import TradeShows from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts/sections/TradeShows.jsx";
import Measurements from "./components/TradeAcademy/Measurement.jsx";
// import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";
import InfoSection from "./components/InfoSection/InfoSection";
import Header from "./components/Header/Header";
import AgarMalwa from "./components/Regions/AgarMalwa.jsx";
import IndorePage from "./components/regions/Indore.jsx";
import Mandla from "./components/regions/Mandla.jsx";
import Alirajpur from "./components/regions/Alirajpur.jsx";
import Anuppur from "./components/regions/Anuppur.jsx";
import Ashoknagar from "./components/regions/AshokNagar.jsx";
import Balaghat from "./components/regions/Balaghat.jsx";
import Barwani from "./components/regions/Barwani.jsx";
import Betul from "./components/regions/Betul.jsx";
import Bhind from "./components/regions/Bhind.jsx";
import Bhopal from "./components/regions/Bhopal.jsx";
import Burhanpur from "./components/regions/Burhanpur.jsx";
import Chhatarpur from "./components/regions/Chhatarpur.jsx";
import Chhindwara from "./components/regions/Chhindwara.jsx";
import Damoh from "./components/regions/Damoh.jsx";
import Datia from "./components/regions/Datia.jsx";
import Dewas from "./components/regions/Dewas.jsx";
import Dhar from "./components/regions/Dhar.jsx";
import Dindori from "./components/regions/Dindori.jsx";
import Guna from "./components/regions/Guna.jsx";
import Gwalior from "./components/regions/Gwalior.jsx";
import Harda from "./components/regions/Harda.jsx";
import Jabalpur from "./components/regions/Jabalpur.jsx";
import Jhabua from "./components/regions/Jhabua.jsx";
import Katni from "./components/regions/Katni.jsx";
import Khandwa from "./components/regions/Khandwa.jsx";
import Khargone from "./components/regions/Khargone.jsx";
import Mandsaur from "./components/regions/Mandsaur.jsx";
import Morena from "./components/regions/morena.jsx";
import Narmadapuram from "./components/regions/Narmadapuram.jsx";
import Narsinghpur from "./components/regions/Narsinghpur.jsx";
import Neemuch from "./components/regions/Neemuch.jsx";
import Niwari from "./components/regions/Niwari.jsx";
import Panna from "./components/regions/Panna.jsx";
import Raisen from "./components/regions/Raisen.jsx";
import Rajgarh from "./components/regions/Rajgarh.jsx";
import Ratlam from "./components/regions/Ratlam.jsx";
import Rewa from "./components/regions/Rewa.jsx";
import Sagar from "./components/regions/Sagar.jsx";
import Satna from "./components/regions/Satna.jsx";
import Sehore from "./components/regions/Sehore.jsx";
import Seoni from "./components/regions/Seoni.jsx";
import Shahdol from "./components/regions/Shahdol.jsx";
import Shajapur from "./components/regions/Shajapur.jsx";
import Sheopur from "./components/regions/Sheopur.jsx";
import Shivpuri from "./components/regions/Shivpuri.jsx";
import Sidhi from "./components/regions/Sidhi.jsx";
import Singrauli from "./components/regions/Singrauli.jsx";
import Tikamgarh from "./components/regions/Tikamgarh.jsx";
import Ujjain from "./components/regions/Ujjain.jsx";
import Umaria from "./components/regions/Umaria.jsx";
import Vidisha from "./components/regions/Vidisha.jsx";

import DistrictProfileOdop from "./components/ODOP-pages/District-profile-odop.jsx";
import ExportPromotionCouncilsofIndia from "./components/ResourcePage/ExportPromotionCouncilsofIndia.jsx";
import PublicSectorUndertaking from "./components/ResourcePage/PublicSectorUndertaking.jsx";
import CommodityBoards from "./components/ResourcePage/CommodityBoards.jsx";
import OtherOrganisations from "./components/ResourcePage/OtherOrganisations.jsx";
import InternationalTradeBodies from "./components/ResourcePage/InternationalTradeBodies.jsx";
import ImportExportFlows from "./components/For-Mp-Exporters-Pages/AnalyzeMarkettrend/ImportExportFlows.jsx";
import MarketReport from "./components/For-Mp-Exporters-Pages/AnalyzeMarkettrend/MarketReport.jsx";
import ExportersList from "./components/For-Mp-Exporters-Pages/AnalyzeMarkettrend/Exporters.jsx";
import ContactUs from "./components/Footer/Footercomponents/ContactPage.jsx";
import Calendar from "./components/Footer/Footercomponents/Calendar.jsx";
import Gallery from "./components/Footer/Footercomponents/Gallery.jsx";
import MediaCoverage from "./components/Footer/Footercomponents/HelpUs-Pages/MediaCoverage.jsx";
import HelpUs from "./components/Footer/Footercomponents/HelpUs-Pages/HelpUs.jsx";
import Objective from "./components/Footer/Footercomponents/HelpUs-Pages/Objective.jsx";
import Formation from "./components/Footer/Footercomponents/HelpUs-Pages/Formation.jsx";
import BankingSolution from "./components/For-Mp-Exporters-Pages/TradeFinanceDashboard/sections/BankingSolutions.jsx";
import CreditInsurance from "./components/For-Mp-Exporters-Pages/TradeFinanceDashboard/sections/CreditInsurance.jsx";
import Incoterms from "./components/For-Mp-Exporters-Pages/TradeFinanceDashboard/sections/Incoterms.jsx";
import PublicTenders from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts/sections/PublicTenders.jsx";
// import BusinessDirectories from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts/sections/BusinessDirectories.jsx";
import BusinessDirectoriesCompany from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts/sections/BusinessDirectoriesCompany.jsx";
import BlacklistCompanies from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts/sections/BlacklistCompanies.jsx";
import BusinessDirectoriesCity from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts/sections/BusinessDirectoriesCity.jsx";
import MarketInfo from "./components/For-Mp-Exporters-Pages/ReachBusinessCounterparts/sections/MarketInfo.jsx";
import ImportControls from "./components/For-Mp-Exporters-Pages/ManageShipments/ImportControl.jsx";
import ExportControl from "./components/For-Mp-Exporters-Pages/ManageShipments/ExportControl.jsx";
import CustomDuties from "./components/For-Mp-Exporters-Pages/ManageShipments/CustomDuties.jsx";
import ExportPriceCalculator from "./components/For-Mp-Exporters-Pages/ManageShipments/ExportPriceCalculator.jsx";
import MeasurementCalculator from "./components/For-Mp-Exporters-Pages/ManageShipments/MeasurementCalculator.jsx";
import RegulatoryRequirements from "./components/For-Mp-Exporters-Pages/ManageShipments/RegulatoryRequirements.jsx";
import TradeRemedies from "./components/For-Mp-Exporters-Pages/ManageShipments/TradeRemedies.jsx";
import LabellingRules from "./components/For-Mp-Exporters-Pages/ManageShipments/LabellingRules.jsx";
import Standard from "./components/Footer/Footercomponents/HelpUs-Pages/Standard.jsx";
import FAQ from "./components/Footer/Footercomponents/HelpUs-Pages/FAQ.jsx";
import TermsAndConditions from "./components/Footer/Footercomponents/HelpUs-Pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./components/Footer/Footercomponents/HelpUs-Pages/PrivacyPolicy.jsx";
import NationalScheme from "./components/Footer/Footercomponents/HelpUs-Pages/NationalScheme.jsx";
import SearchPage from "./components/Footer/Footercomponents/HelpUs-Pages/SearchPage.jsx";
import LoginForm from "./components/Footer/Footercomponents/HelpUs-Pages/LoginForm.jsx";
import Sitemap from "./components/Footer/Footercomponents/HelpUs-Pages/Sitemap.jsx";
import ScrollToTop from "./components/ScrollToTop";
import HelpLine from "./components/InfoSection/HelpLine.jsx";
import GrievanceRedressal from "./components/InfoSection/GrievanceRedressal.jsx";
import MpSchemes from "./components/Footer/Footercomponents/HelpUs-Pages/MpSchemes.jsx";
import TradeAiLogin from "./components/pages/TradeAILogin.jsx";
import TradeAiSignup from "./components/pages/TradeAiSignUp.jsx";
// import OperatingBusiness from "./components/pages/OperatingBusiness.jsx";
//import OperatingBusiness from "./components/For-Mp-Exporters-Pages/EstablishOverseas/sections/OperatingBusiness.jsx";

function App() {
  // const navigate = useNavigate();
  return (
    <>
      <InfoSection />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/analyzeMarketTrend" element={<AnalyzeMarketTrend />} />
        <Route
          path="/reachBusinessCounterparts"
          element={<ReachBusinessCounterparts />}
        />
        <Route path="/tradeAiLogin" element={<TradeAiLogin />} />
        <Route path="/tradeAiSignup" element={<TradeAiSignup />} />
        <Route path="/manageShipments" element={<ManageShipments />} />
        <Route path="/tradeFinance" element={<TradeFinanceDashboard />} />
        <Route path="/establishOverseas" element={<EstablishOverseas />} />
        <Route path="/mpExporters" element={<MadhyaPradeshExporters />} />
        <Route path="/postQuery" element={<PostQuery />} />
        <Route path="/districtProfileOdop" element={<DistrictProfileOdop />} />
        <Route path="/stateNodalOfficers" element={<StateNodalOfficers />} />
        <Route path="/howToStartExport" element={<HowToStartExport />} />
        <Route path="/currencyAnalysis" element={<CurrencyAnalysis />} />
        <Route path="/measurement" element={<Measurements />} />
        <Route path="/hsCode" element={<HSCode />} />
        <Route path="/loadCalculator" element={<LoadCalculator />} />
        <Route path="/agarMalwa" element={<AgarMalwa />} />
        <Route path="/indore" element={<IndorePage />} />
        <Route path="/mandla" element={<Mandla />} />
        <Route path="/alirajpur" element={<Alirajpur />} />
        <Route path="/anuppur" element={<Anuppur />} />
        <Route path="/ashoknagar" element={<Ashoknagar />} />
        <Route path="/balaghat" element={<Balaghat />} />
        <Route path="/barwani" element={<Barwani />} />
        <Route path="/betul" element={<Betul />} />
        <Route path="/bhind" element={<Bhind />} />
        <Route path="/bhopal" element={<Bhopal />} />
        <Route path="/burhanpur" element={<Burhanpur />} />
        <Route path="/chhatarpur" element={<Chhatarpur />} />
        <Route path="/chhindwara" element={<Chhindwara />} />
        <Route path="/damoh" element={<Damoh />} />
        <Route path="/datia" element={<Datia />} />
        <Route path="/dewas" element={<Dewas />} />
        <Route path="/dhar" element={<Dhar />} />
        <Route path="/dindori" element={<Dindori />} />
        <Route path="/guna" element={<Guna />} />
        <Route path="/gwalior" element={<Gwalior />} />
        <Route path="/harda" element={<Harda />} />
        <Route path="/jabalpur" element={<Jabalpur />} />
        <Route path="/jhabua" element={<Jhabua />} />
        <Route path="/katni" element={<Katni />} />
        <Route path="/khandwa" element={<Khandwa />} />
        <Route path="/khargaon" element={<Khargone />} />
        <Route path="/mandsaur" element={<Mandsaur />} />
        <Route path="/morena" element={<Morena />} />
        <Route path="/narmadapuram" element={<Narmadapuram />} />
        <Route path="/narsinghpur" element={<Narsinghpur />} />
        <Route path="/neemuch" element={<Neemuch />} />
        <Route path="/niwari" element={<Niwari />} />
        <Route path="/panna" element={<Panna />} />
        <Route path="/raisen" element={<Raisen />} />
        <Route path="/rajgarh" element={<Rajgarh />} />
        <Route path="/ratlam" element={<Ratlam />} />
        <Route path="/rewa" element={<Rewa />} />
        <Route path="/sagar" element={<Sagar />} />
        <Route path="/satna" element={<Satna />} />
        <Route path="/sehore" element={<Sehore />} />
        <Route path="/seoni" element={<Seoni />} />
        <Route path="/shahdol" element={<Shahdol />} />
        <Route path="/shajapur" element={<Shajapur />} />
        <Route path="/sheopur" element={<Sheopur />} />
        <Route path="/shivpuri" element={<Shivpuri />} />
        <Route path="/sidhi" element={<Sidhi />} />
        <Route path="/singrauli" element={<Singrauli />} />
        <Route path="/tikamgarh" element={<Tikamgarh />} />
        <Route path="/ujjain" element={<Ujjain />} />
        <Route path="/umaria" element={<Umaria />} />
        <Route path="/vidisha" element={<Vidisha />} />

        <Route
          path="/exportPromotionCouncil"
          element={<ExportPromotionCouncilsofIndia />}
        />
        <Route path="/acts" element={<Acts />} />
        <Route
          path="/publicSectorUndertaking"
          element={<PublicSectorUndertaking />}
        />
        <Route path="/commodityBoards" element={<CommodityBoards />} />
        <Route path="/otherOrganisations" element={<OtherOrganisations />} />
        <Route
          path="/internationalTradeBodies"
          element={<InternationalTradeBodies />}
        />
        <Route
          path="/reachBusinessCounterparts/businessDirectories"
          element={<BusinessDirectories />}
        />
        <Route
          path="/analyzeMarketTrend/importExportFLows"
          element={<ImportExportFlows />}
        />
        <Route
          path="/analyzeMarketTrend/marketReport"
          element={<MarketReport />}
        />
        <Route
          path="/analyzeMarketTrend/findExporters"
          element={<ExportersList />}
        />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/helpLine" element={<HelpLine />} />
        <Route path="/grievanceRedressal" element={<GrievanceRedressal />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mediacoverage" element={<MediaCoverage />} />
        <Route path="/helpUs" element={<HelpUs />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/objective" element={<Objective />} />
        <Route path="/formation" element={<Formation />} />
        <Route
          path="/tradeFinance/bankingSolution"
          element={<BankingSolution />}
        />
        <Route
          path="/tradeFinance/creditInsurance"
          element={<CreditInsurance />}
        />
        <Route path="/tradeFinance/incoterms" element={<Incoterms />} />
        <Route
          path="/reachBusinessCounterparts/publicTenders"
          element={<PublicTenders />}
        />
        <Route
          path="/reachBusinessCounterparts/blacklistCompanies"
          element={<BlacklistCompanies />}
        />
        <Route
          path="/reachBusinessCounterparts/businessDirectoriesCountry"
          element={<BusinessDirectoriesCountry />}
        />
        <Route
          path="/reachBusinessCounterparts/businessDirectoriesCity"
          element={<BusinessDirectoriesCity />}
        />
        <Route
          path="/reachBusinessCounterparts/businessDirectoriesCompany"
          element={<BusinessDirectoriesCompany />}
        />
        <Route
          path="/reachBusinessCounterparts/tradeShows"
          element={<TradeShows />}
        />
        <Route
          path="/reachBusinessCounterparts/marketInfo"
          element={<MarketInfo />}
        />
        <Route
          path="/manageShipments/importControl"
          element={<ImportControls />}
        />
        <Route
          path="/manageShipments/exportControl"
          element={<ExportControl />}
        />
        <Route
          path="/manageShipments/customDuties"
          element={<CustomDuties />}
        />
        <Route
          path="/manageShipments/tradeRemedies"
          element={<TradeRemedies />}
        />
        <Route
          path="/manageShipments/regulatoryRequirements"
          element={<RegulatoryRequirements />}
        />
        <Route
          path="/manageShipments/exportPriceCalculator"
          element={<ExportPriceCalculator />}
        />
        <Route
          path="/manageShipments/measurementCalculator"
          element={<MeasurementCalculator />}
        />
        <Route path="/manageShipments/labellingRules" element={<LabellingRules />} />

        <Route path="/standard" element={<Standard />}  
        />
        <Route path="/fAQ" element={<FAQ />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/nationalScheme" element={<NationalScheme />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/mpSchemes" element={<MpSchemes />} />
        {/* <Route path="/operatingBusiness" element={<OperatingBusiness/>}/> */}
        

      </Routes>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;

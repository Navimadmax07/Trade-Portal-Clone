import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="row" id="footer">
      <div className="col-lg-10 offset-1">
        <div className="row">
          <div className="col-lg-4">
            <h3>Assistance</h3>
            <ul>
              <li>
                <a style={{cursor:"pointer"}} onClick={() => navigate("contactUs")}>
                  Contact Us
                </a>
              </li>
              <li>
                <a style={{cursor:"pointer"}} onClick={() => navigate("Calendar")}>
                  Event Calendar
                </a>
              </li>
              <li>
                <a style={{cursor:"pointer"}} onClick={() => navigate("Gallery")}>
                  Gallery
                </a>
              </li>
              <li>
                <a style={{cursor:"pointer"}} onClick={() => navigate("MediaCoverage")}>
                  Coverage in Media
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Trade Compliance</h3>
            <ul>
              <li>
                <a style={{cursor:"pointer"}} onClick={() => navigate("HelpUs")}>
                  Help
                </a>
              </li>
              <li>
                <a style={{cursor:"pointer"}} onClick={() => navigate("/searchPage")}>Search</a>
              </li>
              <li>
                <a style={{cursor:"pointer"}} onClick={() => navigate("/sitemap")}>Sitemap</a>
              </li>
              <li>
                <a style={{cursor:"pointer"}} onClick={() => navigate("/privacyPolicy")}>
                  Data Privacy
                </a>
              </li>
              <li>
                <a style={{cursor:"pointer"}} onClick={() => navigate("/termsAndConditions")}>
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>About Us</h3>
            <p className="text-justify">
              The MP Trade Portal is an initiative of the Department of
              Industrial Policy and Investment Promotion, GoMP and is developed
              and maintained by MP Industrial Development Corporation.
            </p>
          </div>
        </div>

        <div className="col-lg-12">
          <p>&copy; MP Trade Portal. 2024</p>
          <hr />
          <p className="text-justify">
            MP Trade Portal and the logo are registered trademarks. All rights
            reserved. MP Trade Portal offers a set-content, database and tools
            provided and managed by Incubation Masters.
          </p>
          <p>
            Developed by MP Industrial Development Corporation (MPIDC) | Powered
            by Incubation Masters
          </p>
        </div>

        <div className="col-lg-12 text-center pt-1">
          <p>Last reviewed and updated on 24 April, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

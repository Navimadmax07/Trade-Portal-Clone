// 

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaLanguage } from "react-icons/fa";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const InfoSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Load Google Translate script once
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src ="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  // Manually trigger language switch (optional)
  const switchLanguage = (lang) => {
    const frame = document.querySelector("iframe.goog-te-menu-frame");
    if (frame) {
      const innerDoc = frame.contentDocument || frame.contentWindow.document;
      const langLinks = innerDoc.querySelectorAll("a.goog-te-menu2-item");
      langLinks.forEach((el) => {
        if (el.innerText.toLowerCase().includes(lang)) el.click();
      });
    }
  };

  return (
    <div className="row" style={{ background: "#4b6cb7" }} id="top2">
      <div className="col-md-8 text-white p-2 text-center">
        <i className="fa fa-envelope text-white"></i>
        <a href="mailto:info@mptradeportal.org" className="text-white">
          info@mptradeportal.org
        </a>{" "}
        |<i className="fa fa-phone text-white"></i>
        <a
          href="https://mptradeportal.org/HelpLine"
          style={{ textDecoration: "none", color: "white" }}
        >
          Export/ODOP Helpline: +91-755-257-7145
        </a>{" "}
        |
        <a
          href="https://mptradeportal.org/Grievance_redressal"
          style={{ textDecoration: "none", color: "white" }}
        >
          ODOP/Grievance Redressal
        </a>
      </div>

      <div className="col-md-2 text-center">
        <a
          href="#"
          id="btnincfont"
          className="btn btn-warning btn-sm mb-1 mt-1"
        >
          A+
        </a>
        <a href="#" id="reset" className="btn btn-light btn-sm mb-1 mt-1 text-dark">
          A
        </a>
        <a
          href="#"
          id="btndecfont"
          className="btn btn-warning btn-sm mb-1 mt-1"
        >
          A-
        </a>
      </div>

      <div className="col-md-2 text-center">
        <div className="dropdown">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle className="btn" caret>
              <FaLanguage aria-hidden="true" /> Language
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => switchLanguage("english")}>
                <FaLanguage aria-hidden="true" /> English
              </DropdownItem>
              <DropdownItem onClick={() => switchLanguage("hindi")}>
                <FaLanguage aria-hidden="true" /> Hindi
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        {/* This div is required for Google Translate */}
        <div id="google_translate_element" style={{ display: "none" }}></div>
      </div>
    </div>
  );
};

export default InfoSection;

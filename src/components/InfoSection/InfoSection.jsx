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
  useEffect(() => {
    // Add Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    
    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { 
          pageLanguage: 'en',
          includedLanguages: 'en,hi',
          autoDisplay: false
        }, 
        'google_translate_element'
      );
    };
    
    // Add script to document
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  const switchLanguage = (lang) => {
    if (!window.google || !window.google.translate) {
      console.error('Google Translate not loaded yet');
      return;
    }

    // Get the current cookie
    const googleTranslateCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('googtrans='));
    
    // Function to set cookie
    const setCookie = (value) => {
      document.cookie = `googtrans=${value}`;
      document.cookie = `googtrans=${value};domain=.${window.location.hostname}`;
      document.cookie = `googtrans=${value};domain=${window.location.hostname}`;
    };

    // Clear existing cookies
    setCookie('');
    
    // Set new language
    const langPath = lang.toLowerCase() === 'hindi' ? '/en/hi' : '/hi/en';
    setCookie(langPath);
    
    // Reload the translator
    try {
      const iframe = document.getElementsByClassName('goog-te-banner-frame')[0];
      if (iframe) {
        iframe.contentWindow.location.reload();
      }
      window.location.reload();
    } catch (error) {
      console.error('Error switching language:', error);
    }
  };

  return (
    <div className="row" style={{ background: "#4b6cb7" }} id="top2">
      <div className="col-md-8 text-white p-2 text-center">
        <i className="fa fa-envelope text-white"></i>
        <a href="mailto:info@mptradeportal.org" className="text-white">
           {" "}info@mptradeportal.org
        </a>{" "}
        |<i className="fa fa-phone text-white"></i>
        <a
          href="https://mptradeportal.org/HelpLine"
          style={{ textDecoration: "none", color: "white" }}
        >
         {" "} Export/ODOP Helpline: +91-755-257-7145
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

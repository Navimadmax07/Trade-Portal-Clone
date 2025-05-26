import React from "react";
import {
  LegalForms,
  BusinessSetup,
  WorkingConditions,
  LaborCosts,
  SocialSecurity,
  HRManagement,
} from "./sections";

const CountryData = () => {
  return (
    <div className="country-data mt-4">
      <h3 className="text-center mb-4">CHINA</h3>

      <LegalForms />
      <BusinessSetup />
      <WorkingConditions />
      <LaborCosts />
      <SocialSecurity />
      <HRManagement />
    </div>
  );
};

export default CountryData;

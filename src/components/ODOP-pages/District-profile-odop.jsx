import React from "react";
import ODOPMap from "./ODOPMap";
import StateNodalOfficers from "./StateNodalOfficers";
import DistrictProductList from "./DistrictProductList";

const DistrictProfileOdop = () => {
  return (
    <div className="container">
      <ODOPMap />
      <StateNodalOfficers />
      <DistrictProductList />
    </div>
  );
};

export default DistrictProfileOdop;

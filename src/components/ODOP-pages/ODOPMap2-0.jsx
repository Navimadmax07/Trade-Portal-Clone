import ODOPMap2p1 from "./ODOPMap2-1";
import ODOPMap2p2 from "./ODOPMap2-2";
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const ODOPMap2 = () => {
  return (
    <ErrorBoundary>
      <ODOPMap2p1 />
      <ODOPMap2p2 />
    </ErrorBoundary>
  );
};

export default ODOPMap2;

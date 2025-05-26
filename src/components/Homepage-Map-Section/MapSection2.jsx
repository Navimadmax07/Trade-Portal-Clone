import MapSection2p1 from "./MapSection2-1";
import MapSection2p2 from "./MapSection2-2";
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const MapComponent2 = () => {
  return (
    <ErrorBoundary>
      <MapSection2p1 />
      <MapSection2p2 />
    </ErrorBoundary>
  );
};

export default MapComponent2;

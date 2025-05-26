import React from "react";
import ODOPMap1 from "./ODOPMap1";
import ODOPMap2 from "./ODOPMap2-0";
import ODOPMap3 from "./ODOPMap3";
import ErrorBoundary from "./ErrorBoundary";

const ODOPMap = () => {
  return (
    <div class="row" id="map">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="svg2704"
        width="100%"
        height="500"
        viewBox="0 0 1829.419 1186.8521"
        className="mp-map"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <ODOPMap1 />
        </defs>

        <ErrorBoundary>
          <g
            data-inkscape-groupmode="layer"
            id="layer4"
            data-inkscape-label="Background"
            style={{ display: "inline" }}
            transform="translate(-81.566262,-52.91634)"
          >
            <ODOPMap2 />
            <ODOPMap3 />
          </g>
        </ErrorBoundary>
      </svg>
    </div>
  );
};

export default ODOPMap;

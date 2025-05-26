import React from "react";
import MapComponent1 from "./MapSection1";
import MapComponent2 from "./MapSection2";
import MapComponent3 from "./MapSection3";
import ErrorBoundary from "./ErrorBoundary";

const HomepageMapSection = () => {
  return (
    <div class="row" id="map">
      <div class="col-lg-4 offset-lg-1 text-center">
        <h3> Interactive map of Madhya Pradesh</h3>
        <p class="p-3">
          Click any district and see what they export and other details.
        </p>
      </div>
      <div className="col-lg-6 text-center" id="mapoverflow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="svg2704"
          width="100%"
          height="500"
          viewBox="0 0 1829.419 1186.8521"
          className="mp-map"
        >
          <defs>
            <MapComponent1 />
          </defs>
          <sodipodi:namedview
            pagecolor="#ffffff"
            bordercolor="#666666"
            borderopacity="1"
            objecttolerance="10"
            gridtolerance="10"
            guidetolerance="10"
            inkscape:pageopacity="0"
            inkscape:pageshadow="2"
            inkscape:window-width="1920"
            inkscape:window-height="1001"
            id="namedview2706"
            showgrid="false"
            inkscape:zoom="0.55456776"
            inkscape:cx="841.40241"
            inkscape:cy="509.00084"
            inkscape:window-x="-9"
            inkscape:window-y="-9"
            inkscape:window-maximized="1"
            inkscape:current-layer="layer4"
            fit-margin-top="0"
            fit-margin-left="0"
            fit-margin-right="0"
            fit-margin-bottom="0"
            inkscape:document-rotation="0"
          />
          <ErrorBoundary>
            <g
              inkscape:groupmode="layer"
              id="layer4"
              inkscape:label="Background"
              style={{ display: "inline" }}
              transform="translate(-81.566262,-52.91634)"
            >
              <MapComponent2 />
              <MapComponent3 />
            </g>
          </ErrorBoundary>
        </svg>
      </div>
    </div>
  );
};

export default HomepageMapSection;

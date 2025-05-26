import React from "react";
import { useNavigate } from "react-router-dom";

const WebSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="row" id="content">
      <div className="col-md-12">
        <div
          id="demo"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval="15000"
        >
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
          </ul>

          {/* The slideshow */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/src/assets/img/slider/3.jpg" alt="slide 2" />
              <div className="carousel-caption"></div>
            </div>
            <div className="carousel-item">
              <img src="/src/assets/img/slider/3.jpg" alt="slide 2" />
              <div className="carousel-caption"></div>
            </div>
            <div className="carousel-item">
              <img src="/src/assets/img/slider/3.jpg" alt="slide 3" />
              <div className="carousel-caption"></div>
            </div>
          </div>

          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
      <div className="col-md-12 text-center">
        <h5 className="p-4 bg-light">
          <marquee
            direction="left"
            onMouseOver={(e) => e.target.stop()}
            onMouseOut={(e) => e.target.start()}
          >
            Exporters, Freight Forwarders, Custom House Agents, Farmers &amp;
            FPOs, Handloom &amp; Handicraft Entrepreneur, Startups, Industrial
            Units etc.
          </marquee>
        </h5>
      </div>

      {/* Market Tools Section */}
      <div className="container">
        <div className="row" id="six_boxes">
          <div className="col-md-12">
            <h3 className="text-center">Market Tools</h3>
          </div>

          <div className="services ml-4">
            <div className="single-service m-2">
              <a href="#" onClick={() => navigate("analyzeMarketTrend")}>
                <div className="service-icon">
                  <i className="fa fa-line-chart m-3 fa-2x"> </i>
                </div>
                <h4>Analyze Market Trends</h4>
              </a>
            </div>
            <div className="single-service m-2">
              <a href="#" onClick={() => navigate("reachBusinessCounterparts")}>
                <div className="service-icon">
                  <i className="fa fa-users m-3 fa-2x"> </i>
                </div>
                <h4> Reach Business Counterparts</h4>
              </a>
            </div>
            <div className="single-service m-2">
              <a href="#" onClick={() => navigate("manageShipments")}>
                <div className="service-icon">
                  <i className="fa fa-map-signs m-3 fa-2x"> </i>
                </div>
                <h4> Manage Shipments</h4>
              </a>
            </div>
            <div className="single-service m-2">
              <a href="#" onClick={() => navigate("tradeFinance")}>
                <div className="service-icon">
                  <i className="fa fa-money-bill m-3 fa-2x"> </i>
                </div>
                <h4>Trade Finance</h4>
              </a>
            </div>
            <div className="single-service m-2">
              <a href="#" onClick={() => navigate("establishOverseas")}>
                <div className="service-icon">
                  <i className="fa fa-building m-3 fa-2x"> </i>
                </div>
                <h4>Establish Overseas</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSlider;

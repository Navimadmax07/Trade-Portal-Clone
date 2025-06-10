import React from "react";
import { useNavigate } from "react-router-dom";

const WebSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="row" id="content">
      <div className="col-md-12">        <div
          id="demo"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="15000"
        >{/* Indicators */}          <ul className="carousel-indicators">
            <li data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
            <li data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></li>
            <li data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></li>
            <li data-bs-target="#demo" data-bs-slide-to="3" aria-label="Slide 4"></li>
          </ul>

          {/* The slideshow */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/src/assets/img/slider/3.jpg" alt="slide 2" />
              <div className="carousel-caption"></div>
            </div>
            <div className="carousel-item">
              <img src="/src/assets/img/slider/post 01 copy.jpg" alt="slide 2" />
              <div className="carousel-caption"></div>
            </div>
            <div className="carousel-item">
              <img src="/src/assets/img/slider/post 2 copy.jpg" alt="slide 3" />
              <div className="carousel-caption"></div>
            </div>
            <div className="carousel-item">
              <img src="/src/assets/img/slider/25.jpg" alt="slide 4" />
              <div className="carousel-caption"></div>
            </div>
          </div>          {/* Left and right controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
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
              <a  onClick={() => navigate("analyzeMarketTrend")}>
                <div className="service-icon">
                  <i className="fa fa-line-chart m-3 fa-2x"> </i>
                </div>
                <h4>Analyze Market Trends</h4>
              </a>
            </div>
            <div className="single-service m-2">
              <a  onClick={() => navigate("reachBusinessCounterparts")}>
                <div className="service-icon">
                  <i className="fa fa-users m-3 fa-2x"> </i>
                </div>
                <h4> Reach Business Counterparts</h4>
              </a>
            </div>
            <div className="single-service m-2">
              <a  onClick={() => navigate("manageShipments")}>
                <div className="service-icon">
                  <i className="fa fa-map-signs m-3 fa-2x"> </i>
                </div>
                <h4> Manage Shipments</h4>
              </a>
            </div>
            <div className="single-service m-2">
              <a  onClick={() => navigate("tradeFinance")}>
                <div className="service-icon">
                  <i className="fa fa-money-bill m-3 fa-2x"> </i>
                </div>
                <h4>Trade Finance</h4>
              </a>
            </div>
            <div className="single-service m-2">
              <a  onClick={() => navigate("establishOverseas")}>
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

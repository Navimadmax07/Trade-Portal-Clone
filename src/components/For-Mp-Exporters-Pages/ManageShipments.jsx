import React from "react";
import { Link } from "react-router-dom";
import ShipmentsMenu from "./ShipmentsMenu";
import { useNavigate } from "react-router-dom";

const ManageShipments = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3" id="sidemenu">
              <a
                href="#"
                className="btn btn-light mb-3"
                onClick={() => navigate("/manageShipments")}
              >
                <i
                  className="fa fa-chevron-circle-left fa-2x"
                  aria-hidden="true"
                ></i>
              </a>
              <ShipmentsMenu />
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body text-center">
                      <h2>Manage Shipments</h2>
                      <p>
                        Optimize customs procedures, costs and trade compliance
                        for your international shipping.
                      </p>

                      <div className="col-md-4 mx-auto">
                        <img
                          src="/src/assets/shipment.jpg"
                          className="img-fluid"
                          alt="Shipment Management"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageShipments;

import React from "react";
import { useNavigate } from "react-router-dom";

const boards = [
  {
    id: "p1",
    header:
      "Agricultural & Processed Food Products Export Development Authority (APEDA)",
    img: "/src/assets/img/commodity_board/1.jpg",
    name: "Agricultural & Processed Food Products Export Development Authority (APEDA)",
    address:
      "NCUI Building 3, Siri Institutional Area, August Kranti Marg, New Delhi-110016",
    phone: "91-11-26513204, 26514572, 26534186",
    fax: "91-11-26526187",
    email: null,
  },
  {
    id: "p2",
    header: "Coconut Development Board",
    img: "/src/assets/img/commodity_board/2.jpg",
    name: "Coconut Development Board",
    address: "P.B. No.1021, Kera Bhavan, Near SRV High School, Kochi– 682011",
    phone: "0484-2376265, 2377267, 2377266, 2376553",
    fax: "91 484-2377902",
    email: null,
  },
  {
    id: "p3",
    header: "Coffee Board",
    img: "/src/assets/img/commodity_board/3.jpg",
    name: "Coffee Board",
    address: "1-Dr. B.R. Ambedkar Veedhi, Bangalore-560001",
    phone: "(91) 80-257890",
    fax: "(91) 80-2255557",
    email: "info@cepc.co.in",
  },
  {
    id: "p4",
    header: "Coir Board",
    img: "/src/assets/img/commodity_board/4.jpg",
    name: "Coir Board",
    address: '"Coir House", M.G. Road, Kochi 682 016',
    phone: "+91-484-2351807/2351788/2351954",
    fax: "+91-484-2370034/2354397",
    email: "coirboard@vsnl.com, coirboard@vsnl.net.in",
  },
  {
    id: "p5",
    header: "Rubber Board",
    img: "/src/assets/img/commodity_board/5.jpg",
    name: "Rubber Board",
    address: "Sub-Jail Road, P.B. No. 1122, Kottayam, Kerala-686002",
    phone: "(91) 481-2301231",
    fax: "(91) 481-2571380",
    email: null,
  },
  {
    id: "p6",
    header: "Spices Board",
    img: "/src/assets/img/commodity_board/6.jpg",
    name: "Spices Board",
    address: "Sugandha Bhavan, P.B. No. 2277, Palarivattom P.O., Cochin-682025",
    phone: "(91) 484-2333610 to 2333616 (7 Lines)",
    fax: "(91) 484-2334429, 2331429",
    email: null,
  },
  {
    id: "p7",
    header: "Tea Board",
    img: "/src/assets/img/commodity_board/7.gif",
    name: "Tea Board",
    address: "14, BTM Sarani, Brabourne Road, P.B. No. 2172, Kolkata-700001",
    phone: "(91) 33-2251411",
    fax: "(91) 33-2251417",
    email: null,
  },
  {
    id: "p8",
    header: "The Marine Products Export Development Authority (MPEDA)",
    img: "/src/assets/img/commodity_board/8.gif",
    name: "The Marine Products Export Development Authority (MPEDA)",
    address: "MPEDA House, Panampilly Avenue, Cochin-682 036",
    phone: "+91 484 2311979",
    fax: "+91 484 2313361",
    email: "mpeda@mpeda.nic.in",
  },
  {
    id: "p9",
    header: "Tobacco Board",
    img: "/src/assets/img/commodity_board/9.jpg",
    name: "Tobacco Board",
    address: "P.B. No. 322, G.T. Road, Guntur-522004",
    phone:
      "(91) 0863-2358399, 238499, 2327550, 2358531, 2358532, 2327555, 2327554, 2327556",
    fax: "(91) 0863-2354232",
    email: "info@indiantobacco.com",
  },
];

const CommodityBoards = () => {
  const navigate = useNavigate();
  return (
    <div className="container" id="innerpage">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center font-weight-bold mt-5 text-uppercase">
            Commodity Boards of India
          </h3>
          <div className="col-md-12" id="accordionExample">
            {boards.map((board, idx) => (
              <div className="card" key={board.id}>
                <div className="card-header" id={`head${idx + 1}`}>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left text-dark"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#${board.id}`}
                      aria-expanded="true"
                      aria-controls={board.id}
                    >
                      {board.header}
                    </button>
                  </h2>
                </div>
                <div
                  id={board.id}
                  className="collapse show"
                  aria-labelledby={`head${idx + 1}`}
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={board.img}
                          className="img-fluid"
                          alt={board.name}
                        />
                      </div>
                      <div className="col-md-6">
                        <h4>{board.name}</h4>
                        <p className="d-flex">
                          <i className="fa fa-building d-flex pr-3 pt-2"></i>{" "}
                          {board.address}
                        </p>
                        <p className="d-flex">
                          <i className="fa fa-phone d-flex pr-3 pt-2"></i>{" "}
                          {board.phone}
                        </p>
                        <p className="d-flex">
                          <i className="fa fa-print d-flex pr-3 pt-2"></i>{" "}
                          {board.fax}
                        </p>
                        {board.email && (
                          <p className="d-flex">
                            <i className="fa fa-envelope d-flex pr-3 pt-1"></i>{" "}
                            {board.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommodityBoards;

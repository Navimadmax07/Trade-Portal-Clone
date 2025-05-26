import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Modal } from "react-bootstrap";
import AnalyzeMenu from "../AnalyzeMenu";
// import { useNavigate } from "react-router-dom";

const ExportersList = () => {
  const navigate = useNavigate();
  const [searchBy, setSearchBy] = useState("name");
  const [searchExp, setSearchExp] = useState("");
  const [exporters, setExporters] = useState([]);
  const [modalExporter, setModalExporter] = useState(null);
  const [paginationLinks, setPaginationLinks] = useState(null);

  const fetchExporters = async (page = 1) => {
    try {
      const res = await axios.post(`/Client/Exporters/SearchExporter/${page}`, {
        search: searchBy,
        search_exp: searchExp,
      });
      setExporters(res.data.docs || []);
      setPaginationLinks(res.data.links || null);
    } catch (err) {
      console.error("Error fetching exporters", err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchExporters();
  };

  const handleSchedule = async (id) => {
    try {
      await axios.post(`/Client/Exporters/scheduleMeeting/${id}`);
      alert("Meeting Scheduled");
      setModalExporter(null);
    } catch (err) {
      console.error("Error scheduling meeting", err);
    }
  };

  useEffect(() => {
    fetchExporters();
  }, []);

  return (
    <div className="container mt-5">
      <div className="bg-light">
        <div className="p-3 flex items-center gap-4">
          {/* <Button variant="outline" href="/Client/Dashboard"> */}
          <i
            onClick={() => navigate("/analyzeMarketTrend")}
            className="fa fa-chevron-circle-left fa-2x"
            aria-hidden="true"
          ></i>
          {/* </Button> */}

          <h4 className="text-center flex-grow">
            List of Madhya Pradesh Exporters
          </h4>
        </div>
        {/* <AnalyzeMenu /> */}
        <div className="p-4">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex items-center gap-6 mb-3">
              <label>
                <input
                  type="radio"
                  name="search"
                  value="name"
                  checked={searchBy === "name"}
                  onChange={() => setSearchBy("name")}
                />{" "}
                Search By Company Name
              </label>
              <label>
                <input
                  type="radio"
                  name="search"
                  value="product"
                  checked={searchBy === "product"}
                  onChange={() => setSearchBy("product")}
                />{" "}
                Search By Product Category
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search by Company Name / Product Category"
                value={searchExp}
                onChange={(e) => setSearchExp(e.target.value)}
                required
              />
              <button type="submit" variant="destructive">
                Search Now
              </button>
            </div>
          </form>

          <div className="overflow-auto">
            <table className="table table-hover table-bordered w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>HS Code</th>
                  <th>Address</th>
                  <th>Fax</th>
                  <th>Email</th>
                  <th>Contact Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {exporters.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No Record Found
                    </td>
                  </tr>
                ) : (
                  exporters.map((f) => (
                    <tr key={f._id}>
                      <td>{f.name}</td>
                      <td>{f.hs_code}</td>
                      <td>{f.address}</td>
                      <td>{f.fax}</td>
                      <td>{f.email}</td>
                      <td>{f.contact_name}</td>
                      <td>
                        <i
                          className="fa fa-handshake-o cursor-pointer"
                          title="Schedule Meeting"
                          onClick={() => setModalExporter(f)}
                        ></i>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {paginationLinks && (
            <div className="mt-4 text-center">{paginationLinks}</div>
          )}
        </div>
      </div>

      {/* Schedule Meeting Modal */}
      <Modal
        show={modalExporter !== null}
        onHide={() => setModalExporter(null)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Schedule Meeting</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "antiquewhite" }}>
          {modalExporter && (
            <>
              <p>
                You are going to schedule a meeting with <br />
                <strong>
                  {modalExporter.name || modalExporter.company_name}
                </strong>
              </p>
              <Button
                onClick={() => handleSchedule(modalExporter._id)}
                variant="success"
              >
                Schedule
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExportersList;

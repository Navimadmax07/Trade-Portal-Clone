import React, { useState, useEffect } from "react";
import axios from "axios";

const BankList = ({ onSelectBank }) => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          "http://api.mptradeportal.org/list/banks"
        );
        setBanks(response.data.docs);
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };
    fetchBanks();
  }, []);

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-credit-card" aria-hidden="true" />
              </span>
            </div>
            <select
              className="form-control"
              onChange={(e) => {
                const selectedBank = banks.find(
                  (bank) => bank.uid === e.target.value
                );
                if (selectedBank) {
                  onSelectBank(selectedBank);
                }
              }}
              required
            >
              <option value="" disabled selected>
                Select Bank
              </option>
              {banks.map((bank) => (
                <option key={bank.uid} value={bank.uid}>
                  {bank.bank_name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankList;

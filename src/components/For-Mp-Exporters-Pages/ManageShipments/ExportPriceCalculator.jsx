import React, { useState } from "react";
import ShipmentsMenu from "../ShipmentsMenu";

const initialState = {
  r1_value: "",
  r2_value: "",
  r3_value: "",
  r4_value: "",
  r5_value: "",
  r6_value: "",
  r7_value: "",
  r8_value: "",
  r9_value: "",
  r10_value: "",
  r11_value: "",
  r12_value: "",
  r13_value: "",
  r14_value: "",
  r10_percent: "",
  r11_percent: "",
};

function floatToString(val) {
  if (val === "" || isNaN(val)) return "";
  return parseFloat(val).toFixed(2);
}

const ExportPriceCalculator = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = (e) => {
    e.preventDefault();
    setValues(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      r1_value,
      r2_value,
      r3_value,
      r4_value,
      r6_value,
      r7_value,
      r9_value,
      r10_percent,
      r11_percent,
      r12_value,
      r13_value,
    } = values;

    const r5_value =
      parseFloat(r1_value || 0) +
      parseFloat(r2_value || 0) +
      parseFloat(r3_value || 0) +
      parseFloat(r4_value || 0);

    const r8_value =
      parseFloat(r5_value || 0) +
      parseFloat(r6_value || 0) +
      parseFloat(r7_value || 0);

    const r10_value =
      (parseFloat(r10_percent || 0) * parseFloat(r8_value || 0)) / 100;

    const r11_value =
      (parseFloat(r11_percent || 0) * parseFloat(r8_value || 0)) / 100;

    const r14_value =
      parseFloat(r8_value || 0) +
      parseFloat(r9_value || 0) +
      parseFloat(r10_value || 0) +
      parseFloat(r11_value || 0) +
      parseFloat(r12_value || 0) +
      parseFloat(r13_value || 0);

    setValues((prev) => ({
      ...prev,
      r5_value: floatToString(r5_value),
      r8_value: floatToString(r8_value),
      r10_value: floatToString(r10_value),
      r11_value: floatToString(r11_value),
      r14_value: floatToString(r14_value),
    }));
  };

  return (
    <div className="container-fluid" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3 pt-3" id="sidemenu">
              <a href="/manageShipments" className="btn btn-default">
                <i
                  className="fa fa-chevron-circle-left fa-2x"
                  aria-hidden="true"
                ></i>
              </a>
              <ShipmentsMenu />
            </div>
            <div className="col-md-9 pt-3">
              <div className="card">
                <div className="card-body">
                  <span style={{ display: "inline-flex" }}>
                    <h3>Export Price Calculator</h3>
                  </span>
                  <p>
                    This calculation sheet helps you to calculate an export
                    price in your own currency. Fill in the cells on the
                    spreadsheet and you can calculate your selling prices based
                    on incoterms chosen. You can also build estimates of your
                    distributors' margins and determine the approximate export
                    selling price of your products.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th width="70%">Type of expenses</th>
                          <th width="13%" colSpan={2}>
                            Values
                          </th>
                          <th width="17%">Incoterm</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Values of the goods (loaded on leaving the factory)
                          </td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r1_value"
                              value={values.r1_value}
                              onChange={handleChange}
                              style={{ width: 60 }}
                            />
                          </td>
                          <td>From the factory (EXW)</td>
                        </tr>
                        <tr>
                          <td>
                            Cost of handling carriage before (from the factory
                            to the port or to the airport)
                          </td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r2_value"
                              value={values.r2_value}
                              onChange={handleChange}
                              style={{ width: 60 }}
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Fixed cost of export Customs formalities</td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r3_value"
                              value={values.r3_value}
                              onChange={handleChange}
                              style={{ width: 60 }}
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            Handling costs (loading onto the airplane, vessel or
                            the truck in the case of groupage) in orginating
                            terminal
                          </td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r4_value"
                              value={values.r4_value}
                              onChange={handleChange}
                              style={{ width: 60 }}
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Free on board / Free Carrier</td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r5_value"
                              value={values.r5_value}
                              style={{ width: 60 }}
                              disabled
                            />
                          </td>
                          <td>FOB / FAC</td>
                        </tr>
                        <tr>
                          <td>
                            Total cost of the main transport (by air, sea or
                            Land)
                          </td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r6_value"
                              value={values.r6_value}
                              onChange={handleChange}
                              style={{ width: 60 }}
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Cost of the insurance for the main transport*</td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r7_value"
                              value={values.r7_value}
                              onChange={handleChange}
                              style={{ width: 60 }}
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Cost of the Insurance and Freight</td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r8_value"
                              value={values.r8_value}
                              style={{ width: 60 }}
                              disabled
                            />
                          </td>
                          <td>CIF</td>
                        </tr>
                        <tr>
                          <td>
                            Cost of handling on arrival at the (air)port or
                            bulk-breaking plateform
                          </td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r9_value"
                              value={values.r9_value}
                              onChange={handleChange}
                              style={{ width: 60 }}
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Customs duties</td>
                          <td>
                            <span style={{ display: "flex" }}>
                              <input
                                type="text"
                                name="r10_percent"
                                value={values.r10_percent}
                                onChange={handleChange}
                                style={{ width: 30 }}
                              />
                              &nbsp;%
                            </span>
                          </td>
                          <td>
                            <input
                              type="text"
                              name="r10_value"
                              value={values.r10_value}
                              style={{ width: 60 }}
                              disabled
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Import taxes</td>
                          <td>
                            <span style={{ display: "flex" }}>
                              <input
                                type="text"
                                name="r11_percent"
                                value={values.r11_percent}
                                onChange={handleChange}
                                style={{ width: 30 }}
                              />
                              &nbsp;%
                            </span>
                          </td>
                          <td>
                            <input
                              type="text"
                              name="r11_value"
                              value={values.r11_value}
                              style={{ width: 60 }}
                              disabled
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            Cost of import Customs formalities (flat rate)
                          </td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r12_value"
                              value={values.r12_value}
                              onChange={handleChange}
                              style={{ width: 60 }}
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>
                            Cost of carriage after (from the port(airport) to
                            the buyer)
                          </td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r13_value"
                              value={values.r13_value}
                              onChange={handleChange}
                              style={{ width: 60 }}
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Delivered Duty Paid</td>
                          <td></td>
                          <td>
                            <input
                              type="text"
                              name="r14_value"
                              value={values.r14_value}
                              style={{ width: 60 }}
                              disabled
                            />
                          </td>
                          <td>DDP</td>
                        </tr>
                        <tr>
                          <td>
                            * <i>based on CIF value</i>
                          </td>
                          <td colSpan={2}>
                            <span style={{ display: "flex" }}>
                              <input
                                type="submit"
                                className="btn btn-danger"
                                style={{ fontSize: 13 }}
                                value="CALCULATE"
                              />
                              &nbsp;
                              <button
                                type="button"
                                title="Clear"
                                className="btn btn-primary"
                                onClick={handleClear}
                              >
                                <i
                                  className="fa fa-refresh"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </span>
                          </td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportPriceCalculator;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CurrencyAnalysis = () => {
  // const [currency, setCurrency] = useState({ symbols: {} });
  // const [form, setForm] = useState({
  //   from_currency: "",
  //   from_value: "",
  //   to_currency: "",
  // });
  // const [result, setResult] = useState(null);

  // // Fetch currency symbols on mount
  // useEffect(() => {
  //   fetch("http://api.mptradeportal.org/currency")
  //     .then((res) => res.json())
  //     .then((data) => setCurrency(data))
  //     .catch(() => setCurrency({ symbols: {} }));
  // }, []);

  // // Handle form input changes
  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // // Handle form submit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Example API endpoint for conversion (replace with actual if needed)
  //   const url = `https://api.exchangerate.host/convert?from=${form.from_currency}&to=${form.to_currency}&amount=${form.from_value}`;
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setResult({
  //     fromCurrency: form.from_currency,
  //     fromValue: form.from_value,
  //     toCurrency: form.to_currency,
  //     toValue: data.result,
  //   });
  // };

  // return (
  //   <div className="container" id="innerpage">
  //     <div className="row" id="dashboard">
  //       <div className="col-md-12 pt-3">
  //         <h3 className="text-center font-weight-bold mt-5 text-uppercase">
  //           Currency Converter
  //         </h3>
  //         <hr />
  //       </div>
  //       <div className="col-md-12 pt-3">
  //         <div className="row">
  //           <div className="col-md-4">
  //             <div className="card bg-light">
  //               <div className="card-header">
  //                 <h3 className="card-title">Currency Converter</h3>
  //               </div>
  //               <div className="card-body">
  //                 <form onSubmit={handleSubmit}>
  //                   <div className="form-group">
  //                     <label>From Currency</label>
  //                     <select
  //                       className="form-control"
  //                       name="from_currency"
  //                       value={form.from_currency}
  //                       onChange={handleChange}
  //                       required
  //                     >
  //                       <option value="">Select Currency</option>
  //                       {Object.entries(currency.symbols).map(
  //                         ([key, value]) => (
  //                           <option key={key} value={key}>
  //                             {key} - {value}
  //                           </option>
  //                         )
  //                       )}
  //                     </select>
  //                   </div>
  //                   <div className="form-group">
  //                     <label>Amount</label>
  //                     <input
  //                       type="number"
  //                       className="form-control"
  //                       name="from_value"
  //                       value={form.from_value}
  //                       onChange={handleChange}
  //                       required
  //                     />
  //                   </div>
  //                   <div className="form-group">
  //                     <label>To Currency</label>
  //                     <select
  //                       className="form-control"
  //                       name="to_currency"
  //                       value={form.to_currency}
  //                       onChange={handleChange}
  //                       required
  //                     >
  //                       <option value="">Select Currency</option>
  //                       {Object.entries(currency.symbols).map(
  //                         ([key, value]) => (
  //                           <option key={key} value={key}>
  //                             {key} - {value}
  //                           </option>
  //                         )
  //                       )}
  //                     </select>
  //                   </div>
  //                   <div className="form-group">
  //                     <input
  //                       type="submit"
  //                       className="btn btn-success"
  //                       value="Convert"
  //                     />
  //                   </div>
  //                 </form>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="col-md-8">
  //             <div className="card bg-light">
  //               <div className="card-body table-responsive">
  //                 <h5 className="card-title">Result</h5>
  //                 <table className="table table-bordered">
  //                   <thead>
  //                     <tr>
  //                       <th>From Currency</th>
  //                       <th>Value</th>
  //                       <th>=</th>
  //                       <th>To Currency</th>
  //                       <th>Value</th>
  //                     </tr>
  //                   </thead>
  //                   <tbody>
  //                     {result && (
  //                       <tr>
  //                         <td>{result.fromCurrency}</td>
  //                         <td>{result.fromValue}</td>
  //                         <td>=</td>
  //                         <td>{result.toCurrency}</td>
  //                         <td>{result.toValue}</td>
  //                       </tr>
  //                     )}
  //                   </tbody>
  //                 </table>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  const [currencies, setCurrencies] = useState({});
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [conversionResult, setConversionResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch currencies when component mounts
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("http://api.mptradeportal.org/currency");
        const data = await response.json();
        setCurrencies(data.symbols || {});
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleConvert = async (e) => {
    e.preventDefault();
    if (!fromCurrency || !toCurrency || !fromValue) return;

    setLoading(true);
    try {
      // In a real app, you would call your conversion API here
      // This is just a mock implementation
      const mockRate = 0.85; // Example conversion rate
      const convertedValue = parseFloat(fromValue) * mockRate;

      setConversionResult({
        fromCurrency,
        fromValue,
        toCurrency,
        toValue: convertedValue.toFixed(2),
      });
    } catch (error) {
      console.error("Conversion error:", error);
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="container" id="innerpage">
      <div className="row" id="dashboard">
        <div className="col-md-12 pt-3">
          
          <h3 className="text-center font-weight-bold mt-5 text-uppercase">
            Currency Converter
          </h3>
          <a onClick={() => navigate("/")} className="btn btn-default">
            <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i>{" "}
          </a>
          <hr />
        </div>

        <div className="col-md-12 pt-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card bg-light">
                <div className="card-header">
                  <h3 className="card-title">Currency Converter</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleConvert}>
                    <div className="form-group">
                      <label>From Currency</label>
                      <select
                        className="form-control"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        required
                      >
                        <option value="">Select Currency</option>
                        {Object.entries(currencies).map(([key, value]) => (
                          <option key={key} value={key}>
                            {key} - {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Amount</label>
                      <input
                        type="number"
                        className="form-control"
                        value={fromValue}
                        onChange={(e) => setFromValue(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>To Currency</label>
                      <select
                        className="form-control"
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        required
                      >
                        <option value="">Select Currency</option>
                        {Object.entries(currencies).map(([key, value]) => (
                          <option key={key} value={key}>
                            {key} - {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-success"
                        disabled={loading}
                      >
                        {loading ? "Converting..." : "Convert"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card bg-light">
                <div className="card-body table-responsive">
                  <h5 className="card-title">Result</h5>
                  {conversionResult && (
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>From Currency</th>
                          <th>Value</th>
                          <th>=</th>
                          <th>To Currency</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{conversionResult.fromCurrency}</td>
                          <td>{conversionResult.fromValue}</td>
                          <td>=</td>
                          <td>{conversionResult.toCurrency}</td>
                          <td>{conversionResult.toValue}</td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyAnalysis;

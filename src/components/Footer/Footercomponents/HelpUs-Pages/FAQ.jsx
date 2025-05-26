import React, { useState } from "react";

const FAQ = ({ faqs = [] }) => {
  const [form, setForm] = useState({ question: "", answer: "", segment: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic (e.g., API call)
    alert("FAQ saved! (Implement backend call)");
    setForm({ question: "", answer: "", segment: "" });
  };

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card bg-light">
          <div className="card-header">
            <h3 className="card-title">Add FAQ</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Question</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write question"
                  name="question"
                  value={form.question}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Answer</label>
                <textarea
                  className="form-control"
                  name="answer"
                  value={form.answer}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Segment</label>
                <input
                  type="text"
                  className="form-control"
                  name="segment"
                  value={form.segment}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-success" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card bg-light">
          <div className="card-header">
            <h3 className="card-title">List of FAQ's</h3>
          </div>
          <div className="card-body">
            <table id="order-listing" className="table">
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {faqs.map((f, idx) => (
                  <tr key={f.faq_id || idx}>
                    <td>{idx + 1}</td>
                    <td>{f.question}</td>
                    <td>{f.answer}</td>
                    <td>
                      <button className="btn btn-outline-danger" onClick={() => alert("Delete functionality not implemented")}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

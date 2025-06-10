import React, { useState } from 'react';


const GrievanceRedressal = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    contact: '',
    email: '',
    address: '',
    location: '',
    district: '',
    services: '',
    issue: '',
    identy: false,
    description: ''
  });

  const districts = [
    "Anuppur", "Dhar", "Indore", "Khargone", "Barwani", "Jhabua", "Alirajpur", 
    "Khandwa", "Burhanpur", "Neemuch", "Mandsaur", "Ratlam", "Ujjain", "Shajapur", 
    "Dewas", "Agar Malwa", "Gwalior", "Datia", "Shivpuri", "Guna", "Ashoknagar", 
    "Sheopur", "Morena", "Bhind", "Satna", "Rewa", "Sidhi", "Singrauli", "Umaria", 
    "Shahdol", "Tikamgarh", "Chhatarpur", "Panna", "Sagar", "Damoh", "Rajgarh", 
    "Vidisha", "Bhopal", "Sehore", "Raisen", "Betul", "Harda", "Hoshangabad", 
    "Katni", "Jabalpur", "Narsinghpur", "Dindori", "Mandla", "Chhindwara", 
    "Seoni", "Balaghat", "Niwari"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Replace with actual API call
    // axios.post('/Grievance_redressal/send', formData)
    //   .then(response => { ... })
    //   .catch(error => { ... });
  };

  return (
    <>
      
      <div className="container">
        <div className="card my-4">
          <div className="card-header">
            <h3 className="card-title text-center text-uppercase">
              <i className="fa fa-address-card"></i> Grievance Redressal
            </h3>
            <span className="pull-right panelcollaps">
              <i className="glyphicon glyphicon-chevron-up"></i>
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="row">                
                <div className="col-md-12">
                  <div className="portlet box noshadow">
                    <div className="portlet-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group"> 
                            <label>Applicant Name</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              required 
                              name="name" 
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Applicant Name" 
                            />
                          </div>
                        </div> 
                        <div className="col-md-6">
                          <div className="form-group"> 
                            <label>Name of the organization</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              required 
                              name="organization" 
                              value={formData.organization}
                              onChange={handleChange}
                              placeholder="Name of the organization" 
                            />
                          </div>                                        
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <label>Mobile Number</label>
                          <input 
                            type="text" 
                            name="contact" 
                            required 
                            className="form-control" 
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Mobile Number" 
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Email Id</label>
                          <input 
                            type="email" 
                            name="email" 
                            required 
                            className="form-control" 
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Id" 
                          />
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <label>Address</label>
                          <textarea 
                            className="form-control" 
                            required 
                            name="address" 
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                          ></textarea>
                        </div>
                        <div className="col-md-6">
                          <label>Project Location</label>
                          <textarea 
                            className="form-control" 
                            required 
                            name="location" 
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Project Location"
                          ></textarea>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group"> 
                            <label className="control-label" htmlFor="grievance-district_id">District</label>
                            <select  
                              className="form-control" 
                              name="district" 
                              aria-required="true"
                              value={formData.district}
                              onChange={handleChange}
                            >
                              <option value="">select District</option>
                              {districts.map(district => (
                                <option key={district} value={district}>{district}</option>
                              ))}
                            </select>
                          </div> 
                        </div>
                          
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Please Enter Service Name</label>
                            <input 
                              type="text" 
                              required 
                              className="form-control" 
                              name="services" 
                              value={formData.services}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row" id="issue">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">Grievance Issue</label>
                            <input 
                              type="text" 
                              required 
                              className="form-control" 
                              name="issue" 
                              value={formData.issue}
                              onChange={handleChange}
                            />
                          </div>
                        </div>  
                        <div className="col-md-6">
                          <div className="form-group"> 
                            <label className="control-label">Identity hidden</label><br/>
                            <label>
                              <input 
                                type="checkbox" 
                                name="identy" 
                                checked={formData.identy}
                                onChange={handleChange}
                              /> 
                              Do you want to hide your identity
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group"> 
                            <label className="control-label" htmlFor="grievance-description">Description</label>
                            <textarea 
                              className="form-control" 
                              name="description" 
                              maxLength="1000" 
                              rows="5" 
                              value={formData.description}
                              onChange={handleChange}
                              placeholder="Enter your grievance in Maximum 1000 Characters !!!"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>   
                </div>
              </div>
            </div>

            <div className="card-footer text-center">
              <button type="submit" className="btn btn-sm btn-primary">
                Submit Grievance Redressal
              </button> 
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default GrievanceRedressal;
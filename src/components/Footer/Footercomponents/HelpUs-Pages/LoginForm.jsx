import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../../assets/css/bootstrap.min.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    captcha: ''
  });
  const [captchaText, setCaptchaText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(captcha);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.captcha.toLowerCase() !== captchaText.toLowerCase()) {
      setError('Invalid Captcha! Please try again.');
      generateCaptcha();
      setFormData(prev => ({ ...prev, captcha: '' }));
      return;
    }

    try {
      // Add your login API call here
      console.log('Form submitted:', formData);
      // On successful login:
      // navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };
  return (
    <div className="modal fade" id="signup" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header" style={{ background: '#4b6cb7', color: '#fff' }}>
            <h5 className="modal-title" id="loginModalLabel">CUSTOMER SIGN IN</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <div className="col-md-8 offset-md-2">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email ID <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password <span className="text-danger">*</span></label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />                  <button 
                    type="button"
                    className="btn btn-link text-danger p-0"
                    data-bs-toggle="modal" 
                    data-bs-target="#password-reset"
                    data-bs-dismiss="modal"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="form-group">
                  <div className="row align-items-center mb-2">
                    <div className="col-auto">
                      Captcha:
                    </div>
                    <div className="col-auto">
                      <div
                        style={{
                          width: '100px',
                          backgroundColor: 'azure',
                          padding: '5px',
                          fontFamily: 'monospace',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          border: '1px solid #000',
                          fontSize: '18px'
                        }}
                      >
                        {captchaText}
                      </div>
                    </div>
                    <div className="col-auto">
                      <button 
                        type="button" 
                        className="btn btn-sm btn-secondary"
                        onClick={generateCaptcha}
                      >
                        Refresh
                      </button>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="captcha"
                    placeholder="Enter Captcha Code"
                    value={formData.captcha}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group text-center">
                  <button 
                    type="submit" 
                    className="btn btn"
                    style={{ background: '#4b6cb7', color: '#fff' }}
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="row mt-4">
                <div className="col-12 text-center">
                  <h3>You do not have an account?</h3>
                  <p>Create your account or enter your activation code by clicking the link below.</p>
                  <button
                    className="btn"
                    style={{ background: '#4b6cb7', color: '#fff' }}
                    onClick={() => navigate('/register')}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { Eye, EyeOff, BarChart3 } from 'lucide-react';

const TradeAiLogin = () => {
  const [formData, setFormData] = useState({
    email: 'example@gmail.com',
    password: 'g#*7%'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { ...formData, rememberMe });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid" style={{ minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <style jsx>{`
        .login-container {
          min-height: 100vh;
        }

        .login-form-section {
          background: white;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, #28a745, #ffc107, #dc3545);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          color: white;
          font-weight: bold;
          font-size: 18px;
        }

        .brand-text {
          font-size: 24px;
          font-weight: 600;
          color: #333;
        }

        .form-title {
          font-size: 32px;
          font-weight: 600;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          color: #6c757d;
          margin-bottom: 2rem;
        }

        .form-label {
          font-weight: 500;
          color: #333;
          margin-bottom: 0.5rem;
          display: block;
        }

        .form-input {
          width: 100%;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 14px;
          transition: all 0.2s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e3a5f;
          box-shadow: 0 0 0 0.2rem rgba(30, 58, 95, 0.15);
        }

        .password-input-group {
          position: relative;
        }

        .password-input {
          padding-right: 45px;
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #6c757d;
          cursor: pointer;
          padding: 4px;
        }

        .password-toggle:hover {
          color: #333;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .custom-checkbox {
          width: 16px;
          height: 16px;
          accent-color: #1e3a5f;
        }

        .btn-primary-custom {
          background: linear-gradient(135deg, #2c5aa0 0%, #1e3a5f 100%);
          border: none;
          border-radius: 8px;
          padding: 12px;
          font-weight: 600;
          font-size: 16px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .btn-primary-custom:hover {
          background: linear-gradient(135deg, #1e3a5f 0%, #2c5aa0 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(30, 58, 95, 0.3);
        }

        .divider {
          position: relative;
          text-align: center;
          margin: 1.5rem 0;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e9ecef;
        }

        .divider span {
          background: white;
          padding: 0 1rem;
          color: #6c757d;
          font-size: 14px;
        }

        .btn-google {
          border: 1px solid #e9ecef;
          background: white;
          color: #333;
          border-radius: 8px;
          padding: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-google:hover {
          background: #f8f9fa;
          border-color: #ccc;
        }

        .hero-section {
          background: linear-gradient(135deg, #2c5aa0 0%, #1e3a5f 100%);
          color: white;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          max-width: 400px;
          height: 250px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          border-radius: 16px;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero-icons {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 2rem;
        }

        .hero-icon {
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          font-size: 24px;
        }

        .hero-title {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .hero-description {
          font-size: 16px;
          opacity: 0.9;
          line-height: 1.6;
          max-width: 400px;
        }

        .create-account-link {
          color: #1e3a5f;
          text-decoration: none;
          font-weight: 500;
        }

        .create-account-link:hover {
          text-decoration: underline;
        }

        .forgot-password-link {
          color: #1e3a5f;
          text-decoration: none;
          font-size: 14px;
        }

        .forgot-password-link:hover {
          text-decoration: underline;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          height: 100vh;
        }

        .col-lg-6 {
          flex: 0 0 auto;
          width: 50%;
          padding: 0;
        }

        @media (max-width: 991.98px) {
          .col-lg-6 {
            width: 100%;
          }
          
          .hero-section {
            order: -1;
            min-height: 300px;
          }
          
          .login-form-section {
            padding: 2rem 1.5rem;
          }
          
          .form-title {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="row">
        {/* Left Panel - Login Form */}
        <div className="col-lg-6 login-form-section">
          <div style={{maxWidth: '400px', margin: '0 auto'}}>
            {/* Brand Logo */}
            <div className="brand-logo">
              <div className="logo-icon">
                <BarChart3 size={20} />
              </div>
              <span className="brand-text">Trade.ai</span>
            </div>

            {/* Form Title */}
            <h1 className="form-title">Sign in</h1>
            <p className="form-subtitle">
              Don't have an account? 
              <a href="#" className="create-account-link" style={{marginLeft: '4px'}}>Create now</a>
            </p>

            {/* Login Form */}
            <div>
              {/* Email Field */}
              <div style={{marginBottom: '1rem'}}>
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Password Field */}
              <div style={{marginBottom: '1rem'}}>
                <label className="form-label">Password</label>
                <div className="password-input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-input password-input"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
                <div className="checkbox-container">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label style={{fontSize: '14px', color: '#333'}}>
                    Remember me
                  </label>
                </div>
                <a href="#" className="forgot-password-link">Forgot Password?</a>
              </div>

              {/* Sign In Button */}
              <button 
                type="button" 
                className="btn-primary-custom"
                onClick={handleSubmit}
                style={{marginBottom: '1rem'}}
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="divider">
                <span>or</span>
              </div>

              {/* Google Sign In */}
              <button type="button" className="btn-google">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Hero Section */}
        <div className="col-lg-6 hero-section">
          <div className="hero-image">
            <div className="hero-icons">
              <div className="hero-icon">✈️</div>
              <div className="hero-icon">🚢</div>
              <div className="hero-icon">🚛</div>
            </div>
          </div>
          <h2 className="hero-title">Your Gateway to Global Trade</h2>
          <p className="hero-description">
            This platform helps you learn, register, and grow as an exporter. 
            Begin now, and let your business reach across borders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradeAiLogin;
import React, { useState } from "react";
import { BarChart3 } from "lucide-react";

const TradeAiSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "example",
    email: "example@gmail.com",
    phoneNumber: "9368****42",
    password: "example@008#10",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted:", formData);
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2c5aa0 0%, #1e3a5f 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}>
      <style jsx>{`
        .signup-container {
          background: white;
          border-radius: 24px;
          padding: 40px;
          width: 100%;
          max-width: 600px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(45deg, #28a745, #ffc107, #dc3545);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 8px;
          color: white;
          font-weight: bold;
          font-size: 14px;
        }

        .brand-text {
          font-size: 20px;
          font-weight: 600;
          color: #333;
        }

        .form-title {
          font-size: 28px;
          font-weight: 600;
          color: #1e3a5f;
          text-align: center;
          margin-bottom: 32px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-weight: 500;
          color: #333;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .required {
          color: #dc3545;
        }

        .form-input {
          width: 100%;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 14px 16px;
          font-size: 14px;
          transition: all 0.2s ease;
          outline: none;
          background: #f8f9fa;
          color: #6c757d;
        }

        .form-input:focus {
          border-color: #1e3a5f;
          box-shadow: 0 0 0 0.2rem rgba(30, 58, 95, 0.15);
          background: white;
          color: #333;
        }

        .single-row {
          margin-bottom: 20px;
        }

        .btn-signup {
          background: linear-gradient(135deg, #2c5aa0 0%, #1e3a5f 100%);
          border: none;
          border-radius: 12px;
          padding: 16px;
          font-weight: 600;
          font-size: 16px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          margin: 24px 0;
        }

        .btn-signup:hover {
          background: linear-gradient(135deg, #1e3a5f 0%, #2c5aa0 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 58, 95, 0.3);
        }

        .divider {
          position: relative;
          text-align: center;
          margin: 24px 0;
        }

        .divider::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e9ecef;
        }

        .divider span {
          background: white;
          padding: 0 16px;
          color: #6c757d;
          font-size: 14px;
          font-weight: 500;
        }

        .btn-google {
          border: 1px solid #e9ecef;
          background: white;
          color: #333;
          border-radius: 12px;
          padding: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 14px;
        }

        .btn-google:hover {
          background: #f8f9fa;
          border-color: #ccc;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .signup-container {
            padding: 32px 24px;
            margin: 10px;
            border-radius: 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .form-title {
            font-size: 24px;
            margin-bottom: 24px;
          }

          .brand-text {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .signup-container {
            padding: 24px 20px;
            border-radius: 16px;
          }

          .form-title {
            font-size: 22px;
          }

          .form-input {
            padding: 12px 14px;
            font-size: 16px; /* Prevents zoom on iOS */
          }

          .btn-signup,
          .btn-google {
            padding: 14px;
            font-size: 15px;
          }
        }
      `}</style>

      <div className="signup-container">
        {/* Brand Logo */}
        <div className="brand-logo">
          <div className="logo-icon">
            <BarChart3 size={16} />
          </div>
          <span className="brand-text">Trade.ai</span>
        </div>

        {/* Form Title */}
        <h1 className="form-title">Create Your Account</h1>

        {/* Signup Form */}
        <div>
          {/* First Row - Full Name and Email */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Full Name<span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-input"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="example"
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                E-mail<span className="required">*</span>
              </label>
              <input
                type="email"
                className="form-input"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@gmail.com"
              />
            </div>
          </div>

          {/* Second Row - Phone Number and Password */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Phone Number<span className="required">*</span>
              </label>
              <input
                type="tel"
                className="form-input"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="9368****42"
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                Create Password<span className="required">*</span>
              </label>
              <input
                type="password"
                className="form-input"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="example@008#10"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button type="button" className="btn-signup" onClick={handleSubmit}>
            Sign Up
          </button>

          {/* Divider */}
          <div className="divider">
            <span>or</span>
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            className="btn-google"
            onClick={handleGoogleSignup}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeAiSignup;

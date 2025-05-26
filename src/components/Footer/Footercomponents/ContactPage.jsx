import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactUs = () => {
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function generateCaptcha() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
  };

  const onSubmit = async (data) => {
    if (data.captcha !== captchaCode) {
      setSubmitMessage({ type: "error", text: "Invalid captcha code" });
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post("/ContactUs/Send", data);
      setSubmitMessage({ type: "success", text: "Message sent successfully!" });
      reset();
      refreshCaptcha();
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" id="innerpage">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center mt-sm-5 font-weight-bold text-uppercase">
            Contact Us
          </h3>
          <hr style={{ width: "50%" }} />
        </div>

        <div className="col-md-8 mt-sm-4">
          {submitMessage && (
            <div
              className={`alert ${
                submitMessage.type === "error"
                  ? "alert-danger"
                  : "alert-success"
              }`}
            >
              {submitMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group col-md-12">
                <input
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  type="text"
                  placeholder="Name..."
                  {...register("name", { required: "Name is required" })}
                  style={{ minHeight: "45px", borderRadius: "0" }}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>{errors.name.message}</span>
                )}
              </div>

              <div className="form-group col-md-12">
                <input
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  type="tel"
                  placeholder="Phone..."
                  {...register("phone", { required: "Phone is required" })}
                  style={{ minHeight: "45px", borderRadius: "0" }}
                />
                {errors.phone && (
                  <span style={{ color: "red" }}>{errors.phone.message}</span>
                )}
              </div>

              <div className="form-group col-md-12">
                <input
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  type="email"
                  placeholder="E-mail..."
                  {...register("email", { required: "Email is required" })}
                  style={{ minHeight: "45px", borderRadius: "0" }}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
              </div>

              <div className="form-group col-md-12">
                <textarea
                  className={`form-control ${errors.help ? "is-invalid" : ""}`}
                  placeholder="How can we help you?"
                  rows="5"
                  {...register("help", { required: "Message is required" })}
                  style={{ borderRadius: "0" }}
                ></textarea>
                {errors.help && (
                  <span style={{ color: "red" }}>{errors.help.message}</span>
                )}
              </div>

              <div className="form-group col-md-6">
                <div
                  id="captcha_one"
                  style={{
                    width: "200px",
                    backgroundColor: "azure",
                    padding: "5px",
                    marginLeft: "10px",
                    fontFamily: "math",
                    fontWeight: "bold",
                    textAlignLast: "center",
                    border: "1px solid #000",
                    fontSize: "18px",
                  }}
                >
                  Captcha : {captchaCode}
                </div>
              </div>

              <div className="form-group col-md-6">
                <input
                  className={`form-control ${
                    errors.captcha ? "is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Enter Captcha Code"
                  {...register("captcha", { required: "Captcha is required" })}
                  style={{ minHeight: "45px", borderRadius: "0" }}
                />
                {errors.captcha && (
                  <span style={{ color: "red" }}>{errors.captcha.message}</span>
                )}
              </div>

              <div className="form-group col-md-12">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ minHeight: "45px", borderRadius: "0" }}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-4 mt-sm-4">
          International Trade Intelligence & Export Facilitation Centre, <br />
          Madhya Pradesh Export Helpline <br />
          Phone: +91-755-257-7145
          <br />
          E-mail:{" "}
          <a href="mailto:info@mptradeportal.org">info@mptradeportal.org</a>
          <br />
          <br />
          <br />
          Plot 16-A, 2nd Floor
          <br />
          <strong>CEDMAP, MPIDC</strong>
          <br />
          Arera Hills, Bhopal
          <br />
          Madhya Pradesh
          <br />
          Pincode - 462004
          <br />
          Phone: +91-755-2559971
          <br />
          <a
            href="https://invest.mp.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MPIDC Website
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

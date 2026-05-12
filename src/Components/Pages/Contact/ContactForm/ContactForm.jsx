import React, { useState } from "react";
import "./ContactForm.css";

const SERVICES = [
  "Brand Consulting",
  "Brand Strategy",
  "Experiential Marketing / Activations",
  "Corporate Identity Design",
  "Advertising (TV, Radio, Print, Digital)",
  "3D CGI Packaging Design",
  "Multiple Services",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");

    // Replace this timeout with your real API call, e.g. fetch('/api/contact', { method:'POST', body: JSON.stringify(form) })
    setTimeout(() => {
      setStatus("success");
    }, 1400);
  };

  if (status === "success") {
    return (
      <div className="contact-success">
        <div className="success-icon">✓</div>
        <h3>Message sent!</h3>
        <p>
          Thanks for reaching out. We'll get back to you within 24 hours at{" "}
          <strong>{form.email}</strong>.
        </p>
        <button
          className="bk-btn-secondary"
          onClick={() => { setForm({ firstName:"",lastName:"",email:"",phone:"",company:"",service:"",message:"" }); setStatus("idle"); }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="bk-contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className={`form-group ${errors.firstName ? "has-error" : ""}`}>
          <label htmlFor="firstName">First name <span className="required">*</span></label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Emeka"
            value={form.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
        </div>
        <div className={`form-group ${errors.lastName ? "has-error" : ""}`}>
          <label htmlFor="lastName">Last name <span className="required">*</span></label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Okafor"
            value={form.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
        </div>
      </div>

      <div className={`form-group ${errors.email ? "has-error" : ""}`}>
        <label htmlFor="email">Email address <span className="required">*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="emeka@yourcompany.com"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-msg">{errors.email}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+234 800 000 0000"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company / Brand</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
            value={form.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="service">Service of interest</label>
        <select id="service" name="service" value={form.service} onChange={handleChange}>
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className={`form-group ${errors.message ? "has-error" : ""}`}>
        <label htmlFor="message">Message <span className="required">*</span></label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project — what you'd like to achieve, your timeline, and any other details..."
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error-msg">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className={`bk-submit-btn ${status === "submitting" ? "loading" : ""}`}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <span className="loading-text">Sending<span className="dots" /></span>
        ) : (
          "Send message →"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
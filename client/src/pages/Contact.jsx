import { useState } from "react";
import axiosClient from "../api/axiosClient";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterested: "",
    budget: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      await axiosClient.post("/leads", form);
      setStatus("Thank you! We will reach out shortly.");
      setForm({
        name: "",
        email: "",
        phone: "",
        serviceInterested: "",
        budget: "",
        message: ""
      });
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
          gap: 32
        }}
      >
        <div>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            Tell us about your project and we’ll suggest the best way to move
            forward.
          </p>
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: 12, maxWidth: 520 }}
          >
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              name="serviceInterested"
              placeholder="Service Interested"
              value={form.serviceInterested}
              onChange={handleChange}
            />
            <input
              name="budget"
              placeholder="Budget (optional)"
              value={form.budget}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us a bit about your requirements"
              value={form.message}
              onChange={handleChange}
            />
            <button className="button-primary" type="submit">
              Submit
            </button>
          </form>
          {status && (
            <p style={{ marginTop: 10, fontSize: 14, color: "#4b5563" }}>
              {status}
            </p>
          )}
        </div>
        <div className="card">
          <h3>Connect with us</h3>
          <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 8 }}>
            Add your office address, email and phone details here.
          </p>
          <p style={{ fontSize: 14, color: "#4b5563" }}>
            You can also embed a Google Map and your WhatsApp chat link in this
            section.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

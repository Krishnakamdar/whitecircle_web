import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  // If service not found
  if (!service) {
    return (
      <section style={{ padding: "120px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Service Not Found
        </h2>
        <Link to="/services" style={{ color: "#2563eb" }}>
          ← Back to Services
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* ===== BANNER ===== */}
      <section
        style={{
          padding: "120px 20px 80px",
          background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          {service.bannerTitle}
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.9 }}>
          {service.bannerSubtitle}
        </p>
      </section>

      {/* ===== CONTENT ===== */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "auto" }}>
        {/* Overview */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
            Service Overview
          </h2>
          <p style={{ color: "#555", lineHeight: "1.7" }}>
            {service.overview}
          </p>
        </div>

        {/* What We Deliver */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
            What We Deliver
          </h2>
          <ul style={{ paddingLeft: "20px", color: "#555" }}>
            {service.deliverables.map((item, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
            Our Process
          </h2>
          <ol style={{ paddingLeft: "20px", color: "#555" }}>
            {service.process.map((step, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Technologies */}
        <div>
          <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
            Technologies Used
          </h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: "8px 14px",
                  background: "#f1f5f9",
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;

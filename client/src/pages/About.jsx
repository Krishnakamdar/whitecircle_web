import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axiosClient.get("/about").then((res) => setAbout(res.data));
  }, []);

  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div className="container">
        <h1 className="section-title">About Whitecircle Group</h1>
        <p className="section-subtitle">
          A technology partner focused on building reliable, long-term digital
          solutions.
        </p>

        <div className="card" style={{ marginBottom: 24 }}>
          <h3>Our Story</h3>
          <p style={{ fontSize: 14, color: "#4b5563" }}>
            {about?.story ||
              "Use the admin panel to add your company story, background and journey."}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 18
          }}
        >
          <div className="card">
            <h3>Vision</h3>
            <p style={{ fontSize: 14, color: "#4b5563" }}>
              {about?.vision ||
                "To enable businesses to adopt technology with confidence and clarity."}
            </p>
          </div>
          <div className="card">
            <h3>Mission</h3>
            <p style={{ fontSize: 14, color: "#4b5563" }}>
              {about?.mission ||
                "To design, build and maintain digital products that perform in real business environments."}
            </p>
          </div>
          <div className="card">
            <h3>Values</h3>
            <ul style={{ fontSize: 14, color: "#4b5563", paddingLeft: 18 }}>
              {(about?.values || [
                "Reliability",
                "Clarity in communication",
                "Ownership and accountability"
              ]).map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

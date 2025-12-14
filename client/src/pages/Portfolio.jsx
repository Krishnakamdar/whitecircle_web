import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

const Portfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosClient.get("/portfolio").then((res) => setItems(res.data));
  }, []);

  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div className="container">
        <h1 className="section-title">Portfolio &amp; Case Studies</h1>
        <p className="section-subtitle">
          Highlight key projects, before/after transformations and outcomes.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 18
          }}
        >
          {items.map((p) => (
            <div key={p._id} className="card">
              <h3 style={{ marginBottom: 4 }}>{p.title}</h3>
              {p.clientName && (
                <p style={{ fontSize: 13, color: "#6b7280" }}>
                  Client: {p.clientName}
                </p>
              )}
              {p.finalOutput && (
                <p style={{ fontSize: 14, color: "#4b5563", marginTop: 8 }}>
                  {p.finalOutput}
                </p>
              )}
            </div>
          ))}
          {!items.length && (
            <p style={{ color: "#9ca3af" }}>
              No portfolio items yet. Add them from the admin panel.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

const TestimonialSlider = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosClient.get("/testimonials").then((res) => setItems(res.data));
  }, []);

  if (!items.length) return <p style={{ color: "#9ca3af" }}>No testimonials yet.</p>;

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        overflowX: "auto",
        paddingBottom: 4
      }}
    >
      {items.map((t) => (
        <div key={t._id} className="card" style={{ minWidth: 260 }}>
          <p style={{ fontSize: 14, marginBottom: 10 }}>"{t.message}"</p>
          <div style={{ fontSize: 13, color: "#4b5563" }}>
            <strong>{t.clientName}</strong>
            {t.company && ` · ${t.company}`}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;

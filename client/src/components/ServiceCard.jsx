import React from "react";

export default function ServiceCard({ title, text }) {
  return (
    <div className="service-card">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

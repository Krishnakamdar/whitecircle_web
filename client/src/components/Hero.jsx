import React, { useState, useEffect } from "react";

const slides = [
  {
    text: "Innovative",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    color: "#38bdf8",
  },
  {
    text: "Intelligent",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    color: "#a78bfa",
  },
  {
    text: "Impactful",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    color: "#fb923c",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <div
          key={i}
          className="hero-bg"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: index === i ? 1 : 0,
          }}
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>
          The Key to Smart IT Solutions
          <div className="hero-dynamic" style={{ color: slides[index].color }}>
            {slides[index].text}
          </div>
        </h1>

        <p style={{ marginTop: 16, fontSize: 20, opacity: 0.9 }}>
          End-to-end IT consulting, infrastructure setup, and technology-driven
          business solutions.
        </p>

        <div style={{ marginTop: 24 }}>
          <button className="btn">Start a Project →</button>
         
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Features() {
  return (
    <section className="section container">
      <h2 className="section-title">Why Whitecircle?</h2>

      <div className="features-grid">
        <div className="feature">
          <h5>End-to-end Ownership</h5>
          <p>
            From idea to launch — strategy, design, engineering and support
            included.
          </p>
        </div>

        <div className="feature">
          <h5>Enterprise Mindset</h5>
          <p>
            Systems designed to be maintainable, secure and built for scale.
          </p>
        </div>

        <div className="feature">
          <h5>Modern Tech Stack</h5>
          <p>
            Web, mobile, cloud-native + Web3 capabilities for future-ready
            products.
          </p>
        </div>
      </div>
    </section>
  );
}

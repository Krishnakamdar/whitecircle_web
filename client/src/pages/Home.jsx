import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ServiceCard from "../components/ServiceCard";
import HomeServices from "../components/HomeServices";

export default function Home() {
  return (
    <main>
     

      <section className="section container">
        <div className="services-snapshot">
          <div className="services-text">
            <h3 className="section-title">
              Enterprise IT & Digital Solutions for Modern Businesses
            </h3>
            <p style={{ color: "#64748b", marginTop: 6 }}>
              Whitecircle Group delivers software, cloud, mobile, and Web3
              solutions to help you build resilient, scalable digital systems.
            </p>

            <div style={{ marginTop: 14 }}>
              <button className="btn">Schedule Consultation</button>
              <button className="btn-outline">View Case Studies</button>
            </div>
          </div>
          

          <div className="services-cards">
            <ServiceCard
              title="IT Services"
              text="Secure and scalable infrastructure support for enterprise workloads."
            />
            <ServiceCard
              title="Software Development"
              text="Custom platforms engineered for long-term growth."
            />
            <ServiceCard
              title="Cloud & Hosting"
              text="Strong security, DevOps and cloud migration services."
            />
            <ServiceCard
              title="Fintech & Web3"
              text="Build tokens, wallets and decentralized platforms."
            />
          </div>
        </div>
      </section>
      <HomeServices />

      <Features />

      <section className="section container">
        <h2 className="section-title">Portfolio Highlights</h2>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <div
              className="portfolio-thumb"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
            <div className="portfolio-body">
              <h4>Enterprise Platform</h4>
              <p>End-to-end SaaS solution.</p>
            </div>
          </div>

          <div className="portfolio-card">
            <div
              className="portfolio-thumb"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
            <div className="portfolio-body">
              <h4>Mobile App</h4>
              <p>100k+ user consumer app.</p>
            </div>
          </div>

          <div className="portfolio-card">
            <div
              className="portfolio-thumb"
              style={{
                backgroundImage:
                  "url('data:image/jpeg;base64,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')",
              }}
            />
            <div className="portfolio-body">
              <h4>Cloud Migration</h4>
              <p>Zero-downtime cloud adoption.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h3>Ready to start your next project?</h3>
          <p>Tell us your goals and get expert guidance.</p>

          <button className="btn" style={{ marginTop: 10 }}>
            Book Consultation
          </button>
        </div>
      </div>
    </main>
  );
}

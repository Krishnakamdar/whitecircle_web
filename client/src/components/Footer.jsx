import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h6>Whitecircle Group</h6>
            <p style={{ fontSize: 14, color: "#64748b" }}>
              Enterprise IT, Cloud, Digital & Web3 Solutions.
            </p>
          </div>

          <div className="footer-col">
            <h6>Services</h6>
            <a href="#">IT Services</a>
            <a href="#">Cloud Hosting</a>
            <a href="#">Software Development</a>
          </div>

          <div className="footer-col">
            <h6>Company</h6>
            <a href="/about">About</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-col">
            <h6>Contact</h6>
            <a href="#">info@whitecircle.com</a>
            <a href="#">Request Consultation</a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Whitecircle Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

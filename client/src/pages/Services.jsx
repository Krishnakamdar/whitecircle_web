import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import ServiceCard from "../components/ServiceCard";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axiosClient.get("/services").then((res) => setServices(res.data));
  }, []);

  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div className="container">
        <h1 className="section-title">Services</h1>
        <p className="section-subtitle">
          A complete suite of IT, digital, cloud and Web3 offerings :-</p>
          <ul className="services-list">
  <li><Link className="service-btn" to="/services/it-services">IT Services</Link></li>
  <li><Link className="service-btn" to="/services/salesforce-services">Salesforce Services</Link></li>
  <li><Link className="service-btn" to="/services/web-development">Web Development</Link></li>
  <li><Link className="service-btn" to="/services/mobile-app-development">Mobile App Development</Link></li>
  <li><Link className="service-btn" to="/services/digital-marketing">Digital Marketing Services</Link></li>
  <li><Link className="service-btn" to="/services/software-development">Software Development</Link></li>
  <li><Link className="service-btn" to="/services/analytics">Analytics</Link></li>
  <li><Link className="service-btn" to="/services/industrial-automation">Industrial Automation</Link></li>
  <li><Link className="service-btn" to="/services/iot">Internet Of Things (IOT)</Link></li>
  <li><Link className="service-btn" to="/services/artificial-intelligence">Artificial Intelligence (AI)</Link></li>
  <li><Link className="service-btn" to="/services/database-design">Database Design</Link></li>
  <li><Link className="service-btn" to="/services/staffing-payroll">Staffing & Payroll</Link></li>
  <li><Link className="service-btn" to="/services/software-testing">Software Testing</Link></li>
  <li><Link className="service-btn" to="/services/payment-gateway">Payment Gateway Service</Link></li>
  <li><Link className="service-btn" to="/services/cloud-hosting">Cloud & Hosting Service</Link></li>
  <li><Link className="service-btn" to="/services/shopify-wordpress-development">Shopify & WordPress Development</Link></li>
  <li><Link className="service-btn" to="/services/oracle-development">Oracle Development & Consulting</Link></li>
</ul>


        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 18
          }}
        >
          {services.map((s) => (
            <Link key={s._id} to={`/services/${s.slug}`}>
              <ServiceCard
                title={s.title}
                shortDescription={s.shortDescription}
              />
            </Link>
          ))}
          {!services.length && (
          
            <p style={{ color: "#9ca3af" }}>
              WE also provide WEB 3 Services.</p>
            

          )}
        </div>
      </div>
    </section>
  );
};

export default Services;



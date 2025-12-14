import { useParams, Link } from "react-router-dom";
import { web3ServicesData } from "../data/web3ServicesData";

const Web3Detail = () => {
  const { slug } = useParams();
  const service = web3ServicesData[slug];

  if (!service) {
    return (
      <div style={{ padding: "120px", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
          Service Not Found
        </h1>
        <Link to="/web3" style={{ color: "#2563eb" }}>
          Back to Web3 Services
        </Link>
      </div>
    );
  }

  return (
    <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        {service.title}
      </h1>

      <p style={{ marginTop: "16px", fontSize: "18px", color: "#555" }}>
        {service.overview}
      </p>

      <ul style={{ marginTop: "24px", paddingLeft: "20px" }}>
        {service.features.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            ✅ {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Web3Detail;

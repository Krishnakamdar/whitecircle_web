// import { useEffect, useState } from "react";
// import axiosClient from "../api/axiosClient";

// const Careers = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     axiosClient.get("/careers").then((res) => setJobs(res.data));
//   }, []);

//   return (
//     <section className="section" style={{ paddingTop: 96 }}>
//       <div className="container">
//         <h1 className="section-title">Careers</h1>
//         <p className="section-subtitle">
//           Join a team focused on quality engineering and long-term partnerships.
//         </p>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
//             gap: 18
//           }}
//         >
//           {jobs.map((job) => (
//             <div key={job._id} className="card">
//               <h3 style={{ marginBottom: 4 }}>{job.title}</h3>
//               <p style={{ fontSize: 13, color: "#6b7280" }}>
//                 {job.location || "Location: Flexible"} · {job.type || "Full-time"}
//               </p>
//               <p style={{ fontSize: 14, color: "#4b5563", marginTop: 8 }}>
//                 {job.description}
//               </p>
//             </div>
//           ))}
//           {!jobs.length && (
//             <p style={{ color: "#9ca3af" }}>
//               No open roles yet. Add them from the admin panel.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Careers


// ===========================================================================================
import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await axiosClient.get("/careers");
        setJobs(res.data);
      } catch (err) {
        setError("Failed to load job openings");
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  return (
    <section style={{ padding: "100px 20px", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 10 }}>
          Careers
        </h1>
        <p style={{ color: "#6b7280", marginBottom: 40 }}>
          Explore our current job openings and grow with us.
        </p>

        {/* Loading */}
        {loading && <p>Loading job openings...</p>}

        {/* Error */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* No Jobs */}
        {!loading && !jobs.length && (
          <p style={{ color: "#9ca3af" }}>
            No openings available at the moment.
          </p>
        )}

        {/* Jobs Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24
          }}
        >
          {jobs.map((job) => (
            <div
              key={job._id}
              style={{
                background: "#ffffff",
                borderRadius: 12,
                padding: 20,
                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                transition: "transform 0.2s ease",
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 600 }}>
                {job.title}
              </h3>

              <p style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>
                📍 {job.location || "Flexible"} · {job.type || "Full-time"}
              </p>

              <p
                style={{
                  fontSize: 14,
                  color: "#4b5563",
                  marginTop: 12,
                  lineHeight: 1.6
                }}
              >
                {job.description}
              </p>

              <button
                style={{
                  marginTop: 16,
                  padding: "8px 14px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 14
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;


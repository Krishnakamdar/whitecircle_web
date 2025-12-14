import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

const AdminDashboard = () => {
  const [services, setServices] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchServices = () => {
    axiosClient.get("/services").then((res) => setServices(res.data));
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleSave = async () => {
    if (!editing) return;
    if (editing._id) {
      await axiosClient.put(`/services/${editing._id}`, editing);
    } else {
      await axiosClient.post("/services", editing);
    }
    setEditing(null);
    fetchServices();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this service?")) return;
    await axiosClient.delete(`/services/${id}`);
    fetchServices();
  };

  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div className="container">
        <h1 className="section-title">Admin Panel</h1>
        <p className="section-subtitle">
          Manage services. Extend this page to handle portfolio, careers,
          testimonials and about content.
        </p>

        <button
          className="button-primary"
          style={{ marginBottom: 16 }}
          onClick={() =>
            setEditing({
              title: "",
              slug: "",
              category: "IT & Software",
              shortDescription: "",
              bannerDescription: ""
            })
          }
        >
          + Add Service
        </button>

        <div className="card">
          <h3>Services</h3>
          <table
            style={{
              width: "100%",
              fontSize: 13,
              borderCollapse: "collapse",
              marginTop: 10
            }}
          >
            <thead>
              <tr style={{ textAlign: "left" }}>
                <th style={{ padding: 6 }}>Title</th>
                <th style={{ padding: 6 }}>Category</th>
                <th style={{ padding: 6 }}>Slug</th>
                <th style={{ padding: 6 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s._id}>
                  <td style={{ padding: 6 }}>{s.title}</td>
                  <td style={{ padding: 6 }}>{s.category}</td>
                  <td style={{ padding: 6 }}>{s.slug}</td>
                  <td style={{ padding: 6 }}>
                    <button
                      className="button-outline"
                      style={{ padding: "4px 10px", marginRight: 6 }}
                      onClick={() => setEditing(s)}
                    >
                      Edit
                    </button>
                    <button
                      className="button-outline"
                      style={{ padding: "4px 10px" }}
                      onClick={() => handleDelete(s._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {!services.length && (
                <tr>
                  <td colSpan={4} style={{ padding: 6 }}>
                    No services yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {editing && (
          <div className="card" style={{ marginTop: 20 }}>
            <h3>{editing._id ? "Edit Service" : "New Service"}</h3>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <input
                placeholder="Title"
                value={editing.title}
                onChange={(e) =>
                  setEditing({ ...editing, title: e.target.value })
                }
              />
              <input
                placeholder="Slug"
                value={editing.slug}
                onChange={(e) =>
                  setEditing({ ...editing, slug: e.target.value })
                }
              />
              <input
                placeholder="Category"
                value={editing.category}
                onChange={(e) =>
                  setEditing({ ...editing, category: e.target.value })
                }
              />
              <textarea
                placeholder="Short Description"
                value={editing.shortDescription}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    shortDescription: e.target.value
                  })
                }
              />
              <textarea
                placeholder="Banner Description"
                value={editing.bannerDescription || ""}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    bannerDescription: e.target.value
                  })
                }
              />
              <div style={{ display: "flex", gap: 8 }}>
                <button className="button-primary" onClick={handleSave}>
                  Save
                </button>
                <button
                  className="button-outline"
                  onClick={() => setEditing(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;

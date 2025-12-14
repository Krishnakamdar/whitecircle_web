import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axiosClient.post("/auth/login", form);
      localStorage.setItem("wc_admin_token", res.data.token);
      navigate("/admin");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div className="container" style={{ maxWidth: 400 }}>
        <h1 className="section-title">Admin Login</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: 12, marginTop: 8 }}
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button className="button-primary" type="submit">
            Login
          </button>
        </form>
        {error && (
          <p style={{ marginTop: 10, fontSize: 14, color: "crimson" }}>
            {error}
          </p>
        )}
      </div>
    </section>
  );
};

export default AdminLogin;

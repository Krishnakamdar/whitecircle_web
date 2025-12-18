import React from "react";

const jobs = [
  {
    title: "Kafka / Confluent Kafka Admin",
    company: "Tata Consultancy Services",
    location: "Bengaluru, Karnataka, India",
  },
  {
    title: "SDE 1 – Data Platform",
    company: "Slice",
    location: "Bangalore Urban, Karnataka, India",
  },
  {
    title: "Senior Data Engineer",
    company: "MathCo",
    location: "Bengaluru, Karnataka, India",
  },
  {
    title: "Kafka Administrator",
    company: "LTIMindtree",
    location: "Bengaluru, Karnataka, India",
  },
  {
    title: "Data Engineer (Spark | SQL | Streaming)",
    company: "Flextron Inc.",
    location: "Bengaluru, Karnataka, India",
  },
  {
    title: "Senior Data Architect – Databricks",
    company: "EazyML",
    location: "Bengaluru, India",
  },
  {
    title: "Senior Member of Technical Staff",
    company: "Oracle",
    location: "Bengaluru, Karnataka, India",
  },
];

export default function Careers() {
  return (
    <main className="w-full">
      {/* ================= HERO SEARCH SECTION ================= */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-800  text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Your job search starts here
          </h1>

          <p className="mt-3 text-purple-100">
            Search from over 40 million jobs, save the ones you love, and apply
            in seconds.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Job title"
              className="w-full px-5 py-3 rounded-full text-gray-800 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Location"
              defaultValue="Bengaluru"
              className="w-full px-5 py-3 rounded-full text-gray-800 focus:outline-none"
            />

            <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-full font-semibold">
              Find jobs
            </button>
          </div>
        </div>
      </section>

      {/* ================= JOB LIST SECTION ================= */}
      <section className="bg-gray-50 py-12 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold mb-6">
            Jobs – Bengaluru
          </h2>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-sm text-purple-600 mt-1">
                    {job.company}
                  </p>
                  <p className="text-sm text-gray-500">
                    {job.location}
                  </p>
                </div>

                <span className="text-gray-400 text-xl">&gt;</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

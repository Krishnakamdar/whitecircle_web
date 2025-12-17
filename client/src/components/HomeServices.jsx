import { useState } from "react";

const services = [
  {
    key: "services",
    label: "Services",
    title: "Services",
    desc:
      "We offer tailored solutions including software development, ERP/CRM implementation, cloud services, AI/ML, BPM, EPM, and system assurance.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    key: "solutions",
    label: "Solutions",
    title: "Solutions",
    desc:
      "We specialize in custom software development, enterprise-grade solutions, and digital transformation using modern technologies.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    key: "ai",
    label: "AI & ML",
    title: "AI & Machine Learning",
    desc:
      "Advanced AI & ML services including predictive analytics, NLP, computer vision, and automation for smart decision-making.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    key: "app",
    label: "App Development",
    title: "App Development",
    desc:
      "We build scalable, secure, and high-performance web and mobile applications with exceptional user experience.",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
  },
  {
    key: "cloud",
    label: "Cloud Services",
    title: "Cloud Services",
    desc:
      "End-to-end cloud solutions including hosting, DevOps, migration, monitoring, and security optimization.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
];

export default function HomeServices() {
  const [active, setActive] = useState(services[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* OUR EXPERTISE */}
        <p className="text-center text-sm tracking-widest text-blue-500 font-semibold mb-2">
          OUR EXPERTISE
        </p>

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Detailing of our products
        </h2>

        {/* HORIZONTAL NAVBAR */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item)}
              className={`px-6 py-2 rounded-full font-medium transition
                ${
                  active.key === item.key
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700 border hover:bg-gray-100"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <img
            src={active.image}
            alt={active.title}
            className="rounded-lg w-full h-[320px] object-cover"
          />

          {/* TEXT */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              {active.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {active.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

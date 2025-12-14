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
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-14">
          Detailing of our products
        </h2>

        <div className="grid grid-cols-12 gap-10">
          {/* LEFT INTERNAL NAVBAR */}
          <div className="col-span-12 md:col-span-3">
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
              {services.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActive(item)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition
                    ${
                      active.key === item.key
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-12 md:col-span-9">
            <div className="bg-white rounded-xl shadow p-8 grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <img
                src={active.image}
                alt={active.title}
                className="rounded-lg w-full h-[300px] object-cover"
              />

              {/* Text */}
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
        </div>
      </div>
    </section>
  );
}

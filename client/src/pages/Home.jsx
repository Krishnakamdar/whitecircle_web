import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ServiceCard from "../components/ServiceCard";
import HomeServices from "../components/HomeServices";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      
      {/* SERVICES SECTION */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>

      <HomeServices />

      <Features />

      {/* PORTFOLIO SECTION */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Portfolio Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div className="rounded-xl overflow-hidden shadow-sm border">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">Enterprise Platform</h4>
              <p className="text-gray-600 text-sm mt-1">
                End-to-end SaaS solution.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl overflow-hidden shadow-sm border">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">Mobile App</h4>
              <p className="text-gray-600 text-sm mt-1">
                100k+ user consumer app.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl overflow-hidden shadow-sm border">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">Cloud Migration</h4>
              <p className="text-gray-600 text-sm mt-1">
                Zero-downtime cloud adoption.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <div className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">
            Ready to start your next project?
          </h3>
          <p className="text-gray-300 mt-2">
            Tell us your goals and get expert guidance.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm md:text-base">
            Book Consultation
          </button>
        </div>
      </div>

    </main>
  );
}

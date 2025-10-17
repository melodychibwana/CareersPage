import React from "react";

const services = [
  { title: "Consulting", description: "Expert advice for your academic and career path" },
  { title: "Visa Assistance", description: "Guidance through the visa application process" },
  { title: "Test Preparation", description: "Coaching for standardized tests" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12 fade-up">
        <h2 className="text-4xl font-bold text-blue-900">Our Services</h2>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition fade-up"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

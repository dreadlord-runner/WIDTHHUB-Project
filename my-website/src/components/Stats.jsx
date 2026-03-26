import React from "react";

const Stats = () => {
  const statData = [
    { title: "Benefits Manager", info: "29 Open positions" },
    { title: "Recruitment", info: "24 Open positions" },
    { title: "HR Compliance", info: "10 Open positions" },
    { title: "Payroll Specialist", info: "20 Open positions" },
    { title: "Sourcing HR", info: "40 Open positions" },
    { title: "Talent Acquisition", info: "73 Open positions" },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="flex items-center justify-between px-10 py-5 mb-15">
        <h1 className="text-5xl font-semibold text-black font-sans leading-tight">
          Find your passion, fuel your success
        </h1>
        <button className="rounded-full bg-primary px-6 py-2 font-bold text-white transition-all hover:opacity-90 cursor-pointer">
          View Jobs
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {statData.map((item, index) => (
            <div
              key={index}
              className="space-y-2 bg-gray-200 rounded-2xl h-40 shadow"
            >
              <h2 className="text-3xl font-bold text-primary mt-10">
                {item.title}
              </h2>
              <p className="text-accent font-semibold uppercase tracking-wider text-sm">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

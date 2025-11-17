import React from "react";
import { SS1, SS2, SS3 } from "../assets/image";

const WhatDo = () => {
  const items = [
    {
      id: "01",
      title: "Flexibility",
      subtitle: "An inclusive model",
      image: SS1,
    },
    {
      id: "02",
      title: "Simplicity",
      subtitle: "More time to do less",
      image: SS2,
    },
    {
      id: "03",
      title: "Adaptability",
      subtitle: "Evolves with you over time",
      image: SS3,
    },
  ];

  return (
    <section className="bg-[#FAF7ED] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-medium text-[#0C310A] mb-14">
          Why Choose Us
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col font-sans">
              {/* Card Container */}
              <div className="relative bg-[#EAEAEA] rounded-3xl overflow-hidden w-full h-80 md:h-[300px] shadow-md transition-transform duration-300 hover:-translate-y-1">
                {/* Number Badge */}
                <div className="absolute top-5 left-5 bg-[#0b0b18] text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold z-10">
                  {item.id}
                </div>

                {/* Full Image Fit */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="mt-5 ml-1">
                <p className="text-[#5e6470] text-sm mb-1 font-medium">
                  • {item.subtitle}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-[#0b0b18] leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatDo;

import React from "react";
import Img1 from "../assets/projectimg/01.jpg";  // <-- your image
import Img2 from "../assets/service2.jpg";  // <-- your image
import Img3 from "../assets/service3.jpg";  // <-- your image

const services = [
  {
    id: "01",
    title: "Architecture",
    desc: "This is a complete, comprehensive service. We manage the whole process end-to-end to deliver a future-focused solution. From initial design to ongoing operation and customer service.",
    image: Img1,
  },
  {
    id: "02",
    title: "Construction",
    desc: "We understand this is a significant investment for you. Our expert team will go the extra mile to monetise your parking infrastructure and help you achieve a return on investment.",
    image: Img2,
  },
  {
    id: "03",
    title: "Interior",
    desc: "Our guidance ensures you pay once for your investment. We help minimise upfront cost—including securing government grant funding—to help you reach long-term goals.",
    image: Img3,
  },
];

const Services = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-6 md:py-16 bg-[#FAF7ED]">
      {/* HEADER */}
      <div className="mb-14">

  {/* MOBILE — CENTERED */}
        <div className="flex flex-col items-center text-center md:hidden">
            <h2 className="text-2xl text-[#0C310A] font-semibold leading-tight max-w-2xl">
            Enjoy all these benefits when you partner with us.
            </h2>
        </div>

        {/* DESKTOP — ORIGINAL STYLE */}
        <div className="hidden md:flex md:flex-row md:items-start md:justify-between">
            <h2 className="text-5xl text-[#0C310A] font-semibold leading-tight max-w-2xl">
            Enjoy all these benefits when you partner with us.
            </h2>
        </div>
        </div>

      {/* LIST ROWS */}
      <div className="space-y-12">
        {services.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-start gap-6 md:gap-60 pb-12 border-b border-gray-300">

            {/* IMAGE */}
            <div className="w-full md:w-[220px] h-[300px] md:h-[170px] rounded-xl overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* NUMBER */}
            <div className="text-2xl font-medium text-gray-700 md:pt-2">
              {item.id}
            </div>

            {/* TEXT CONTENT */}
            <div className="flex flex-col gap-2 max-w-2xl">
              <h3 className="text-2xl font-semibold text-[#0C310A]">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

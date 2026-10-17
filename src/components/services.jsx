import React from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/projectimg/01.webp";
import Img2 from "../assets/service2.webp";
import Img3 from "../assets/service3.webp";

const services = [
  {
    id: "01",
    title: "Architecture",
    desc: "This is a complete, comprehensive service. We manage the whole process end-to-end to deliver a future-focused solution.",
    image: Img1,
  },
  {
    id: "02",
    title: "Construction",
    desc: "We understand this is a significant investment. Our expert team will go the extra mile to monetise your project.",
    image: Img2,
  },
  {
    id: "03",
    title: "Interior",
    desc: "We help minimise upfront cost—including securing government grant funding—to help you reach long-term goals.",
    image: Img3,
  },
];

const Services = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-5 md:py-12 bg-[#FAF7ED]">
      
      {/* HEADER */}
      <div className="mb-10">
        <div className="flex flex-col items-center text-center md:hidden">
          <h2 className="text-xl sm:text-2xl text-[#0C310A] font-semibold leading-tight max-w-2xl">
            Enjoy all these benefits when you partner with us.
          </h2>
        </div>

        <div className="hidden md:flex md:flex-row md:items-start md:justify-between">
          <h2 className="text-5xl text-[#0C310A] font-semibold leading-tight max-w-2xl">
            Enjoy all these benefits when you partner with us.
          </h2>
        </div>
      </div>

      {/* LIST */}
      <div className="space-y-10">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-60 pb-8 border-b border-gray-300"
          >
            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full md:w-[220px] h-[300px] md:h-[170px] rounded-xl overflow-hidden shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* NUMBER */}
            <div className="text-2xl font-medium text-gray-700 md:pt-2">
              {item.id}
            </div>

            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.18 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 max-w-2xl"
            >
              <h3 className="text-2xl font-semibold text-[#0C310A]">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

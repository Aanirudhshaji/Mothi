import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { heroImage } from "../assets/image"; 

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroImage}
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12">
        {/* Animated Heading */}
        <motion.h1
          className="text-white text-3xl sm:text-4xl md:text-6xl font-serif leading-tight md:leading-[1.2]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Mobile version - single line */}
          <span className="block md:hidden">
            The best way to design and develop a property in the country
          </span>

          {/* Desktop version - multiline */}
          <span className="hidden md:block">
            The best way to design
            <br />
            and develop a property in
            <br />
            the country
          </span>
        </motion.h1>

        {/* Animated Button */}
        <motion.div
          className="mt-8 flex justify-center items-center space-x-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <button className="bg-[#607C3C] text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-[#D3E68A] transition-all">
            <span className="font-semibold">Get Started</span>
            <FiArrowRight className="text-xl" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

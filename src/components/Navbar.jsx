import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { logo, logoblack } from "../assets/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    "Home",
    "Services",
    "Work",
    "About",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* NAVBAR INNER WRAPPER */}
      <div className="flex items-center justify-between px-6 md:px-18 py-3 md:py-3 font-sans h-20 md:h-[100px]">
        
        {/* ✅ Logo container (slightly shifted left) */}
        <div className="h-full flex items-center -ml-10 md:-ml-6 mt-6 md:mt-0">
          <img
            src={logo}
            alt="Mothi Logo"
            className="h-[250%] md:h-[180%] object-contain scale-110 md:scale-125"
          />
        </div>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-white text-[15px] font-medium">
          {menuLinks.map((link, index) => (
            <li
              key={index}
              className="hover:opacity-80 transition-opacity duration-200 cursor-pointer flex items-center gap-1"
            >
              {link}
              <span className="text-sm font-bold">+</span>
            </li>
          ))}
          <button className="bg-[#D3E68A] text-black px-5 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity duration-200">
            Get Started
          </button>
        </ul>

        {/* ✅ Mobile Menu Button (aligned, bigger icon) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden bg-[#D3E68A] text-black p-4 rounded-full transition-all duration-300 z-50 flex items-center justify-center"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* ✅ Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-[80vh] bg-[#FFF9ED] flex flex-col px-6 py-6 rounded-b-3xl shadow-xl text-[#4A3B2E] text-lg font-medium"
          >
            {/* Header Row with Larger Logo + Close Button */}
            <div className="flex justify-between items-center mb-6 h-10 -ml-5">
              <img
                src={logoblack}
                alt="Mothi Logo"
                className="h-32 object-contain scale-110 -ml-3"
              />
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col space-y-4 mt-6">
              {menuLinks.map((link, index) => (
                <li
                  key={index}
                  className="border-b border-[#d4d4d4] pb-3 flex justify-between items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
                >
                  {link}
                  <span className="text-xl font-bold">+</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="bg-[#D3E68A] text-black px-6 py-3 rounded-full font-semibold mt-auto w-[60%] md:w-[30%] mx-auto mb-2 hover:opacity-90 transition-opacity duration-200">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

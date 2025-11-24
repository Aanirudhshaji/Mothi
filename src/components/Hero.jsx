import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

import { heroImage } from "../assets/image";
import circleVideo from "../assets/circle.mp4";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroImage}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
        />

        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 px-6 md:px-12">
          
          {/* Heading */}
          <motion.h1
            className="text-white text-3xl sm:text-4xl md:text-6xl font-serif leading-tight md:leading-[1.2]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="block md:hidden">
              The best way to design and develop a property in the country
            </span>

            <span className="hidden md:block">
              The best way to design
              <br />
              and develop a property in
              <br />
              the country
            </span>
          </motion.h1>

          {/* Button */}
          <motion.div
            className="mt-8 flex justify-center items-center space-x-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={() => {
                const section = document.getElementById("work");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#607C3C] text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-[#D3E68A] transition-all"
            >
              <span className="font-semibold">Get Started</span>
              <FiArrowRight className="text-xl" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sticky Video MUST BE OUTSIDE Hero */}
      <StickyCircleVideo />
    </>
  );
}

/* ---------------------------------------------------------- */
/*          STICKY CIRCLE VIDEO COMPONENT (FULLY WORKING)     */
/* ---------------------------------------------------------- */
function StickyCircleVideo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Small Floating Circle (Bottom Left) */}
      {!open && (
        <motion.div
          onClick={() => setOpen(true)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-26 right-6 z-50 w-15 h-15 rounded-full overflow-hidden cursor-pointer shadow-xl ring-2 ring-white"
        >
          <video
            src={circleVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* Expanded Popup Video */}
          {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-999"
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-[90%] max-w-md max-h-[90vh] rounded-3xl overflow-hidden shadow-xl bg-black"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-1000 text-white bg-black/60 backdrop-blur-md p-2 rounded-full text-xl"
            >
              ✕
            </button>

            {/* The video itself */}
            <video
              src={circleVideo}
              autoPlay
              controls
              className="w-full h-full object-contain bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

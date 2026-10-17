import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GetStartedButton from "./GetStartedButton";

import { heroImage, heroMobileImage, heroPoster } from "../assets/image";
import circleVideo from "../assets/circle-deploy.mp4";
import circlePoster from "../assets/circle-poster.webp";

export default function Hero() {
  const [heroSource, setHeroSource] = useState(() =>
    window.matchMedia("(max-width: 767px)").matches ? heroMobileImage : heroImage
  );

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 767px)");
    const updateHeroSource = () => {
      setHeroSource(mobileViewport.matches ? heroMobileImage : heroImage);
    };

    mobileViewport.addEventListener("change", updateHeroSource);
    return () => mobileViewport.removeEventListener("change", updateHeroSource);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroSource}
          poster={heroPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />

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
              Architects in Kerala designing beautiful homes for modern living
            </span>

            <span className="hidden md:block">
              Architects in Kerala
              <br />
              designing beautiful homes
              <br />
              for modern living
            </span>
          </motion.h1>

          {/* Button */}
          <motion.div
            className="mt-8 flex justify-center items-center space-x-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <GetStartedButton
              size="mobileCompact"
              onClick={() => {
                const section = document.getElementById("work");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            />
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
            poster={circlePoster}
            autoPlay
            loop
            muted
            preload="metadata"
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
              poster={circlePoster}
              autoPlay
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

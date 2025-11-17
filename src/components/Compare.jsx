import React, { useState } from "react";

const Compare = ({ before, after }) => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="w-full flex flex-col max-w-8xl mx-auto items-center text-center py-8 md:py-16 px-6 md:px-12 lg:px-20 bg-[#FAF7ED]">

      {/* Heading */}
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-serif text-[#0C310A] leading-tight">
          Designed to blend in,<br />
          <span className="font-bold">naturally stands out.</span>
        </h2>
      </div>

      {/* Compare Slider */}
      <div className="relative w-full h-80 md:h-150 mt-12 overflow-hidden rounded-2xl">
        <div className="relative w-full h-full">

          {/* BEFORE IMAGE */}
          <img
            src={before}
            alt="Before"
            className="absolute top-0 left-0 w-full h-full object-cover object-left"
            style={{
              clipPath: `inset(0 ${100 - sliderValue}% 0 0)`
            }}
          />

          {/* AFTER IMAGE */}
          <img
            src={after}
            alt="After"
            className="absolute top-0 left-0 w-full h-full object-cover object-left"
            style={{
              clipPath: `inset(0 0 0 ${sliderValue}%)`
            }}
          />

          {/* Divider Line */}
          <div
            className="absolute top-0 h-full w-0.5 bg-white"
            style={{ left: `${sliderValue}%` }}
          ></div>

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-white h-[60px] w-[60px] flex items-center justify-center rotate-90"
            style={{ left: `${sliderValue}%` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </div>

          {/* Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Compare;

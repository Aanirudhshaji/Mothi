import React from "react";
import { contactbg } from "../assets/image";

const ContactSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background */}
      <img
        src={contactbg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative w-full max-w-[1450px] px-4 md:px-10 lg:px-20 pt-20 md:pt-32 pb-10">

        {/* FORM CONTAINER */}
        <div
          className="mx-auto bg-white/60 backdrop-blur-xl shadow-2xl rounded-[40px] p-6 md:p-10 w-full max-w-2xl"
        >
          {/* FORM HEADINGS */}
          <h2 className="text-center text-[26px] md:text-[30px] font-semibold text-black">
            Leading 🏛️ Architects
            <br />
            <span className="text-gray-600 font-normal">Deserve Exceptional Tools</span>
          </h2>

          {/* FORM */}
          <form className="mt-8 space-y-6">

            {/* NAME */}
            <div>
              <label className="block text-black mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="
                  w-full 
                  bg-transparent 
                  border-b 
                  border-gray-400 
                  focus:outline-none 
                  py-2
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-black mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Work Email"
                className="
                  w-full 
                  bg-transparent 
                  border-b 
                  border-gray-400 
                  focus:outline-none 
                  py-2
                "
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-black mb-1">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows={4}
                className="
                  w-full 
                  bg-transparent 
                  border-b 
                  border-gray-400 
                  focus:outline-none 
                  py-2 
                  resize-none
                "
              ></textarea>
            </div>

            {/* BUTTON */}
            <div className="pt-4">
              <button
                type="submit"
                className="
                  w-full 
                  bg-black 
                  text-white 
                  py-3 
                  rounded-xl 
                  text-lg 
                  hover:bg-black/80 
                  transition
                "
              >
                Request Demo
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { logo } from "../assets/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 px-6 md:px-20 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 border-b border-gray-700 pb-14">
        
        {/* LEFT SIDE — Logo + Tagline */}
        <div className="flex-1">
          <img
            src={logo}
            alt="Mothi Logo"
            className="md:h-44 h-32 -ml-10 md:-ml-12 w-auto brightness-0 invert mb-6"
          />

         <p className="text-gray-400 text-sm leading-relaxed -mt-12 md:-mt-16  max-w-xs md:max-w-none">
          Creating timeless, climate-responsive architecture rooted
          <span className="hidden md:inline"><br /></span>
          in Kerala’s natural materials and design traditions.
        </p>
        </div>

        {/* RIGHT SIDE — Contact Section */}
        <div className="flex-1 md:max-w-sm">
          <h3 className="text-gray-200 text-lg font-medium mb-4">Contact</h3>
          <div className="border-t border-gray-700 pt-6 space-y-8">

            <div>
              <p className="text-gray-100 font-medium text-base">
                General Inquiries
              </p>
              <p className="text-gray-400 text-sm">info@mothiarchitects.com</p>
              <p className="text-gray-400 text-sm">( +91 ) 98765 43210</p>
            </div>

            <div>
              <p className="text-gray-100 font-medium text-base">
                Media Inquiries
              </p>
              <p className="text-gray-400 text-sm">media@mothiarchitects.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* === Bottom Row === */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between gap-8 md:gap-0 text-sm text-gray-400">
        
        {/* Bottom Left */}
        <div className="space-y-1 text-center md:text-left">
          <p>© {new Date().getFullYear()} Mothi Varghese Architects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

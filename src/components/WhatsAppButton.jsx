import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919400056464" // 👉 Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        bg-[#25D366] 
        text-white 
        p-4 
        rounded-full 
        shadow-lg 
        hover:scale-110 
        transition-transform 
        duration-300 
        z-50
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

import { useRef, useState, useEffect } from "react";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { heroImage } from "../assets/image";

const testimonials = [
  {
    id: 1,
    message:
      "Incredible attention to detail! Saeed made our interface seamless and engaging.",
    name: "Tom Frank",
    role: "Founder @Manajer",
    video: heroImage,
  },
  {
    id: 2,
    message:
      "The design quality was exceptional — exceeded our expectations.",
    name: "Sarah Wilson",
    role: "CEO @BrightTech",
    video: heroImage,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const data = testimonials[index];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnd = () => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    };

    video.addEventListener("ended", handleEnd);
    return () => video.removeEventListener("ended", handleEnd);
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="w-full px-6 md:px-16 lg:px-20 py-8 bg-[#FAF7ED]">
      <div className="grid md:grid-cols-2 gap-12 md:gap-0 items-center">

        {/* LEFT – VIDEO (Visible Only on Desktop) */}
        <div className="relative w-full h-[500px] hidden md:block">
          <video
            ref={videoRef}
            src={data.video}
            autoPlay
            muted={muted}
            playsInline
            loop={true}
            className="w-full h-full object-cover rounded-2xl md:rounded-r-none"
          />

          <button
            onClick={() => setMuted(!muted)}
            className="absolute bottom-4 left-4 bg-white text-black rounded-full p-3 shadow"
          >
            {muted ? <IoVolumeMuteOutline size={22} /> : <IoVolumeHighOutline size={22} />}
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#ffffff] p-10 rounded-2xl md:rounded-l-none h-full flex flex-col justify-center">

          {/* Dots */}
          <div className="flex gap-2 mb-6">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  index === i ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <h2 className="text-[34px] font-semibold leading-snug max-w-lg">
            {data.message}
          </h2>

          <p className="text-gray-800 mt-6 text-lg font-medium">{data.name},</p>
          <p className="text-gray-400 text-md">{data.role}</p>

          {/* MOBILE VIDEO PLACED HERE */}
          <div className="block md:hidden mt-8">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
              <video
                ref={mobileVideoRef}
                src={data.video}
                autoPlay
                muted={muted}
                playsInline
                loop={true}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex gap-12 mt-20 text-lg">
            <button onClick={prev} className="border-b border-black pb-1">
              Previous
            </button>
            <button onClick={next} className="border-b border-black pb-1">
              Next
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

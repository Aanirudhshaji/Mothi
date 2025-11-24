import React, { useRef, useState } from "react";
import { Projectbg, Project1, img1, img2, img3, img4, img5, img6, img7, img8, img9 } from "../assets/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Thamaraa Residence",
    category: "Urban Living Spaces",
    image: img1,
    location: "Matool, Kannur",
    floor: "3473 sq.ft",
    plot: "25 cents",

    images: [ img1, img2, img3, img4, img5, img6, img7, img8, img9 ],
  },
  {
    title: "Mr.Biju Thomas and family",
    category: "Urban Living Spaces",
    image: Project1,
    location: "Angamaly",
    floor: "3473 sq.ft",
    plot: "25 cents",

    images: [Project1, Project1, Project1, Project1, Project1],
  },
  {
    title: "Mr.Biju Thomas and family",
    category: "Urban Living Spaces",
    image: Project1,
    location: "Angamaly",
    floor: "3473 sq.ft",
    plot: "25 cents",

    images: [Project1, Project1, Project1, Project1, Project1],
  },
  {
    title: "Mr.Biju Thomas and family",
    category: "Urban Living Spaces",
    image: Project1,
    location: "Angamaly",
    floor: "3473 sq.ft",
    plot: "25 cents",

    images: [Project1, Project1, Project1, Project1, Project1],
  },
];


const Projects = () => {
  const scrollRef = useRef(null);

  const [hoverIndex, setHoverIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // ⭐ POPUP STATES ADDED
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openPopup = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
    setIsPopupOpen(true);
  };

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth =
      container.firstChild.childNodes[0].offsetWidth + 24;

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="px-4 md:px-10 lg:px-20 py-16 bg-[#FAF7ED]">

        {/* MAIN ROUNDED AREA */}
        <div className="rounded-3xl pb-20 pt-10 overflow-hidden relative">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={Projectbg}
              className="w-full h-full object-cover "
              alt="bg"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* HEADER */}
          <div className="relative z-20 px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between">

            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-semibold text-white drop-shadow-lg text-center md:text-left">
              Innovative Designs
            </h2>

            {/* DESKTOP ARROWS */}
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </div>

          {/* SLIDER */}
          <div
            ref={scrollRef}
            className="relative z-20 mt-16 px-6 md:px-12 pl-6 md:pl-12 flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-pl-6 md:scroll-pl-12"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="snap-start relative group"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => openPopup(project)} // ⭐ ADDED
              >

                {/* CARD */}
                <div className="w-[300px] md:w-[480px] h-[350px] md:h-[460px]
                                bg-white rounded-3xl border-8 md:border-12 border-white
                                overflow-hidden relative shadow-xl
                                cursor-none md:cursor-none group">

                  {/* Image */}
                  <img
                    src={project.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />

                  {/* Floating Label */}
                  <div className="
                    absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2
                    bg-white/50 md:bg-white/10 backdrop-blur-xl shadow-xl
                    rounded-xl md:rounded-2xl
                    px-4 py-3 md:px-6 md:py-4
                    w-[90%] sm:w-[75%] md:w-[85%]
                  ">
                    <span className="text-[11px] sm:text-xs md:text-sm text-gray-700 block">
                      {project.category}
                    </span>

                    <h3 className="text-sm md:text-lg font-semibold leading-snug mt-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* CUSTOM CURSOR */}
                  {hoverIndex === index && (
                    <div
                      className="pointer-events-none text-center absolute z-40 flex items-center justify-center w-24 h-24 rounded-full border-2 border-white bg-white/20 backdrop-blur-xl text-white font-semibold text-[8px] font-sans uppercase transition duration-150"
                      style={{ top: cursorPos.y, left: cursorPos.x, transform: "translate(-50%, -50%)" }}
                    >
                      View Project
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ⭐ MOBILE ARROW BUTTONS INSIDE BACKGROUND ⭐ */}
          <div
            className="
              md:hidden
              absolute bottom-3 left-1/2 -translate-x-1/2
              z-30
              flex gap-5
            "
          >
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>

      </section>

      {/* ⭐⭐⭐ POPUP MODAL (Only Added, Nothing Removed) ⭐⭐⭐ */}
      {isPopupOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-6">
          <div className="bg-white w-full h-full md:h-[90%] md:w-[90%] rounded-xl overflow-hidden flex flex-col md:flex-row relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute right-4 top-4 z-50 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            >
              ✕
            </button>

            {/* LEFT MAIN IMAGE */}
            <div className="relative flex-1 bg-black flex items-center justify-center">
              <img
                src={selectedProject.images[activeImage]}
                className="w-full h-full object-cover"
              />

              {/* LEFT ARROW */}
              <button
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === 0 ? selectedProject.images.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center shadow"
              >
                <ChevronLeft />
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === selectedProject.images.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center shadow"
              >
                <ChevronRight />
              </button>
            </div>

            {/* RIGHT DETAILS PANEL */}
            <div className="w-full md:w-[360px] p-6 overflow-y-auto">
              <h2 className="text-2xl font-semibold">{selectedProject.title}</h2>
              <div className="mt-3 text-gray-700 space-y-1">
                <p><strong>Location:</strong> {selectedProject.location}</p>
                <p><strong>Floor area:</strong> {selectedProject.floor}</p>
                <p><strong>Plot area:</strong> {selectedProject.plot}</p>
              </div>
              <p className="text-gray-600 mt-2">{selectedProject.category}</p>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3 mt-6">
                {selectedProject.images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`cursor-pointer border-2 rounded-lg overflow-hidden ${
                      activeImage === i ? "border-red-500" : "border-transparent"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

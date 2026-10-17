import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Project1, img1, img2, img3, img4, img5, img6, img7, img8, img9 } from "../assets/image";
import { X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Thamaraa Residence",
    category: "Urban Living Spaces",
    image: img1,
    location: "Matool, Kannur",
    floor: "1585 sq.ft",
    plot: "25 cents",

    images: [ img1, img2, img3, img4, img5, img6, img7, img8, img9 ],
  },
  {
    title: "Raag Malhar",
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
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const mobileControlsRef = useRef(null);

  const [hoverIndex, setHoverIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // ⭐ POPUP STATES ADDED
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const galleryTouchStartX = useRef(null);
  const galleryImageCount = selectedProject?.images.length ?? 0;
  const firstVisibleDot = Math.min(
    Math.max(activeImage - 1, 0),
    Math.max(galleryImageCount - 3, 0)
  );
  const visibleGalleryDots = Array.from(
    { length: Math.min(galleryImageCount, 3) },
    (_, index) => firstVisibleDot + index
  );

  // ── GSAP ScrollTrigger animations ──
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(min-width: 768px)", () => {
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
                end: "top 40%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        const cardViewport = scrollRef.current;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!cardViewport || !panelRef.current || reduceMotion) return;

        const horizontalDistance = () => Math.max(
          0,
          cardViewport.scrollWidth - cardViewport.clientWidth
        );

        if (horizontalDistance() > 0) {
          gsap.to(cardViewport, {
            scrollLeft: horizontalDistance,
            ease: "none",
            scrollTrigger: {
              trigger: panelRef.current,
              start: () => {
                const navbarHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 0;
                return `top top+=${Math.round(navbarHeight + 8)}`;
              },
              end: () => `+=${horizontalDistance()}`,
              scrub: 1,
              pin: panelRef.current,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      });

      return () => media.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isPopupOpen) return undefined;

    const scrollY = window.scrollY;
    const body = document.body;
    const previousStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      Object.assign(body.style, previousStyles);
      window.scrollTo(0, scrollY);
    };
  }, [isPopupOpen]);

  const handleGalleryTouchStart = (event) => {
    galleryTouchStartX.current = event.changedTouches[0].clientX;
  };

  const handleGalleryTouchEnd = (event) => {
    if (galleryTouchStartX.current === null) return;

    const swipeDistance = event.changedTouches[0].clientX - galleryTouchStartX.current;
    galleryTouchStartX.current = null;

    if (Math.abs(swipeDistance) < 45) return;

    setActiveImage((current) => {
      const imageCount = selectedProject.images.length;
      return swipeDistance < 0
        ? (current + 1) % imageCount
        : (current - 1 + imageCount) % imageCount;
    });
  };

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

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth || 1;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveSlide(Math.min(Math.max(index, 0), projects.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section ref={sectionRef} className="w-full min-w-0 px-6 md:px-12 lg:px-20 pt-10 pb-3 md:py-12 bg-[#FAF7ED]">

        {/* MAIN ROUNDED AREA */}
        <div ref={panelRef} className="relative w-full min-w-0 overflow-hidden rounded-none pb-2 pt-8 md:pb-8">

          {/* HEADER */}
          <div
            ref={headerRef}
            className="relative z-20 flex flex-col md:flex-row md:items-center md:justify-between"
          >

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-[#173819] text-center md:text-left">
              Innovative Designs
            </h2>

            {/* DESKTOP COUNTER */}
            <div className="hidden md:flex items-center gap-4">
              <span className="text-[#173819]/75 text-sm font-medium tracking-widest font-sans">
                {String(activeSlide + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

          </div>

          {/* SLIDER (SINGLE CARD PER VIEW) */}
          <div
            ref={(el) => { scrollRef.current = el; cardsContainerRef.current = el; }}
            className="relative z-20 mt-8 flex w-full min-w-0 gap-8 overflow-x-auto scrollbar-none"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card w-full shrink-0 snap-center relative group"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => openPopup(project)}
              >

                {/* CARD */}
                <div className="w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[530px]
                                bg-white rounded-3xl border-8 md:border-12 border-white
                                overflow-hidden relative shadow-xl
                                cursor-none md:cursor-none group transition-shadow duration-300 hover:shadow-2xl">

                  {/* Image */}
                  <img
                    src={project.image}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    alt={project.title}
                  />

                  {/* Floating Label */}
                  <div className="
                    absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8
                    bg-white/70 backdrop-blur-xl shadow-xl
                    rounded-2xl border border-white/50
                    px-5 py-3.5 sm:px-6 sm:py-4 md:px-8 md:py-5
                    max-w-[90%] sm:max-w-md md:max-w-lg
                    transition-transform duration-300 group-hover:-translate-y-1
                  ">
                    <span className="text-xs sm:text-sm font-medium tracking-wider text-gray-700 uppercase block">
                      {project.category}
                    </span>

                    <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mt-1">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm text-gray-600 font-sans">
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.floor}</span>
                      <span>•</span>
                      <span>{project.plot}</span>
                    </div>
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

          {/* MOBILE SLIDE COUNTER */}
          <div
            ref={mobileControlsRef}
            className="
              md:hidden
              relative z-30 mt-5 mx-auto w-fit
              flex items-center
            "
          >
            <span className="text-[#173819] text-xs font-semibold tracking-wider bg-white/75 px-3 py-1.5 rounded-full font-sans">
              {String(activeSlide + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
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
              className="absolute right-4 top-4 z-50 w-9 h-9 rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X size={17} aria-hidden="true" />
            </button>

            {/* LEFT MAIN IMAGE */}
            <div
              className="relative flex-1 bg-black flex items-center justify-center"
              onTouchStart={handleGalleryTouchStart}
              onTouchEnd={handleGalleryTouchEnd}
            >
              <img
                src={selectedProject.images[activeImage]}
                className="w-full h-full object-cover"
              />

              {/* Compact gallery controls */}
              <div
                className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/20 bg-black/55 px-1.5 py-0.5 shadow-lg backdrop-blur-md"
                role="group"
                aria-label="Choose project image"
              >
                  {visibleGalleryDots.map((index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Show image ${index + 1} of ${selectedProject.images.length}`}
                      aria-current={activeImage === index ? "true" : undefined}
                      onClick={() => setActiveImage(index)}
                      className="flex h-3.5 w-3.5 items-center justify-center"
                    >
                      <span className={`block rounded-full shadow transition-all duration-200 ${
                        activeImage === index
                          ? "h-1.5 w-1.5 bg-white"
                          : "h-1 w-1 bg-white/55"
                      }`} />
                    </button>
                  ))}
              </div>
            </div>

            {/* RIGHT DETAILS PANEL */}
            <div className="w-full md:w-[360px] bg-white p-5 sm:p-6 overflow-y-auto">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#607C3C]">
                {selectedProject.category}
              </p>
              <h2 className="mt-2 text-2xl font-medium leading-tight text-[#18251A]">
                {selectedProject.title}
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-2.5 font-sans">
                <div className="col-span-2 rounded-xl bg-[#F6F6F1] px-3.5 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">Location</p>
                  <p className="mt-1 text-sm font-medium text-gray-800">{selectedProject.location}</p>
                </div>
                <div className="rounded-xl bg-[#F6F6F1] px-3.5 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">Floor area</p>
                  <p className="mt-1 text-sm font-medium text-gray-800">{selectedProject.floor}</p>
                </div>
                <div className="rounded-xl bg-[#F6F6F1] px-3.5 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">Plot area</p>
                  <p className="mt-1 text-sm font-medium text-gray-800">{selectedProject.plot}</p>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="mt-6 flex items-center justify-between font-sans">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-700">Project gallery</h3>
                <span className="text-xs text-gray-500">{selectedProject.images.length} photos</span>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-3">
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

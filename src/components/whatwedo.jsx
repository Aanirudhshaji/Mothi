import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";

gsap.registerPlugin(ScrollTrigger, Draggable);

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const draggableRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // === GSAP animation ONLY for images ===
      gsap.from(imageRefs.current, {
        y: 80,
        opacity: 0,
        rotation: -5,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      attachDraggable();
    }, sectionRef);

    return () => {
      ctx.revert();
      draggableRef.current?.kill();
    };
  }, []);

  const handleSwap = (direction = "left") => {
    const imgs = imageRefs.current;
    if (!imgs.length) return;

    const top = imgs[imgs.length - 1];
    const distance = direction === "left" ? -150 : 150;

    draggableRef.current?.kill();

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.6 },
      onComplete: () => {
        imgs.unshift(imgs.pop());
        imgs.forEach((el, i) => (el.style.zIndex = i + 1));
        gsap.set(top, { x: 0, opacity: 1 });
        attachDraggable();
      },
    });

    tl.to(top, {
      x: distance,
      rotationY: direction === "left" ? -20 : 20,
      rotation: direction === "left" ? -3 : 3,
      opacity: 0,
    });
  };

  const attachDraggable = () => {
    const imgs = imageRefs.current;
    const top = imgs[imgs.length - 1];
    if (!top) return;

    draggableRef.current?.kill();

    draggableRef.current = Draggable.create(top, {
      type: "x",
      inertia: true,
      bounds: { minX: -150, maxX: 150 },
      onDrag: function () {
        gsap.to(this.target, { rotationY: this.x / 10, duration: 0.1 });
      },
      onRelease: function () {
        gsap.to(this.target, { rotationY: 0, duration: 0.3 });
      },
      onDragEnd: function () {
        const direction = this.x > 0 ? "right" : "left";
        if (Math.abs(this.x) > 80) {
          handleSwap(direction);
        } else {
          gsap.to(this.target, { x: 0, duration: 0.5, ease: "power2.out" });
        }
      },
    })[0];
  };

  // === Slightly irregular positions for realistic depth ===
  const stackTransforms = [
    "rotate(-8deg) translate(10px, 12px)",
    "rotate(4.5deg) translate(-12px, -10px)",
    "rotate(-2.8deg) translate(8px, -8px)",
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAF7ED] py-24 px-6 md:px-24 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center md:gap-0 gap-12">
        {/* === Left Side - Irregular Image Stack === */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative select-none">
          <div className="relative w-[90%] max-w-md h-[300px] md:h-[450px] cursor-grab active:cursor-grabbing">
            {[w1, w2, w3].map((img, i) => (
              <img
                key={i}
                ref={(el) => (imageRefs.current[i] = el)}
                src={img}
                alt={`project-${i}`}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl will-change-transform"
                style={{
                  transform: stackTransforms[i % stackTransforms.length],
                  zIndex: i + 1,
                  pointerEvents: "auto",
                  transition: "transform 0.4s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* === Right Side - Text & Button (No GSAP Animation) === */}
        <div className="relative z-20 w-full md:w-1/2 space-y-6 text-center md:text-left md:pr-4">
          <h2 className="text-[#0C310A] text-3xl md:text-5xl font-serif leading-snug">
            We do it across the country
          </h2>

          <p className="text-[#6B4F4F] text-base md:text-lg leading-relaxed max-w-4xl mx-auto md:mx-0">
            Our design philosophy starts with the 'sense of place', meticulously analyzing the
             tropical light, climate, and unique material story of the region. 
             We create naturally ventilated spaces that connect seamlessly with the outdoors, 
             celebrating simplicity and sustainable function—essential for modern Kerala homes and 
             community projects.
          </p>

          <button className="inline-flex items-center space-x-3 border border-[#607C3C] bg-[#607C3C] rounded-full px-7 py-3 text-white hover:bg-transparent hover:text-[#2E422D] font-medium transition-all shadow-md">
            <span>See Our Projects</span>
            <FiArrowRight className="text-lg mt-px" />
          </button>
        </div>
      </div>
    </section>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/whatwedo";
import Footer from "./components/footer";
import WhatDo from "./components/whatdo";
import Cmp from "./components/Compare";
import Service from "./components/services";
import Project from "./components/project";
import Contact from "./components/contact";
import WhatsAppButton from "./components/WhatsAppButton";
import FAQ from "./components/faq"
import Testimonial from "./components/Testimonial";

// Import your images for comparison
import beforeImg from "./assets/projectimg/01.webp";
import afterImg from "./assets/projectimg/13.webp";

export default function App() {
  return (
    <div className="font-serif">
      
      <Navbar />

      {/* Home */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <WhatWeDo />
      </section>

      {/* Services */}
      <section id="services">
        <Service />
      </section>

      {/* Work / Projects */}
      <section id="work">
        <Project />
      </section>

      {/* Extra sections */}
      <WhatDo />
      <Testimonial />
      <Cmp before={beforeImg} after={afterImg} />
      <FAQ />

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp Icon */}
      <WhatsAppButton />
    </div>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/whatwedo"; 

export default function App() {
  return (
    <div className="font-serif">
      <Navbar />
      <Hero />
      <WhatWeDo />
    </div>
  );
}

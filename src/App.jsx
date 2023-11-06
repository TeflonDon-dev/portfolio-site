import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section id="Contact">contact</section>
    </div>
  );
};

export default App;

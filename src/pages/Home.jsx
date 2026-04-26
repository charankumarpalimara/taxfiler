import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import WhyChoose from "../components/WhyChoose";
import Process from "../components/Process";
import Packages from "../components/Packages";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-brand-dark">
      <Hero />
      <About />
      <Features />
      <WhyChoose />
      {/* <Process /> */}
      <Testimonials />
      <Contact />
    </div>
  );
}

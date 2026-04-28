import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import WhyChoose from "../components/WhyChoose";
import Process from "../components/Process";
import Packages from "../components/Packages";
import Deliverables from "../components/Deliverables";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-bg-light">
      <Hero />
      <About />
      <Features />
      <WhyChoose />
      <Process />
      {/* <Packages /> */}
      <Deliverables />
      <Testimonials />
      <Contact />
    </div>
  );
}

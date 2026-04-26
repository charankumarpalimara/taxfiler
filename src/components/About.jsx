import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const points = [
    "Proactive tax planning strategies",
    "Dedicated support all year round",
    "Secure, technology-driven processes",
  ];

  return (
    <section id="about" className="py-14 relative overflow-hidden bg-brand-dark">
      {/* Glows */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-brand-purple/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/30 to-brand-purple/20 rounded-[2.5rem] blur-[30px]" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Our Team"
              className="relative rounded-[2.5rem] w-full h-[480px] object-cover border border-white/10 shadow-2xl"
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-brand-orange px-6 py-4 rounded-2xl shadow-2xl z-20"
            >
              <div className="text-4xl font-black text-white font-heading leading-none">15+</div>
              <div className="text-white/80 text-sm font-medium mt-1">Years of Experience</div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-brand-orange/40 text-brand-orange text-sm font-semibold tracking-widest uppercase mb-6">
              About Pumpkin Tax Co
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-snug font-heading">
              More than just accountants. <br className="hidden lg:block" />
              We are your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">
                financial partners.
              </span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-5 text-base">
              At Pumpkin Tax Co, we believe understanding your finances shouldn't be a terrifying experience. We take the "spooky" out of tax season by combining industry-leading expertise with straightforward, transparent communication.
            </p>
            <p className="text-white/60 leading-relaxed mb-8 text-base">
              Our mission is simple: to help small businesses and individuals thrive by taking the heavy lifting off your shoulders. We handle complex compliance so you can focus on what matters most.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-sm font-medium text-white/70">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-brand-purple rounded-full hover:bg-brand-orange transition-all duration-300 shadow-lg shadow-brand-purple/30 hover:-translate-y-1"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

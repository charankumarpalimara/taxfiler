import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const points = [
    "Proactive tax planning strategies",
    "Dedicated support all year round",
    "Secure, technology-driven processes",
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-purple/5 pointer-events-none rounded-bl-[100px]" />

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
            <div className="absolute inset-0 bg-brand-orange/20 rounded-[2.5rem] blur-[30px]" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Our Team"
              className="relative rounded-[2.5rem] w-full h-[480px] object-cover shadow-2xl border border-black/5"
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-brand-orange px-6 py-4 rounded-2xl shadow-xl z-20 border border-brand-orange-light/20"
            >
              <div className="text-4xl font-black text-white font-heading leading-none">15+</div>
              <div className="text-white/90 text-sm font-medium mt-1 font-sans">Years of Experience</div>
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
            <span className="section-tag">
              About TaxCount
            </span>

            <h2 className="mb-6">
              More than just accountants. <br className="hidden lg:block" />
              We are your{" "}
              <span className="gradient-text">
                financial partners.
              </span>
            </h2>

            <p className="text-text-mid leading-relaxed mb-5 text-base font-sans">
              At TaxCount, we specialize in simplifying complex financial landscapes for individuals and businesses worldwide. With over 15 years of dedicated experience, we've helped more than 10,000 clients navigate US and International tax compliance with ease.
            </p>
            <p className="text-text-mid leading-relaxed mb-8 text-base font-sans">
              Our team of expert CPAs and tax professionals combines cutting-edge AI technology with personalized consultation to ensure you save more and stay compliant. Whether you're a US expat, a global entrepreneur, or a local business, we are your trusted partners in growth.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-sm font-medium text-text-dark font-sans">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary bg-brand-purple hover:bg-brand-orange shadow-brand-purple/20"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

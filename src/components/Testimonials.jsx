import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rakesh", review: "Very knowledgeable, fast and efficient team with great customer service. I would definitely recommend PTC." },
  { name: "Sekhar Chebrolu", review: "I recently worked with Pumpkin Tax for my company tax preparation, and I couldn't be more satisfied with the service I received." },
  { name: "Siva Kavuri", review: "Very knowledgeable and helpful. Great service. I strongly recommend Pumpkin for personal tax filing." },
  { name: "Srinivasa Rao Nagineni", review: "They are very professional, prompt and great people to work with. I will definitely use them again for 2024 and going forward." },
  { name: "Ravi A", review: "Best bookkeeping services in Tomball and Cypress." },
  { name: "Kris Krishna", review: "Wonderful experience, very easily done." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 relative overflow-hidden bg-brand-dark border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-brand-orange/40 text-brand-orange text-sm font-semibold tracking-widest uppercase mb-6">
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">What Our Clients Say</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Trusted by businesses and individuals for fast, reliable, and professional tax services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-brand-orange/30 transition-all hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-brand-orange/10 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              <p className="text-white/70 leading-relaxed mb-6 relative z-10 italic text-sm flex-1">"{t.review}"</p>

              <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-auto relative z-10">
                <div className="font-bold text-white font-heading text-sm">{t.name}</div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-white/40">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google"
                    className="w-3.5 h-3.5"
                  />
                  Google Review
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

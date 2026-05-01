import { motion } from "framer-motion";
import { CheckCircle2, Users, Zap, ShieldCheck, MessageSquare, Lock, DollarSign, HeartHandshake, Award } from "lucide-react";

const features = [
  { title: "Tailored Solutions", description: "Industry-specific packages for your unique needs.", icon: <CheckCircle2 className="w-6 h-6" /> },
  { title: "Expert Team", description: "Experienced accountants & tax pros you can trust.", icon: <Users className="w-6 h-6" /> },
  { title: "Effortless Efficiency", description: "User-friendly tech saves time & minimizes errors.", icon: <Zap className="w-6 h-6" /> },
  { title: "Compliance Confidence", description: "We handle complex regulations smoothly.", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Transparency", description: "Clear communication, keeping you informed.", icon: <MessageSquare className="w-6 h-6" /> },
  { title: "Data Security", description: "Industry-leading security measures protect your data.", icon: <Lock className="w-6 h-6" /> },
  { title: "Cost-effective", description: "Competitive pricing & transparent packages.", icon: <DollarSign className="w-6 h-6" /> },
  { title: "Dedicated Support", description: "Friendly & responsive team always available.", icon: <HeartHandshake className="w-6 h-6" /> },
  { title: "Proven Results", description: "Track record of helping businesses thrive.", icon: <Award className="w-6 h-6" /> },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative overflow-hidden bg-brand-light border-y border-black/5">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              Why Choose Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Professional Solutions <br />
              <span className="gradient-text">for your business.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-mid max-w-sm leading-relaxed text-sm font-sans"
          >
            Empowering businesses with tailored tax services and bookkeeping packages. We simplify complexity so you can focus on growth.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-white border border-slate-100 rounded-md p-8 overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(75,36,116,0.08)] transition-all duration-500 group"
            >
              {/* Subtle hover background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-brand-orange/10 transition-all" />

              <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-purple mb-2 group-hover:text-brand-orange transition-colors font-heading">
                {feature.title}
              </h3>
              <p className="text-text-light text-sm leading-relaxed font-sans">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id="features" className="py-14 relative overflow-hidden bg-brand-dark border-t border-white/5">
      {/* Animated glows */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 -left-20 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 rounded-full border border-brand-orange/40 text-brand-orange text-sm font-semibold tracking-widest uppercase mb-6"
            >
              Why Choose Pumpkin Tax Co
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white leading-snug font-heading"
            >
              Spooktacularly Simple Solutions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-sm leading-relaxed text-sm"
          >
            Tired of tax season scares? We offer tailored tax services and bookkeeping packages for all business entities.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-brand-orange/30 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-orange/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-brand-orange/10 transition-all" />
              <div className="w-12 h-12 bg-brand-orange/20 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-orange transition-colors font-heading">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

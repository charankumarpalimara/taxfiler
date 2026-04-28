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
    <section id="features" className="py-20 relative overflow-hidden bg-bg-light border-y border-black/5">
      
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
              Why Choose Pumpkin Tax Co
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Spooktacularly Simple Solutions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-mid max-w-sm leading-relaxed text-sm font-sans"
          >
            Tired of tax season scares? We offer tailored tax services and bookkeeping packages for all business entities.
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
              className="glass-card group p-8 overflow-hidden relative"
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

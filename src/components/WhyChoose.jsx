import { motion } from "framer-motion";
import { Settings, Users, Zap, MessageSquare, ShieldCheck, DollarSign, Headset, BarChart3 } from "lucide-react";

const reasons = [
  { title: "Tailored Solutions", description: "Customized accounting and tax strategies designed for your business.", icon: <Settings className="w-6 h-6" /> },
  { title: "Expert Team", description: "Certified professionals with years of tax law and financial management experience.", icon: <Users className="w-6 h-6" /> },
  { title: "Effortless Efficiency", description: "AI-powered systems automate tedious tasks, saving you time.", icon: <Zap className="w-6 h-6" /> },
  { title: "Clear Communication", description: "We explain complex financial concepts in simple terms.", icon: <MessageSquare className="w-6 h-6" /> },
  { title: "Industry-leading Security", description: "Enterprise-grade encryption and strict confidentiality protocols.", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Cost-effective Value", description: "Premium accounting services at competitive rates.", icon: <DollarSign className="w-6 h-6" /> },
  { title: "Dedicated Support", description: "Here to answer your questions and provide guidance throughout the year.", icon: <Headset className="w-6 h-6" /> },
  { title: "Proven Results", description: "Join hundreds of satisfied clients who have optimized their finances.", icon: <BarChart3 className="w-6 h-6" /> },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 relative overflow-hidden bg-white border-y border-black/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag border-brand-purple text-brand-purple bg-brand-purple/5">
            Our Advantages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-4 font-heading">Why Choose Pumpkin</h2>
          <p className="text-text-mid text-lg max-w-xl mx-auto font-sans">
            We combine human expertise with AI precision to deliver unmatched financial services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border border-brand-purple/10 shadow-lg shadow-brand-purple/5 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-brand-purple/15 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/5 to-brand-orange/5 rounded-full blur-[40px] pointer-events-none group-hover:from-brand-purple/10 group-hover:to-brand-orange/10 transition-all duration-500" />

              <div className="w-14 h-14 bg-gradient-to-br from-brand-purple/10 to-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-purple mb-3 font-heading group-hover:text-brand-orange transition-colors">{reason.title}</h3>
              <p className="text-text-mid text-sm leading-relaxed font-sans">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

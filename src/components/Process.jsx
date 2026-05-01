import { motion } from "framer-motion";
import { Package, UserPlus, UploadCloud, Coffee } from "lucide-react";

const steps = [
  { number: "01", title: "Choose Your Plan", description: "Select the package that best fits your business size and needs. Transparent pricing with no hidden fees.", icon: <Package className="w-7 h-7" /> },
  { number: "02", title: "Connect with Your Pro", description: "Meet your dedicated accountant who will guide you through the process and answer all your questions.", icon: <UserPlus className="w-7 h-7" /> },
  { number: "03", title: "Share Your Information", description: "Securely upload documents and provide basic financial data using our encrypted, easy-to-use portal.", icon: <UploadCloud className="w-7 h-7" /> },
  { number: "04", title: "Relax & Grow", description: "We handle accounting, taxes, and compliance while you focus on running your business.", icon: <Coffee className="w-7 h-7" /> },
];

export default function Process() {
  return (
    <section id="process" className="py-20 relative overflow-hidden bg-bg-light border-y border-black/5">
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="section-tag">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-4 font-heading">
            Simple & Efficient <span className="gradient-text">Process</span>
          </h2>
          <p className="text-text-mid leading-relaxed font-sans">
            Ditch the stress and focus on what you do best. Our 4-step process ensures accuracy, saves time, and gives you ultimate peace of mind.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card group p-8 relative overflow-hidden"
            >
              {/* Step number watermark */}
              <div className="absolute top-4 right-6 text-[5rem] font-black text-black/[0.03] leading-none pointer-events-none font-heading select-none transition-colors group-hover:text-brand-orange/10">
                {step.number}
              </div>
              {/* Icon */}
              <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                {step.icon}
              </div>
              <div className="text-xs font-bold text-brand-orange tracking-widest uppercase mb-2 font-sans">{step.number}</div>
              <h3 className="text-lg font-bold text-brand-purple mb-3 font-heading">{step.title}</h3>
              <p className="text-text-light text-sm leading-relaxed font-sans">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

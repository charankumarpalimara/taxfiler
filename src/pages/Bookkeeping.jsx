import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BarChart2, FileText, Clock, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: <BarChart2 className="w-6 h-6" />, title: "Expert Transaction Categorization", description: "We meticulously categorize your transactions, providing a clear understanding of where your money is flowing." },
  { icon: <FileText className="w-6 h-6" />, title: "Actionable Financial Reports", description: "Gain valuable insights with customizable Profit & Loss statements and Balance Sheets." },
  { icon: <Clock className="w-6 h-6" />, title: "Save Time & Resources", description: "Focus on your core business activities while we handle the bookkeeping." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Improved Accuracy & Transparency", description: "Gain confidence in your financial data with our meticulous record-keeping." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Enhanced Decision-Making", description: "Make informed business decisions based on accurate financial insights." },
  { icon: <Users className="w-6 h-6" />, title: "Streamlined Operations", description: "Free yourself from the burden of complex financial tasks." },
];

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Expert Support" },
];

export default function Bookkeeping() {
  return (
    <div className="min-h-screen bg-bg-light pt-24">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-brand-orange/10 rounded-full blur-[160px]" />
          <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-tag">Bookkeeping Services</span>
              <h1 className="text-5xl md:text-6xl font-black text-brand-purple leading-tight mb-6 font-heading">
                AI Bookkeeping <br />
                <span className="gradient-text">Simplified!</span>
              </h1>
              <p className="text-xl text-text-mid leading-relaxed mb-10 max-w-lg font-sans">
                Pumpkin's comprehensive bookkeeping empowers you to focus on running your business. We handle the numbers so you can drive growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="#features"
                  className="btn-secondary"
                >
                  Explore Features
                </a>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-brand-orange/15 rounded-[2.5rem] blur-[30px]" />
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop"
                alt="Bookkeeping Dashboard"
                className="relative rounded-[2.5rem] w-full h-[480px] object-cover border border-black/5 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────── */}
      <section className="py-10 border-y border-black/5 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-black text-brand-orange font-heading mb-1">{s.value}</div>
                <div className="text-text-mid text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────────── */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-4 font-heading">Everything You Need</h2>
            <p className="text-text-mid text-lg max-w-xl mx-auto">Comprehensive tools and services to manage your finances perfectly.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card group p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-brand-orange/10 transition-all" />
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-purple mb-3 font-heading">{feature.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-[2.5rem] p-12 md:p-16 overflow-hidden text-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-heading relative z-10">
              Ready to unlock the power of expert bookkeeping?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Take control of your finances. We'll streamline your records, provide valuable insights, and help you achieve your business growth goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-orange px-8 py-4 rounded-full font-black text-lg hover:bg-slate-100 transition-all hover:-translate-y-1 shadow-xl relative z-10"
            >
              Schedule a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

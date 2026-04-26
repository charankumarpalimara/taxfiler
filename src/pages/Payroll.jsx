import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Cpu, CreditCard, FileCheck, UserCheck, ShieldCheck, BarChart2, HeartHandshake, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: <Cpu className="w-6 h-6" />, title: "Automated Payroll Processing", description: "Eliminate manual data entry and ensure error-free payroll with our AI-powered system." },
  { icon: <CreditCard className="w-6 h-6" />, title: "Effortless Direct Deposit", description: "Streamline payments with secure and instant direct deposit options." },
  { icon: <FileCheck className="w-6 h-6" />, title: "Seamless Tax Withholdings & Filings", description: "Stay compliant with automated tax calculations and filings for federal, state, and local taxes." },
  { icon: <FileCheck className="w-6 h-6" />, title: "Federal, State & Local Tax Forms", description: "Generate and file all necessary tax forms with precision and ease." },
  { icon: <BarChart2 className="w-6 h-6" />, title: "Year-End Forms & Reporting", description: "Navigate year-end tasks effortlessly with automated W-2s and other critical reports." },
  { icon: <BarChart2 className="w-6 h-6" />, title: "Actionable Payroll Reports", description: "Gain valuable insights into your workforce with customizable and real-time reports." },
  { icon: <UserCheck className="w-6 h-6" />, title: "Employee Self-Service Portal", description: "Empower your employees with 24/7 access to paystubs, tax documents, and benefits information." },
  { icon: <HeartHandshake className="w-6 h-6" />, title: "Optional Benefits Administration", description: "Simplify benefits management with integrated health insurance, retirement plans, and more." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Improved Security", description: "Benefit from industry-leading security protocols and data encryption." },
  { icon: <UserCheck className="w-6 h-6" />, title: "Dedicated Payroll Specialist", description: "Get guidance and support of a dedicated payroll specialist who understands your unique needs." },
  { icon: <Zap className="w-6 h-6" />, title: "24/7 AI-powered Support", description: "Access instant answers and support through our intelligent chatbot or live representatives." },
  { icon: <CheckCircle2 className="w-6 h-6" />, title: "Scalability and Flexibility", description: "Our services adapt to your growing business needs and are easy to scale." },
];

const stats = [
  { value: "1000+", label: "Employees Managed" },
  { value: "100%", label: "Compliance Rate" },
  { value: "Zero", label: "Payroll Errors" },
  { value: "24/7", label: "AI Support" },
];

export default function Payroll() {
  return (
    <div className="min-h-screen bg-brand-dark">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-brand-purple/30 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-5 py-2 rounded-full border border-brand-purple/40 text-brand-purple text-sm font-semibold tracking-widest uppercase mb-6">
                Payroll Services
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6 font-heading">
                AI Payroll <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">Done Right.</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
                Ditch the spreadsheets. Embrace next-generation payroll powered by cutting-edge AI — secure, seamless, and built for your team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-purple text-white px-8 py-4 rounded-full font-bold hover:bg-[#3b1d5a] transition-all shadow-lg shadow-brand-purple/30 hover:-translate-y-1"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all hover:-translate-y-1"
                >
                  See All Features
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
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/40 to-brand-orange/20 rounded-[2.5rem] blur-[30px]" />
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop"
                alt="Payroll Automation"
                className="relative rounded-[2.5rem] w-full h-[480px] object-cover border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────── */}
      <section className="py-10 border-y border-white/10 bg-white/5 backdrop-blur">
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
                <div className="text-4xl font-black text-brand-purple font-heading mb-1">{s.value}</div>
                <div className="text-white/50 text-sm font-medium">{s.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Complete Payroll Automation</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Everything you need to manage your team effectively and compliantly.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 hover:border-brand-purple/40 transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-[30px] pointer-events-none group-hover:bg-brand-purple/10 transition-all" />
                <div className="w-11 h-11 bg-brand-purple/20 rounded-xl flex items-center justify-center text-brand-purple mb-5 group-hover:bg-brand-purple group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-heading">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
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
            className="relative bg-gradient-to-br from-brand-purple to-[#3b1d5a] rounded-[2.5rem] p-12 md:p-16 overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-heading relative z-10">
              Ready to experience the future of payroll?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Texas payroll success with AI! Our solutions help you focus on what matters. Explore payroll services powered by AI.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-black text-lg hover:bg-[#e67c00] transition-all hover:-translate-y-1 shadow-xl shadow-brand-orange/30 relative z-10"
            >
              Contact Pumpkin Today <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

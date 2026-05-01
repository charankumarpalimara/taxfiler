import { motion } from "framer-motion";
import { ArrowRight, FileText, Calculator, ShieldCheck, Lightbulb, Clock, BookOpen, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: <FileText className="w-6 h-6" />, title: "Effortless Tax Preparation & Filing", description: "Our experienced professionals handle all aspects of your tax return, ensuring accuracy and maximizing deductions." },
  { icon: <Lightbulb className="w-6 h-6" />, title: "Strategic Tax Planning & Support", description: "We develop personalized tax strategies to minimize your burden and maximize long-term financial goals." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Expert Tax Resolution", description: "Facing unexpected tax challenges? Our certified professionals advocate for you and navigate complexities." },
  { icon: <BookOpen className="w-6 h-6" />, title: "Extensive Tax Education & Resources", description: "Stay informed with our library of resources, articles, webinars, and FAQs." },
  { icon: <Users className="w-6 h-6" />, title: "Dedicated Tax Specialists", description: "Get personalized advice and support from our team of friendly and responsive tax professionals." },
  { icon: <Calculator className="w-6 h-6" />, title: "Seamless Experience", description: "We take the complexity out of taxes, allowing you to focus on what matters most." },
  { icon: <Star className="w-6 h-6" />, title: "Expert Guidance", description: "Our team of experienced and certified professionals ensures accurate and efficient tax solutions." },
  { icon: <Clock className="w-6 h-6" />, title: "Ongoing Support", description: "We're here for you throughout the year, answering your questions and providing guidance." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Peace of Mind", description: "We handle your taxes with confidentiality and security, giving you the peace of mind you deserve." },
  { icon: <Lightbulb className="w-6 h-6" />, title: "Personalized Approach", description: "We tailor our services to your unique needs and goals." },
];

const stats = [
  { value: "$2M+", label: "Tax Savings Achieved" },
  { value: "100%", label: "Filing Accuracy" },
  { value: "15+", label: "Years of Expertise" },
  { value: "5★", label: "Client Rating" },
];

export default function Taxes() {
  return (
    <div className="min-h-screen bg-bg-light pt-24">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-brand-orange/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-tag">
                Tax Services
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-brand-purple leading-tight mb-6 font-heading">
                Expert Tax Solutions for <br />
                <span className="gradient-text">Global Success.</span>
              </h1>
              <p className="text-xl text-text-mid leading-relaxed mb-10 max-w-lg font-sans">
                Navigate the complexities of US and International tax compliance with our expert CPAs. We simplify filing, planning, and resolution for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="#features"
                  className="btn-secondary"
                >
                  Explore Services
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
              <div className="absolute inset-0 bg-brand-orange/20 rounded-[2.5rem] blur-[30px]" />
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
                alt="Tax Services"
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
                <div className="text-text-mid text-sm font-medium font-sans">{s.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-4 font-heading">Complete Tax Solutions</h2>
            <p className="text-text-mid text-lg max-w-xl mx-auto font-sans">Everything you need to stay compliant and maximize your financial health.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-white border border-slate-100 rounded-md p-8 overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(75,36,116,0.08)] transition-all duration-500 group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-brand-orange/10 transition-all" />
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-purple mb-3 font-heading">{feature.title}</h3>
                <p className="text-text-light text-sm leading-relaxed font-sans">{feature.description}</p>
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
            className="relative bg-brand-purple border border-black/5 rounded-[2.5rem] p-12 md:p-16 overflow-hidden text-center shadow-2xl"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 font-heading relative z-10">
              Expert Tax Resolution for <br className="hidden md:block" />Unexpected Challenges
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10 font-sans">
              Our business tax specialists can guide you to a brighter financial future — stress-free and compliant.
            </p>
            <Link
              to="/contact"
              className="btn-orange text-lg"
            >
              Get a Free Consultation Today <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

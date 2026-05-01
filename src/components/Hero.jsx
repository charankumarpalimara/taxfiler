import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-48 lg:pb-20 overflow-hidden bg-bg-light">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-purple/5 blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-orange/10 blur-[120px]" />
      </div>

      {/* Grid pattern for a technical/modern feel */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-tag flex items-center gap-2 w-fit mx-auto lg:mx-0"
            >
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>Tax Filed in 24 Hours • Expert Consultation</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-brand-purple tracking-tight mb-8 leading-[1.05] font-heading">
              Expert Tax filing for{" "}
              <span className="gradient-text">
                Individuals & Businesses
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-text-mid mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Get your taxes filed accurately and on time with our AI-powered platform and expert CPA support. 15+ years of experience in US and International tax compliance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Schedule Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/taxes"
                className="btn-secondary"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-text-light">
              {["No hidden fees", "Expert support", "100% Secure"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-purple blur-[80px] opacity-10 rounded-[3rem]" />
            <div className="relative rounded-[2rem] bg-white p-2 shadow-2xl border border-black/5">
              <img
                src="/hero-dashboard.png"
                alt="AI Financial Dashboard"
                className="rounded-[1.5rem] w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-8 bg-white border border-black/5 p-5 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-brand-purple font-bold text-sm font-heading">Tax Filed!</div>
                  <div className="text-text-light text-xs font-sans">Saved $4,280 this year</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

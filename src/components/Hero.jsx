import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-48 lg:pb-20 overflow-hidden bg-brand-dark">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-purple/40 blur-[130px]" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-orange/20 blur-[130px]" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

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
              className="inline-flex items-center px-4 py-2 rounded-full bg-brand-purple/30 border border-brand-purple/50 mb-8"
            >
              <Sparkles className="w-4 h-4 text-brand-orange mr-2" />
              <span className="text-sm font-semibold text-brand-light">Smart & Simple Tax Solutions</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-[1.05] font-heading">
              Unlock the power of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">
                AI for your business
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Accounting, Payroll, and Tax Services designed to simplify your finances, keep you compliant, and let you focus on growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="https://pumpkintaxco.com/book-a-demo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-orange rounded-full hover:bg-[#e67c00] transition-all shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:-translate-y-1"
              >
                Schedule a Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://pumpkin.mytaxportal.online/#/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 border border-white/10 transition-all shadow-lg hover:-translate-y-1"
              >
                Register Your Company
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-white/40">
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
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-purple blur-[80px] opacity-25 rounded-[3rem]" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-brand-purple/20 to-brand-dark p-2 shadow-2xl border border-brand-purple/30">
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
              className="absolute -bottom-6 -left-8 bg-brand-dark border border-white/10 p-5 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm font-heading">Tax Filed!</div>
                  <div className="text-white/40 text-xs">Saved $4,280 this year</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

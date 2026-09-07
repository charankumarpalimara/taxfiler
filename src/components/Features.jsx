import { motion } from "framer-motion";
import {
  CheckCircle2,
  Users,
  Zap,
  ShieldCheck,
  MessageSquare,
  Lock,
  DollarSign,
  HeartHandshake,
  Award,
  Sparkles,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    number: "01",
    title: "Tailored Solutions",
    tag: "Custom Fit",
    description: "Industry-specific packages designed precisely for your business entity, revenue model, and growth stage.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    highlight: "Custom Tax Strategy",
  },
  {
    number: "02",
    title: "Expert CPA Team",
    tag: "Licensed CPAs",
    description: "Experienced accountants and tax professionals providing strategic guidance and ensuring total IRS compliance.",
    icon: <Users className="w-6 h-6" />,
    highlight: "15+ Years Avg. Experience",
  },
  {
    number: "03",
    title: "Effortless Efficiency",
    tag: "Automated Tech",
    description: "Intelligent digital workflows and smart portal uploads that save valuable time and eliminate calculation errors.",
    icon: <Zap className="w-6 h-6" />,
    highlight: "24–48h Turnaround",
  },
  {
    number: "04",
    title: "Compliance Confidence",
    tag: "Audit Protection",
    description: "Proactive adherence to multi-state and federal tax regulations, keeping your business safe from penalties.",
    icon: <ShieldCheck className="w-6 h-6" />,
    highlight: "100% Accurate Filings",
  },
  {
    number: "05",
    title: "Transparent Reporting",
    tag: "Real-Time Tracking",
    description: "Clear communication, real-time status dashboards, and timely updates so you always know where you stand.",
    icon: <MessageSquare className="w-6 h-6" />,
    highlight: "Live Milestone Updates",
  },
  {
    number: "06",
    title: "Bank-Grade Security",
    tag: "256-Bit SSL",
    description: "Institutional-level 256-bit encryption, SOC-2 compliant storage, and strict confidential data handling.",
    icon: <Lock className="w-6 h-6" />,
    highlight: "Encrypted Cloud Vault",
  },
  {
    number: "07",
    title: "Cost-Effective Pricing",
    tag: "Flat Rate",
    description: "Transparent, predictable pricing tiers with zero surprise charges or hidden hourly consultation fees.",
    icon: <DollarSign className="w-6 h-6" />,
    highlight: "Zero Hidden Fees",
  },
  {
    number: "08",
    title: "Dedicated Support",
    tag: "Direct Access",
    description: "A responsive, friendly team of specialists ready to answer questions and resolve inquiries via phone, email, or chat.",
    icon: <HeartHandshake className="w-6 h-6" />,
    highlight: "Prompt Assistance",
  },
  {
    number: "09",
    title: "Proven Track Record",
    tag: "5,000+ Clients",
    description: "Decades of verified client satisfaction helping startups, SMBs, and enterprises optimize cash flow and scale.",
    icon: <Award className="w-6 h-6" />,
    highlight: "$10M+ Tax Saved",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-10 relative overflow-hidden bg-white ">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[linear-gradient(to_right,#EDF2F7_1px,transparent_1px),linear-gradient(to_bottom,#EDF2F7_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[450px] h-[450px] bg-brand-accent/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag flex items-center gap-2 w-fit mb-4"
            >
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span>Why Choose NexGen</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading leading-[1.15]"
            >
              <span className="text-brand-primary">Enterprise-Grade Capabilities,</span> <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary">
                Personalized for Your Growth.
              </span>
            </motion.h2>
          </div>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-mid max-w-md text-base leading-relaxed font-sans"
          >
            We eliminate accounting complexity and compliance stress so you can focus on building your business with absolute clarity.
          </motion.p> */}
        </div>

        {/* Unique Modern Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="group bg-white rounded-xl p-8 border border-[#DCE6F2] hover:border-brand-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top indicator border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary transition-all duration-500" />

              {/* Corner soft glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-all pointer-events-none" />

              <div>
                {/* Top Row: Icon + Number & Tag Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-brand-primary/10 border border-brand-primary/15 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    {feature.icon}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-accent/15 text-brand-accent-dark border border-brand-accent/25 tracking-wide">
                      {feature.tag}
                    </span>
                    <span className="text-sm font-bold text-text-light/50 font-heading">
                      {feature.number}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-brand-dark mb-3 font-heading group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-text-mid text-sm leading-relaxed font-sans mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Row: Feature Highlight Tag */}
              {/* <div className="pt-4 border-t border-[#DCE6F2] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  <span>{feature.highlight}</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#EDF2F7] flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive CTA Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h4 className="text-2xl sm:text-3xl font-bold mb-2 font-heading">
              Looking for a custom accounting or tax plan?
            </h4>
            <p className="text-white/80 text-sm sm:text-base font-sans">
              Speak directly with our CPA advisors to design a strategy tailored to your exact needs.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              to="/contact"
              className="btn-orange !py-3.5 !px-7 flex items-center justify-center gap-2 group"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
}


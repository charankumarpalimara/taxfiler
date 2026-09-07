import { motion } from "framer-motion";
import {
  Settings,
  Users,
  Zap,
  MessageSquare,
  ShieldCheck,
  DollarSign,
  Headset,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Lock,
  Clock,
  TrendingUp,
  FileText
} from "lucide-react";

const advantages = [
  {
    number: "01",
    title: "Tailored Financial Solutions",
    tag: "Custom Fit",
    description: "Industry-specific tax & accounting strategies designed for your exact business model and entity size.",
    icon: <Settings className="w-6 h-6" />,
    highlight: "Personalized Roadmap",
  },
  {
    number: "02",
    title: "Licensed CPA Team",
    tag: "Expert Advisory",
    description: "Certified professionals with decades of combined experience in US federal, state, and international tax compliance.",
    icon: <Users className="w-6 h-6" />,
    highlight: "15+ Years Avg. Experience",
  },
  {
    number: "03",
    title: "AI-Powered Efficiency",
    tag: "24–48h Delivery",
    description: "Automated document intake and validation tech saves up to 80% of manual tax prep time.",
    icon: <Zap className="w-6 h-6" />,
    highlight: "Rapid Turnaround",
  },
  {
    number: "04",
    title: "Transparent Communication",
    tag: "Clear Guidance",
    description: "No confusing jargon or silent delays—get straightforward answers and regular progress updates.",
    icon: <MessageSquare className="w-6 h-6" />,
    highlight: "Real-time Dashboards",
  },
  {
    number: "05",
    title: "Bank-Grade Security",
    tag: "256-Bit SSL",
    description: "Institutional encryption protocols and encrypted vaults protect your confidential financial records.",
    icon: <ShieldCheck className="w-6 h-6" />,
    highlight: "IRS Compliant Storage",
  },
  {
    number: "06",
    title: "Predictable Flat-Rate",
    tag: "Zero Hidden Fees",
    description: "Upfront pricing with itemized options so you always know what you pay before we begin.",
    icon: <DollarSign className="w-6 h-6" />,
    highlight: "No Hourly Surprises",
  },
  {
    number: "07",
    title: "Year-Round Support",
    tag: "Always Available",
    description: "We don't vanish after April. Access dedicated advisors whenever a tax question or audit notice arises.",
    icon: <Headset className="w-6 h-6" />,
    highlight: "365-Day Assistance",
  },
  {
    number: "08",
    title: "Proven Results",
    tag: "$10M+ Saved",
    description: "Track record of helping over 10,000 clients minimize tax liabilities and optimize cash flow.",
    icon: <BarChart3 className="w-6 h-6" />,
    highlight: "10k+ Filings Done",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-10 relative overflow-hidden bg-white ">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none bg-[linear-gradient(to_right,#EDF2F7_1px,transparent_1px),linear-gradient(to_bottom,#EDF2F7_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="section-tag inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span>Why Choose NexGen</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight font-heading leading-[1.15] mb-5">
            <span className="text-brand-primary">The Key Advantages of</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-green-light to-brand-secondary font-bold">
              Our Financial Expertise.
            </span>
          </h2>

          <p className="text-text-mid text-base sm:text-lg font-sans leading-relaxed">
            Combining certified CPA knowledge with modern digital efficiency to give your business an undeniable financial edge.
          </p>
        </motion.div>

        {/* 4-Column Grid of Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.45 }}
              className="group bg-white rounded-3xl p-7 border border-[#DCE6F2] hover:border-brand-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 relative flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top gradient accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary transition-all duration-500" />

              <div>
                {/* Top Row: Icon + Number & Tag */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/15 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>

                  <span className="text-xs font-bold font-heading text-text-light/50">
                    {item.number}
                  </span>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-accent-dark bg-brand-accent/15 border border-brand-accent/25 px-2.5 py-0.5 rounded-full inline-block mb-3 font-heading">
                  {item.tag}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-brand-dark mb-2 font-heading group-hover:text-brand-primary transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-text-mid text-xs sm:text-sm leading-relaxed font-sans mb-5">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="pt-3.5 border-t border-[#DCE6F2] flex items-center gap-2 text-xs font-semibold text-text-dark font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <span>{item.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


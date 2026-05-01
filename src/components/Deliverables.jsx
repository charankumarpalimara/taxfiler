import { motion } from "framer-motion";
import { FileText, Building2, BadgePercent, CheckCircle, HelpCircle } from "lucide-react";
import { useState } from "react";

const deliverables = [
  {
    title: "Income Tax Returns",
    description: "Comprehensive federal and state income tax preparation.",
    icon: <FileText className="w-7 h-7" />,
    items: [
      "Form 1040 (Schedule C/E/F): For sole proprietors, partners, and LLCs.",
      "Form 1120: For C corporations.",
      "Form 1120-S: For S corporations.",
      "State and Local Income Tax Returns: Applicable depending on location."
    ]
  },
  {
    title: "Employment Taxes",
    description: "Manage your team's payroll and employment tax forms.",
    icon: <Building2 className="w-7 h-7" />,
    items: [
      "Form 940 or 941: Federal income tax withheld from employee wages.",
      "Form 940/941 + State Forms: Federal and state unemployment taxes.",
      "Form W-2: Wage and tax statement for each employee.",
      "Form 1099-NEC: For non-employee compensation exceeding $600."
    ]
  },
  {
    title: "Sales and Use Tax",
    description: "Stay fully compliant with state and local sales regulations.",
    icon: <BadgePercent className="w-7 h-7" />,
    items: [
      "Sales Tax Returns: Frequency and forms vary depending on the state.",
      "Use Tax Returns: For purchases made out-of-state but used in your state."
    ]
  },
  {
    title: "Other Deliverables",
    description: "Additional filings to keep your business running smoothly.",
    icon: <HelpCircle className="w-7 h-7" />,
    items: [
      "Estimated Tax Payments: Quarterly payments made to avoid penalties.",
      "Information Returns: Depending on activities (e.g. 1099-MISC).",
      "Business Licenses & Permits: From state and local authorities.",
      "Bookkeeping Records: Documentation of income, expenses, assets, etc."
    ]
  }
];

export default function Deliverables() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="deliverables" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Forms & Filings</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6 font-heading">
            Comprehensive <span className="gradient-text">Deliverables</span>
          </h2>
          <p className="text-lg text-text-mid font-sans">
            Staying compliant means staying on top of many forms. Our experts handle the heavy lifting for you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/4 flex flex-row overflow-x-auto lg:flex-col gap-3 pb-4 lg:pb-0 snap-x hide-scrollbar">
            {deliverables.map((category, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveTab(idx)}
                className={`group text-left p-4 rounded-2xl transition-all duration-500 flex items-center gap-4 shrink-0 snap-start relative ${activeTab === idx
                  ? "bg-white shadow-premium ring-1 ring-black/5"
                  : "hover:bg-white/40"
                  }`}
              >
                {/* Active Indicator */}
                {activeTab === idx && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute left-0 top-3 bottom-3 w-1 bg-brand-orange rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <div className={`w-11 h-11 rounded-xl shrink-0 flex items-center justify-center transition-all duration-500 ${activeTab === idx
                  ? "bg-brand-purple text-white shadow-md shadow-brand-purple/20 rotate-0"
                  : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-brand-purple -rotate-3"
                  }`}>
                  <div className="scale-75">
                    {category.icon}
                  </div>
                </div>

                <div className="min-w-0 pr-2">
                  <h3 className={`text-base font-bold leading-tight transition-colors duration-300 ${activeTab === idx ? "text-brand-purple" : "text-slate-500 group-hover:text-brand-purple"}`}>
                    {category.title}
                  </h3>
                  <p className={`text-[11px] mt-0.5 font-medium transition-colors duration-300 ${activeTab === idx ? "text-brand-orange" : "text-slate-400 group-hover:text-slate-500"}`}>
                    View Details
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-100 rounded-md p-8 md:p-14 h-full relative overflow-hidden shadow-premium"
            >
              {/* Subtle background element */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 border-b border-slate-100 pb-10">
                  <div className="w-20 h-20 bg-brand-light rounded-3xl flex items-center justify-center text-brand-purple shadow-inner border border-white">
                    <div className="scale-110">
                      {deliverables[activeTab].icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-brand-purple font-heading leading-tight mb-2">
                      {deliverables[activeTab].title}
                    </h3>
                    <p className="text-slate-500 font-sans max-w-xl leading-relaxed">
                      {deliverables[activeTab].description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {deliverables[activeTab].items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIdx * 0.05 }}
                      className="group flex items-start bg-slate-50/50 p-6 rounded-3xl hover:bg-white hover:shadow-premium transition-all duration-300 border border-slate-100/50 hover:border-brand-purple/10"
                    >
                      <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center mr-4 shrink-0 mt-1 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-600 leading-relaxed text-sm font-sans font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

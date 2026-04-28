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
      {/* Background blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Forms & Filings</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6 font-heading">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-dark">Deliverables</span>
          </h2>
          <p className="text-lg text-text-mid font-sans">
            For small businesses, staying compliant means staying on top of many forms. We handle the heavy lifting.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 flex flex-row overflow-x-auto lg:flex-col gap-4 pb-4 lg:pb-0 snap-x hide-scrollbar">
            {deliverables.map((category, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border flex items-center gap-4 shrink-0 snap-start ${activeTab === idx
                  ? "bg-white border-brand-orange shadow-xl shadow-brand-orange/10 scale-105 z-10"
                  : "bg-bg-light border-transparent hover:bg-white hover:border-black/10"
                  }`}
              >
                <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center transition-all ${activeTab === idx ? "bg-brand-orange text-white" : "bg-white text-text-light"}`}>
                  {category.icon}
                </div>
                <div className="min-w-0">
                  <h3 className={`text-lg font-bold truncate ${activeTab === idx ? "text-brand-purple" : "text-text-mid"}`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm mt-1 line-clamp-1 ${activeTab === idx ? "text-text-mid" : "text-text-light"}`}>
                    {category.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-14 h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10 border-b border-black/5 pb-8">
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange shadow-sm transform -rotate-3">
                    {deliverables[activeTab].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-purple font-heading">{deliverables[activeTab].title}</h3>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {deliverables[activeTab].items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className="flex items-start bg-bg-light/50 p-5 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-black/5"
                    >
                      <CheckCircle className="w-5 h-5 text-brand-orange mr-3 shrink-0 mt-0.5" />
                      <span className="text-text-mid leading-relaxed text-sm font-sans">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

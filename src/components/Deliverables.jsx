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
    <section id="services" className="py-16 bg-brand-dark text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[800px] h-[800px] rounded-full bg-brand-purple/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-64 -mb-64 w-[800px] h-[800px] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-20">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold mb-6 leading-snug"
            >
              Comprehensive <span className="text-brand-orange">Deliverables</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-slate-400 max-w-2xl leading-relaxed"
            >
              For small businesses, staying compliant means staying on top of many forms. We handle the heavy lifting.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 flex flex-row overflow-x-auto lg:flex-col gap-3 lg:gap-4 pb-4 lg:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {deliverables.map((category, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-3 lg:p-6 rounded-2xl transition-all duration-300 border shrink-0 snap-start flex items-center gap-3 lg:gap-4 ${activeTab === idx
                  ? "bg-white/10 border-brand-orange shadow-[0_0_30px_rgba(255,138,0,0.15)]"
                  : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20"
                  }`}
              >
                <div className={`p-2 lg:p-3 rounded-xl shrink-0 flex items-center justify-center ${activeTab === idx ? "bg-brand-orange text-white" : "bg-white/10 text-slate-400"}`}>
                  <div className="scale-75 lg:scale-100 flex items-center justify-center origin-center">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className={`whitespace-nowrap lg:whitespace-normal text-sm lg:text-lg font-medium ${activeTab === idx ? "text-white" : "text-slate-300"}`}>
                    {category.title}
                  </h3>
                  <p className={`hidden lg:block text-sm mt-1 ${activeTab === idx ? "text-slate-300" : "text-slate-500"}`}>
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
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-5 md:p-14 rounded-[3rem] h-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10 border-b border-white/10 pb-8">
                  <div className="w-20 h-20 bg-brand-orange rounded-3xl flex items-center justify-center text-white shadow-xl shadow-brand-orange/20 transform -rotate-6">
                    {deliverables[activeTab].icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{deliverables[activeTab].title}</h3>
                </div>

                <ul className="space-y-6">
                  {deliverables[activeTab].items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className="flex items-start bg-white/[0.02] p-5 rounded-2xl hover:bg-white/[0.05] transition-colors border border-transparent hover:border-white/5"
                    >
                      <CheckCircle className="w-7 h-7 text-brand-orange mr-4 shrink-0 mt-0.5" />
                      <span className="text-slate-300 leading-relaxed text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-brand-purple/30 border border-brand-purple/50 rounded-3xl text-center shadow-lg backdrop-blur-md"
        >
          <p className="text-brand-light text-sm">
            <strong className="text-white font-semibold">Important Note:</strong> This is not an exhaustive list. Consulting with a professional is highly recommended to ensure you comply with all applicable tax regulations.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}

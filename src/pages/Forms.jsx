import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  FileCheck,
  HelpCircle,
  ExternalLink,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRegisterModal } from "../context/RegisterModalContext";

const categories = [
  "All Forms",
  "Individual Taxes",
  "Business & Corporate",
  "Payroll & HR",
  "Client Onboarding"
];

const formsList = [
  {
    id: "f1",
    title: "Client Tax Organizer & Checklist 2026",
    formCode: "NEX-ORG-2026",
    category: "Client Onboarding",
    fileType: "Interactive PDF",
    fileSize: "1.2 MB",
    description: "Complete organizer to gather income statements, deductions, and personal info before filing your annual tax return.",
    badge: "Most Used",
    downloadUrl: "#",
    popular: true,
  },
  {
    id: "f2",
    title: "Form W-9 (Request for Taxpayer ID & Certification)",
    formCode: "IRS W-9",
    category: "Business & Corporate",
    fileType: "Official IRS PDF",
    fileSize: "450 KB",
    description: "Standard IRS form used by independent contractors and businesses to provide TIN or SSN to payors.",
    badge: "Official IRS",
    downloadUrl: "https://www.irs.gov/pub/irs-pdf/fw9.pdf",
    popular: true,
  },
  {
    id: "f3",
    title: "Form W-4 (Employee's Withholding Certificate 2026)",
    formCode: "IRS W-4",
    category: "Payroll & HR",
    fileType: "Official IRS PDF",
    fileSize: "320 KB",
    description: "Complete for your employer so that the correct federal income tax is withheld from your pay.",
    badge: "Official IRS",
    downloadUrl: "https://www.irs.gov/pub/irs-pdf/fw4.pdf",
    popular: false,
  },
  {
    id: "f4",
    title: "Form 1040 Individual Tax Return Worksheets",
    formCode: "IRS 1040-WS",
    category: "Individual Taxes",
    fileType: "PDF Worksheet",
    fileSize: "850 KB",
    description: "Itemized deduction and credit calculation worksheets for U.S. individual tax returns.",
    badge: "Individual Tax",
    downloadUrl: "#",
    popular: true,
  },
  {
    id: "f5",
    title: "Form 1120-S S-Corp Tax Preparation Checklist",
    formCode: "NEX-1120S-CL",
    category: "Business & Corporate",
    fileType: "PDF Checklist",
    fileSize: "640 KB",
    description: "Comprehensive document request list for S-Corporations preparing Schedule K-1s and 1120-S returns.",
    badge: "S-Corp Guide",
    downloadUrl: "#",
    popular: true,
  },
  {
    id: "f6",
    title: "New Business Entity Setup Intake Form",
    formCode: "NEX-BIZ-INTAKE",
    category: "Client Onboarding",
    fileType: "Fillable Form",
    fileSize: "980 KB",
    description: "Required intake form for LLC, C-Corp, or Partnership formation, EIN registration, and state filings.",
    badge: "New Business",
    downloadUrl: "#",
    popular: false,
  },
  {
    id: "f7",
    title: "Form 941 Employer's Quarterly Federal Tax Return Guide",
    formCode: "IRS 941-GUIDE",
    category: "Payroll & HR",
    fileType: "PDF Reference",
    fileSize: "510 KB",
    description: "Reference instructions for quarterly payroll tax reporting of wages paid and taxes withheld.",
    badge: "Payroll Tax",
    downloadUrl: "#",
    popular: false,
  },
  {
    id: "f8",
    title: "Form 8829 Home Office Expense Deduction Worksheet",
    formCode: "IRS 8829-WS",
    category: "Individual Taxes",
    fileType: "Excel Calculation Template",
    fileSize: "1.1 MB",
    description: "Calculate square footage ratios, utility allocation, and maximum home office tax deductions.",
    badge: "Deduction Tool",
    downloadUrl: "#",
    popular: true,
  },
  {
    id: "f9",
    title: "Bookkeeping Records & Ledger Intake Sheet",
    formCode: "NEX-BK-INTAKE",
    category: "Business & Corporate",
    fileType: "Excel Ledger Template",
    fileSize: "1.8 MB",
    description: "Standardized spreadsheet for organizing monthly income, business expenses, and bank statement uploads.",
    badge: "Bookkeeping",
    downloadUrl: "#",
    popular: false,
  },
];

export default function Forms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Forms");
  const { openRegisterModal } = useRegisterModal();

  const filteredForms = formsList.filter((item) => {
    const matchesCategory =
      activeCategory === "All Forms" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.formCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-12 lg:pt-16 lg:pb-16 overflow-hidden bg-white">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-brand-accent/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              Official Tax & Client Resource Hub
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-primary font-heading tracking-tight leading-[1.15]"
            >
              Essential Tax Forms & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary font-bold">
                Downloadable Worksheets.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-mid text-base sm:text-lg font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Access official IRS forms, client organizers, intake questionnaires, and calculation tools to streamline your tax preparation and compliance.
            </motion.p>

            {/* Search Bar Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative max-w-xl mx-auto pt-4"
            >
              <div className="relative flex items-center">
                <Search className="w-5 h-5 absolute left-4 text-text-light/60 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search forms by name, IRS code, or keyword (e.g. W-9, 1040, Organizer)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-[#DCE6F2] focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none text-sm text-brand-dark shadow-md font-sans transition-all placeholder:text-text-light/60"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 text-xs font-bold text-text-light hover:text-brand-primary bg-[#EDF2F7] px-2.5 py-1 rounded-lg"
                  >
                    Clear
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Main Forms Section ────────────────────────────────────────── */}
      <section className="py-8 lg:py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${activeCategory === cat
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20 scale-105"
                    : "bg-white text-text-mid hover:bg-white hover:text-brand-primary border border-[#DCE6F2] shadow-sm"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Form Cards Grid */}
          {filteredForms.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
            >
              <AnimatePresence mode="popLayout">
                {filteredForms.map((item, idx) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="bg-white rounded-3xl p-7 border border-[#DCE6F2] hover:border-brand-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 group"
                  >
                    {/* Top gradient line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary transition-all duration-500" />

                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/15 font-heading">
                            {item.formCode}
                          </span>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EDF2F7] text-text-mid">
                            {item.fileType}
                          </span>
                        </div>
                        {item.popular && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-accent/20 text-brand-accent-dark border border-brand-accent/30 font-heading">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-brand-dark mb-2.5 font-heading group-hover:text-brand-primary transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-mid text-xs sm:text-sm leading-relaxed font-sans mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Actions Row */}
                    <div className="pt-4 border-t border-[#EDF2F7] flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-text-light font-sans font-medium">
                        <FileCheck className="w-4 h-4 text-brand-accent shrink-0" />
                        <span>{item.fileSize}</span>
                      </div>

                      {item.downloadUrl.startsWith("http") ? (
                        <a
                          href={item.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-brand-primary bg-brand-primary/10 hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-sm"
                        >
                          <span>Open IRS Form</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => openRegisterModal(1)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                        >
                          <span>Request / Fill Online</span>
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#DCE6F2] shadow-sm max-w-xl mx-auto p-8">
              <HelpCircle className="w-12 h-12 text-brand-primary/40 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold text-brand-dark mb-2 font-heading">No Matching Forms Found</h3>
              <p className="text-text-mid text-sm font-sans mb-6">
                We couldn't find any form matching "{searchTerm}". Looking for a specific IRS or custom document?
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All Forms");
                }}
                className="btn-orange text-xs font-bold !px-6 !py-2.5 rounded-xl inline-flex items-center gap-2"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── Help / Contact Banner ────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="max-w-xl text-center md:text-left relative z-10">
              <h3 className="text-2xl text-white sm:text-3xl font-extrabold mb-2 font-heading tracking-tight">
                Need Help Selecting or Filing the Right Form?
              </h3>
              <p className="text-white/90 text-sm sm:text-base font-sans leading-relaxed">
                Our CPAs can review your tax document requirements and guide you through accurate submission.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-brand-dark bg-white hover:bg-[#F7FAFC] transition-all shadow-xl hover:scale-105 active:scale-95 group text-sm font-heading"
              >
                <span>Consult Our Specialists</span>
                <ArrowRight className="w-4 h-4 ml-2 text-brand-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

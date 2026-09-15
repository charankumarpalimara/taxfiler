import {
  User,
  Building2,
  BookOpen,
  Receipt,
  ShieldAlert,
  Briefcase,
  TrendingUp,
  Sparkles,
  Layers,
  FileCheck,
  RefreshCw,
  FileX
} from "lucide-react";

export const servicesData = [
  {
    id: "individual-tax",
    category: "tax",
    title: "Individual Tax Services",
    icon: User,
    badge: "Popular",
    image: "/services/individual-tax.jpg",
    shortDesc: "Complete Federal & State tax return preparation, itemized deduction optimization, and maximum refund guarantee for individuals.",
    longDesc: "Navigating personal tax returns can be overwhelming with constantly changing federal and state tax codes. Our licensed CPAs meticulously analyze your income sources, deductions, tax credits, and financial activities to ensure 100% IRS compliance while legally minimizing your tax liability.",
    subServices: [
      {
        id: "fbar-fatca",
        title: "FBAR & FATCA Compliance",
        formCode: "FinCEN Form 114 & Form 8938",
        badge: "Foreign Accounts",
        description: "Mandatory annual reporting for U.S. citizens, green card holders, and tax residents holding foreign bank accounts, offshore investments, or foreign financial assets exceeding $10,000.",
        highlights: [
          "FinCEN Form 114 Electronic E-Filing",
          "Form 8938 Specified Foreign Financial Assets Reporting",
          "Foreign Account Peak Balance Calculations & Currency Conversion",
          "Streamlined Filing Compliance Procedures for Late Filers"
        ]
      },
      {
        id: "itin-services",
        title: "ITIN Application & Renewal",
        formCode: "IRS Form W-7",
        badge: "Certifying Agent",
        description: "Official Individual Taxpayer Identification Number (ITIN) application for non-U.S. residents, dependents, and foreign taxpayers who are not eligible for a Social Security Number.",
        highlights: [
          "IRS Form W-7 Preparation & Document Audit",
          "Certifying Acceptance Agent (CAA) Document Verification",
          "Passport / ID Verification without Mailing Original Documents",
          "ITIN Renewal & Synchronized Tax Return Filing"
        ]
      },
      {
        id: "w4-assistance",
        title: "W-4 Tax Withholding Optimization",
        formCode: "IRS Form W-4",
        badge: "Paycheck Tuning",
        description: "Professional employee W-4 tax withholding planning to ensure your employer withholds the exact right amount of tax—preventing massive April tax bills or zero-interest IRS loans.",
        highlights: [
          "Federal Form W-4 Withholding Allowance Calculation",
          "State Tax Withholding Allowance Optimization",
          "Dual-Income Household & Multiple Jobs Strategy",
          "Mid-Year Life Change Adjustments (Marriage, Child, Stock Bonuses)"
        ]
      },
      {
        id: "form-4868-extension",
        title: "Form 4868 Tax Extension Filing",
        formCode: "IRS Form 4868",
        badge: "6-Month Extension",
        description: "Official 6-month extension of time to file your U.S. individual income tax return from April 15th to October 15th, protecting you from late filing penalties.",
        highlights: [
          "Same-Day IRS Form 4868 Extension E-Filing",
          "Estimated Tax Liability Calculation & Payment Voucher",
          "State Tax Extension Filings (where applicable)",
          "Immediate IRS Extension E-File Confirmation Receipt"
        ]
      },
      {
        id: "form-1040-filing",
        title: "Federal & State Tax Return Filing",
        formCode: "IRS Form 1040",
        badge: "Core Individual Tax",
        description: "Complete preparation and e-filing of your annual Form 1040, Schedule 1-3, and state tax returns with maximum deduction optimization.",
        highlights: [
          "100% Tax Refund Guarantee & Deduction Maximization",
          "W-2, 1099-NEC, 1099-MISC, & 1099-INT Income Processing",
          "Child Tax Credit, EITC, & Student Loan Interest Deductions",
          "Direct Deposit Tax Refund Tracking"
        ]
      },
      {
        id: "amended-returns",
        title: "Amended Tax Returns (Form 1040-X)",
        formCode: "IRS Form 1040-X",
        badge: "Correction & Backlog",
        description: "Correction of prior year tax return errors, missed deductions, missing W-2s/1099s, or filing status changes to claim missed refunds.",
        highlights: [
          "Form 1040-X Amended Return Preparation & E-filing",
          "Prior 3 Years Unclaimed Refund Recovery",
          "Schedule C & Itemized Deductions Corrections",
          "IRS Audit Prevention & Error Verification"
        ]
      }
    ],
    features: [
      "Federal Form 1040 & State Tax Return Filings",
      "W-2, 1099-NEC, 1099-MISC & Dividend Income Processing",
      "Deduction & Credit Optimization (Child Tax Credit, EITC, Higher Ed)",
      "ITIN Application & Annual Renewal Support",
      "Prior-Year Tax Return Amendments & IRS Backlog Clearances",
      "Capital Gains, Stock Option (RSU, ISO), & Crypto Filings"
    ],
    deliverables: [
      "E-filed Federal & State Tax Returns",
      "Official IRS E-File Confirmation Receipt",
      "Detailed Tax Summary & Tax Refund Tracking",
      "Full Copy of Prepared Returns (PDF)",
      "Year-Round Tax Consultation Support"
    ],
    timeline: "2-4 Business Days",
    idealFor: "Employees, Freelancers, High Net Worth Individuals, & Families",
    requiredDocuments: [
      "W-2s, 1099s, and Income Statements",
      "Government Issued ID / Passport & SSN/ITIN Cards",
      "Prior Year Tax Return (Form 1040)",
      "Bank Routing & Account Number for Direct Deposit",
      "Deduction Receipts (Mortgage Interest 1098, Charitable, Medical)"
    ],
    faqs: [
      {
        q: "How fast will I receive my tax refund after e-filing?",
        a: "The IRS typically issues e-filed tax refunds within 8 to 21 days when direct deposit is selected."
      },
      {
        q: "Can you help me file tax returns for previous missing years?",
        a: "Yes! We specialize in unfiled prior-year tax returns and can pull official IRS transcripts to get you completely caught up."
      }
    ]
  },
  {
    id: "business-tax",
    category: "tax",
    title: "Business Tax Services",
    icon: Building2,
    badge: "Core Service",
    image: "/services/business-tax.jpg",
    shortDesc: "Comprehensive business tax return filings for Sole Proprietorships, Partnerships, S-Corps, C-Corps, and multi-state entities.",
    longDesc: "Business tax returns require strategic planning and precision. We prepare corporate returns (Form 1120, 1120-S, 1065, Schedule C) while identifying industry-specific deductions, write-offs, depreciation schedules, and legal tax reduction strategies.",
    features: [
      "Corporate Tax Returns (Form 1120 & 1120-S)",
      "Partnership Returns (Form 1065 & Schedule K-1s)",
      "Schedule C Filing for Sole Proprietors & Single-Member LLCs",
      "Multi-State Corporate Income Tax & Franchise Tax Compliance",
      "Quarterly Estimated Tax Calculations & Voucher Issuances",
      "Section 179 & MACRS Asset Depreciation Calculations"
    ],
    deliverables: [
      "IRS & State E-Filed Corporate Returns",
      "Partner / Shareholder Schedule K-1 Statements",
      "Detailed Depreciation & Fixed Asset Schedules",
      "Quarterly Tax Voucher Package",
      "Corporate Compliance & Year-End Tax Strategy Report"
    ],
    timeline: "3-5 Business Days",
    idealFor: "Small Businesses, Startups, LLC Owners, S-Corps, & Corporations",
    requiredDocuments: [
      "Year-End Profit & Loss (P&L) and Balance Sheet",
      "Prior Year Business Tax Return",
      "Articles of Organization / Incorporation & EIN Letter",
      "Form 1099-MISC / 1099-K Received",
      "Asset Purchase Invoices & Equipment Logs"
    ],
    faqs: [
      {
        q: "What is the corporate tax return deadline for S-Corps and Partnerships?",
        a: "S-Corp (Form 1120-S) and Partnership (Form 1065) returns are due on March 15th (or September 15th with an extension)."
      },
      {
        q: "Do you handle multi-state corporate tax filings?",
        a: "Yes, we file multi-state corporate income and franchise tax returns across all 50 US States."
      }
    ]
  },
  {
    id: "accounting-bookkeeping",
    category: "bookkeeping",
    title: "Accounting & Bookkeeping",
    icon: BookOpen,
    badge: "Featured",
    image: "/services/accounting-bookkeeping.jpg",
    shortDesc: "Full-service monthly bookkeeping, bank reconciliations, ledger categorization, and executive P&L and Balance Sheet financial reports.",
    longDesc: "Keep your financial engine running smoothly with accurate, audit-proof ledgers. We manage your chart of accounts, reconcile bank and credit card statements daily, and provide clear monthly financial reports to guide business growth.",
    features: [
      "Monthly Transaction Categorization & General Ledger Maintenance",
      "Daily/Weekly Bank, Credit Card, & Merchant Account Reconciliations",
      "Profit & Loss (P&L), Balance Sheet, & Cash Flow Statements",
      "Accounts Payable (AP) & Accounts Receivable (AR) Oversight",
      "QuickBooks Online, Xero, & Wave Setup & Cleanup Backlogs",
      "Year-End Ledger Closing & CPA Audit Readiness"
    ],
    deliverables: [
      "Monthly Executive Financial Package (P&L & Balance Sheet)",
      "Bank Reconciliation Summary Statements",
      "Cleaned Chart of Accounts Mapping",
      "Tax-Ready Year-End Ledgers"
    ],
    timeline: "Ongoing Monthly Support",
    idealFor: "Growing Businesses, E-commerce Sellers, Service Providers, & Agencies",
    requiredDocuments: [
      "Bank & Credit Card Monthly Statements",
      "Stripe, PayPal, Square, or Merchant Settlement Reports",
      "Access to Accounting Software (QuickBooks/Xero)",
      "Major Invoices or Fixed Asset Purchase Receipts"
    ],
    faqs: [
      {
        q: "How often will I receive financial statements?",
        a: "Financial packages (P&L, Balance Sheet, Cash Flow) are delivered on a monthly basis by the 10th of every month."
      },
      {
        q: "Can you clean up months or years of messy backlogged bookkeeping?",
        a: "Yes! We specialize in catch-up bookkeeping to clean up historical backlogs and bring your records up to date."
      }
    ]
  },
  {
    id: "payroll-services",
    category: "bookkeeping",
    title: "Payroll Services",
    icon: Receipt,
    badge: "Automated",
    image: "/services/payroll-services.jpg",
    shortDesc: "End-to-end payroll processing, automated direct deposits, employee tax withholdings, and quarterly/annual tax filings.",
    longDesc: "Eliminate payroll headaches with our automated, error-free payroll solution. We handle employee and contractor payouts, calculate federal/state tax withholdings, file quarterly Form 941s, and generate year-end W-2 and 1099 forms.",
    features: [
      "Automated Direct Deposit & Check Payment Processing",
      "Federal, State, & Local Payroll Tax Withholdings",
      "Quarterly Payroll Tax Filings (Form 941, Form 940, State Unemployment)",
      "Year-End W-2 & 1099-NEC/MISC Generation & Distribution",
      "Garnishments, PTO Accruals, & Health Benefits Deductions",
      "Employee Online Self-Service Paystub Portal"
    ],
    deliverables: [
      "On-Time Pay Period Processing",
      "Quarterly Payroll Tax Clearance Certificates",
      "Employee Portal Access & Digital Paystubs",
      "Annual W-2 / W-3 & 1099-NEC Filings"
    ],
    timeline: "Recurring Pay Period Basis",
    idealFor: "Employers with 1 to 100+ Staff, Restaurants, & Contractor Networks",
    requiredDocuments: [
      "Federal EIN & State Employer Registration Numbers",
      "Employee Form W-4 & Contractor Form W-9s",
      "Direct Deposit Bank Routing & Account Details",
      "Prior Payroll Reports (if transferring systems)"
    ],
    faqs: [
      {
        q: "Do you handle state unemployment tax (SUTA) filings?",
        a: "Yes, we calculate and file all state unemployment taxes and quarterly payroll returns."
      },
      {
        q: "Can contractors be paid via direct deposit on the same platform?",
        a: "Yes! You can pay both W-2 employees and 1099 contractors seamlessly."
      }
    ]
  },
  {
    id: "irs-audits",
    category: "advisory",
    title: "IRS Audits & Compliance",
    icon: ShieldAlert,
    badge: "Protection",
    image: "/services/irs-audits.jpg",
    shortDesc: "Professional audit representation, IRS notices resolution, tax debt negotiations, penalty abatement, and compliance restoration.",
    longDesc: "Receiving an IRS notice or audit letter can be scary. Our licensed CPAs stand between you and the IRS, managing all correspondence, preparing required audit defense documentation, and negotiating settlements or penalty relief.",
    features: [
      "Direct IRS & State Tax Audit Defense Representation",
      "IRS Notice Resolution (CP2000, CP504, LT11, Audit Letters)",
      "Offer in Compromise (OIC) & IRS Tax Settlement Negotiation",
      "Penalty Abatement Requests & Installment Agreement Setup",
      "Unfiled Prior-Year Tax Backlog Resolution",
      "Bank Levy & Wage Garnishment Removal Support"
    ],
    deliverables: ["Direct IRS Representation", "Formal Audit Responses", "Penalty Reduction Filings", "Payment Agreement Setup"],
    timeline: "Case Dependent",
    idealFor: "Individuals & Businesses Facing IRS Audits or Back Taxes",
    requiredDocuments: [
      "IRS Notice / Audit Letter Received",
      "Prior 3 Years Tax Returns",
      "Form 2848 (Power of Attorney for CPA Representation)",
      "Supporting Income & Expense Documentation for Audit Year"
    ],
    faqs: [
      {
        q: "Do I have to speak to the IRS myself during an audit?",
        a: "No! Once you sign Form 2848 Power of Attorney, our CPAs handle 100% of calls, meetings, and letters with the IRS on your behalf."
      }
    ]
  },
  {
    id: "outsourcing-services",
    category: "bookkeeping",
    title: "Outsourcing Services",
    icon: Briefcase,
    badge: "Scalable",
    image: "/services/outsourcing-services.jpg",
    shortDesc: "Dedicated virtual CFO, outsourced accounting team, back-office bookkeeping, and custom financial operations management.",
    longDesc: "Scale your business operations without the high overhead of in-house finance staff. We provide plug-and-play fractional CFO services, finance department management, and operational accounting tailored to your workflow.",
    features: [
      "Fractional / Virtual CFO Strategic Advisory",
      "Complete Outsourced Accounting Department Management",
      "Financial Forecasting, Budgeting, & Runway Modeling",
      "Back-Office Billing & Vendor Invoice Management",
      "Internal Controls, COGS Optimization, & Cash Flow Strategy"
    ],
    deliverables: ["Dedicated Accountant Team", "Executive Financial Dashboards", "Monthly Advisory Calls", "Custom KPI Tracking"],
    timeline: "Ongoing Retainer",
    idealFor: "Scaling Startups, Mid-sized Companies, & Agency Owners",
    requiredDocuments: [
      "Current Financial Statements",
      "Company Chart of Accounts",
      "Strategic Business Goals & Budget Benchmarks"
    ],
    faqs: [
      {
        q: "What is included in Virtual CFO services?",
        a: "Virtual CFO includes financial forecasting, cash runway modeling, profit margin optimization, board reporting, and strategic growth guidance."
      }
    ]
  },
  {
    id: "tax-strategy",
    category: "advisory",
    title: "Tax Strategy & Session",
    icon: TrendingUp,
    badge: "High ROI",
    image: "/services/tax-strategy.jpg",
    shortDesc: "Proactive 1-on-1 tax planning sessions, legal tax minimization strategies, entity structure optimization, and wealth preservation.",
    longDesc: "Don't just file taxes—plan them proactively! Our strategic tax consultation sessions analyze your financial picture to uncover legal tax-saving loopholes, deduction strategies, and optimal corporate structuring ahead of year-end.",
    features: [
      "1-on-1 Comprehensive Tax Planning Consultation Session",
      "Legal Tax Minimization & Deductible Expense Write-Off Blueprint",
      "Entity Choice Advisory (LLC vs S-Corp Election vs C-Corp)",
      "Retirement Plan Tax Savings Setup (Solo 401k, SEP IRA)",
      "Year-End Tax Savings Action Plan"
    ],
    deliverables: ["Custom Tax Savings Blueprint", "Entity Conversion Analysis", "Written Actionable Plan", "1-on-1 CPA Q&A Session"],
    timeline: "60-Minute Session + Written Strategy Blueprint",
    idealFor: "Entrepreneurs, Real Estate Investors, & High Earners",
    requiredDocuments: [
      "Current Year Profit & Loss Draft",
      "Prior Year Tax Returns",
      "List of Major Expenses & Projected Year-End Income"
    ],
    faqs: [
      {
        q: "When is the best time to do tax strategy planning?",
        a: "Q3 and Q4 (before December 31st) are ideal to implement tax savings strategies before the tax year closes."
      }
    ]
  },
  {
    id: "individual-specialized",
    category: "tax",
    title: "Individual Specialized Services",
    icon: Sparkles,
    badge: "Bespoke",
    image: "/services/individual-specialized.jpg",
    shortDesc: "Customized specialized tax solutions for high net worth individuals, foreign asset holders (FBAR/FATCA), ITIN applicants, W-4 tuning, and Form 4868 extensions.",
    longDesc: "Complex personal finances and specialized international & federal tax requirements demand dedicated expertise. We provide customized tax filing and advisory for foreign bank account reporting (FBAR & FATCA), ITIN applications (Form W-7), employee W-4 withholding optimization, Form 4868 tax extensions, real estate portfolios, and digital assets.",
    subServices: [
      {
        id: "fbar-fatca",
        title: "FBAR & FATCA Compliance",
        formCode: "FinCEN Form 114 & Form 8938",
        badge: "Foreign Accounts",
        description: "Mandatory annual reporting for U.S. citizens, green card holders, H1B/L1 visa holders, and tax residents holding foreign bank accounts, offshore investments, or foreign assets exceeding $10,000.",
        highlights: [
          "FinCEN Form 114 Electronic E-Filing",
          "Form 8938 Specified Foreign Financial Assets Reporting",
          "Foreign Account Peak Balance Calculations & Currency Conversion",
          "Streamlined Foreign/Domestic Offshore Filing Procedures for Late Filers"
        ]
      },
      {
        id: "itin-services",
        title: "ITIN Application & Renewal Services",
        formCode: "IRS Form W-7",
        badge: "Certifying Agent (CAA)",
        description: "Official Individual Taxpayer Identification Number (ITIN) application for non-U.S. residents, spouses, dependents, and foreign taxpayers who are not eligible for a Social Security Number (SSN).",
        highlights: [
          "IRS Form W-7 Preparation & CAA Document Verification",
          "Passport / ID Verification without Mailing Original Documents",
          "ITIN Renewal for Expired / Deactivated Numbers",
          "Synchronized ITIN & Form 1040 Federal Tax Return Filing"
        ]
      },
      {
        id: "w4-assistance",
        title: "W-4 Tax Withholding Optimization",
        formCode: "IRS Form W-4",
        badge: "Paycheck Tuning",
        description: "Professional employee W-4 tax withholding planning to ensure your employer withholds the exact right amount of tax—preventing massive April tax bills or zero-interest IRS loans.",
        highlights: [
          "Federal Form W-4 Withholding Allowance Calculation",
          "State Tax Withholding Allowance Optimization",
          "Dual-Income Household & Multiple Jobs Strategy",
          "Mid-Year Life Change Adjustments (Marriage, Child, Stock Bonuses)"
        ]
      },
      {
        id: "form-4868-extension",
        title: "Form 4868 Tax Extension Filing",
        formCode: "IRS Form 4868",
        badge: "6-Month Extension",
        description: "Official 6-month extension of time to file your U.S. individual income tax return from April 15th to October 15th, protecting you from late filing penalties.",
        highlights: [
          "Same-Day IRS Form 4868 Extension E-Filing",
          "Estimated Tax Liability Calculation & Payment Voucher",
          "State Tax Extension Filings (where applicable)",
          "Immediate IRS Extension E-File Confirmation Receipt"
        ]
      },
      {
        id: "form-1040-specialized",
        title: "Federal & State Tax Return Filing",
        formCode: "IRS Form 1040",
        badge: "Core Filing",
        description: "Complete preparation and e-filing of your annual Form 1040, Schedule 1-3, and state tax returns with maximum deduction optimization.",
        highlights: [
          "100% Tax Refund Guarantee & Deduction Maximization",
          "W-2, 1099-NEC, 1099-MISC, & 1099-INT Income Processing",
          "Child Tax Credit, EITC, & Student Loan Interest Deductions",
          "Direct Deposit Tax Refund Tracking"
        ]
      },
      {
        id: "amended-returns-specialized",
        title: "Amended Tax Returns (Form 1040-X)",
        formCode: "IRS Form 1040-X",
        badge: "Correction",
        description: "Correction of prior year tax return errors, missed deductions, missing W-2s/1099s, or filing status changes to claim missed refunds.",
        highlights: [
          "Form 1040-X Amended Return Preparation & E-filing",
          "Prior 3 Years Unclaimed Refund Recovery",
          "Schedule C & Itemized Deductions Corrections",
          "IRS Audit Prevention & Error Verification"
        ]
      }
    ],
    features: [
      "FBAR (FinCEN Form 114) & FATCA (Form 8938) Foreign Asset Filings",
      "IRS Form W-7 ITIN Application & CAA Passport Certification",
      "Employee W-4 Tax Withholding Optimization & Paycheck Tuning",
      "Form 4868 6-Month IRS Tax Extension E-Filing",
      "Real Estate Investor Taxation (1031 Exchange, Cost Segregation)",
      "Cryptocurrency & Digital Asset Reporting",
      "Multi-State Individual Tax Returns & State Income Allocation",
      "Executive Compensation & Stock Option Tax Filings (RSUs, ISOs, NSOs)"
    ],
    deliverables: ["Specialized Returns Preparation", "FBAR / FATCA Compliance Report", "CAA Certified ITIN Documents", "Form 4868 Extension Receipt", "Asset Basis Schedules"],
    timeline: "2-5 Business Days",
    idealFor: "Expats, Foreign Asset Holders, Visa Holders, ITIN Applicants, Crypto Investors, & Real Estate Owners",
    requiredDocuments: [
      "FBAR Foreign Account Peak Balances & Financial Statements",
      "Passport / Government Issued ID for ITIN Certification",
      "W-2s, 1099s, and Employer Paystubs for W-4 Review",
      "Real Estate Closing Statements (HUD-1 / Closing Disclosure)",
      "Crypto Exchange API Trading CSVs",
      "RSU / Stock Option Vesting Schedules"
    ],
    faqs: [
      {
        q: "Do I need to report foreign bank accounts to the IRS?",
        a: "Yes, if total foreign financial account balances exceed $10,000 at any point during the year, an FBAR filing (FinCEN Form 114) is legally required."
      },
      {
        q: "Can I get an ITIN without sending my original passport to the IRS?",
        a: "Yes! As an IRS Certifying Acceptance Agent (CAA), we verify your original passport in-person or via video call and submit certified copies to the IRS."
      },
      {
        q: "What is the deadline for filing Form 4868 tax extension?",
        a: "Form 4868 must be e-filed on or before the regular tax deadline (usually April 15th). It gives you until October 15th to file your complete tax return."
      }
    ]
  },
  {
    id: "business-specialized",
    category: "tax",
    title: "Business Specialized Services",
    icon: Layers,
    badge: "Advanced",
    image: "/services/business-specialized.jpg",
    shortDesc: "Tailored business compliance and specialized tax solutions covering State Franchise Tax, Sales Tax filings, W-9 assistance, 1099-NEC & W-2 filings, and FinCEN BOIR reporting.",
    longDesc: "Navigating state and federal business compliance rules requires specialized CPA precision. We deliver turnkey business specialized filings including State Franchise Tax & Annual Reports, Multi-State Sales Tax returns, Contractor W-9 assistance, annual 1099-NEC & W-2 information returns, and mandatory FinCEN Beneficial Ownership Information Reporting (BOIR).",
    subServices: [
      {
        id: "franchise-tax-annual-report",
        title: "Franchise Tax & Annual Report Filing",
        formCode: "State Franchise Tax & PIR",
        badge: "State Compliance",
        description: "Mandatory annual state franchise tax calculation, public information report (PIR), and state annual report filings to keep your LLC, S-Corp, or C-Corp in good standing.",
        highlights: [
          "State Franchise Tax Calculation & Filing",
          "Public Information Report (PIR) Submission",
          "State Good Standing Status Maintenance & Renewal",
          "Franchise Tax Exemption & No Tax Due Threshold Verification"
        ]
      },
      {
        id: "sales-tax-filing",
        title: "Sales & Use Tax Filing Services",
        formCode: "State Sales & Use Tax",
        badge: "Multi-State Nexus",
        description: "Preparation and e-filing of monthly, quarterly, or annual state sales tax returns across all U.S. states, including economic nexus tracking and local rate reconciliation.",
        highlights: [
          "Multi-State Sales Tax Calculation & E-Filing",
          "Economic & Physical Sales Tax Nexus Analysis",
          "E-Commerce & Marketplace Facilitator Reconciliation",
          "Sales Tax Exemption Certificate Audit & Compliance"
        ]
      },
      {
        id: "w9-assistance",
        title: "W-9 Assistance & Vendor Compliance",
        formCode: "IRS Form W-9",
        badge: "Vendor Compliance",
        description: "Complete W-9 collection, TIN matching, and vendor classification setup for independent contractors to ensure 100% IRS compliance before year-end payouts.",
        highlights: [
          "Form W-9 Preparation & Review for U.S. Contractors",
          "IRS TIN Matching & Taxpayer Identity Verification",
          "Contractor vs. Employee Classification Risk Audit",
          "Digital Vendor W-9 Vault Setup & Maintenance"
        ]
      },
      {
        id: "1099-nec-filing",
        title: "1099-NEC & 1099-MISC Filing Services",
        formCode: "IRS Form 1099-NEC / 1099-MISC",
        badge: "Contractor Reporting",
        description: "Preparation, IRS e-filing, state transmittal, and recipient distribution of Form 1099-NEC for nonemployee compensation and Form 1099-MISC for rents and legal fees.",
        highlights: [
          "IRS Form 1099-NEC & 1099-MISC E-Filing",
          "Form 1096 Annual Summary Transmittal Submission",
          "Recipient Copy Delivery (Paper / Secure PDF)",
          "Combined Federal/State Filing (CFSF) Program E-Filing"
        ]
      },
      {
        id: "w2-filing",
        title: "W-2 & W-3 Annual Employer Filing",
        formCode: "IRS Form W-2 & W-3",
        badge: "Year-End Payroll",
        description: "Complete annual Form W-2 Wage and Tax Statement preparation, Social Security Administration (SSA) e-filing, and Form W-3 transmittal for all business employees.",
        highlights: [
          "Form W-2 Preparation & SSA Electronic E-Filing",
          "Form W-3 Transmittal Verification & Reconciliation",
          "Employee Digital & Hardcopy W-2 Distribution",
          "State & Local Annual Wage Reconciliation Filings"
        ]
      },
      {
        id: "boir-filing",
        title: "FinCEN BOIR (Beneficial Ownership) Filing",
        formCode: "CTA / FinCEN BOIR",
        badge: "Federal Compliance",
        description: "Mandatory Beneficial Ownership Information Report (BOIR) filing under the Corporate Transparency Act (CTA) for U.S. LLCs and Corporations to avoid $500/day penalties.",
        highlights: [
          "Official FinCEN E-Filing Portal Direct Submission",
          "Beneficial Owner & Company Applicant Identification",
          "FinCEN ID Issuance & Reporting Updates",
          "Initial & Amended BOIR Compliance Filings"
        ]
      }
    ],
    features: [
      "State Franchise Tax & Annual Public Information Report (PIR) Filings",
      "Multi-State Sales & Use Tax Preparation & E-Filing",
      "Vendor W-9 Collection & IRS TIN Matching Assistance",
      "Form 1099-NEC & 1099-MISC Annual Information Return Filings",
      "Employee Form W-2 & SSA Form W-3 Transmittal E-Filings",
      "FinCEN BOIR (Beneficial Ownership Information Reporting) CTA Filings",
      "Research & Development (R&D) Tax Credit Claims",
      "Mergers & Acquisitions (M&A) Tax Structuring & Due Diligence"
    ],
    deliverables: [
      "State Franchise Tax & Annual Report Receipts",
      "Sales Tax Return E-File Confirmations",
      "Form 1099-NEC / 1099-MISC IRS Transmittal Copies",
      "Form W-2 / W-3 SSA E-File Confirmation",
      "Official FinCEN BOIR Filing Transcript & Receipt"
    ],
    timeline: "1-3 Business Days",
    idealFor: "LLCs, S-Corps, C-Corps, Partnerships, Employers, & Multi-State Businesses",
    requiredDocuments: [
      "State Tax Account Numbers & Prior Franchise Tax Filings",
      "Monthly Gross Sales & Taxable Revenue Breakdown",
      "Vendor W-9 Information & Contractor Payment Records",
      "Annual Employee Payroll Summaries & W-4 Forms",
      "Government Issued IDs & Passport Copy of Company Beneficial Owners"
    ],
    faqs: [
      {
        q: "What is the penalty for missing the FinCEN BOIR filing deadline?",
        a: "Failing to file your BOIR can result in civil penalties of up to $500 per day for each day the violation continues, plus criminal penalties."
      },
      {
        q: "When are 1099-NEC forms due to contractors and the IRS?",
        a: "Form 1099-NEC forms must be e-filed with the IRS and furnished to recipients by January 31st following the tax year."
      },
      {
        q: "Do I have to file a state Franchise Tax return if my business made no money?",
        a: "Yes! Most states (like Texas, Delaware, California) legally require an annual Franchise Tax report and Public Information Report regardless of whether revenue was generated."
      }
    ]
  },
  {
    id: "llc-registration",
    category: "forms",
    title: "Forms & LLC Registration",
    icon: FileCheck,
    badge: "Turnkey",
    image: "/services/llc-registration.jpg",
    shortDesc: "Comprehensive business formation and entity registration services covering Single-Member LLCs, S-Corporation elections, C-Corporations, and Trust & Non-Profit entity setups.",
    longDesc: "Launch your business or non-profit on rock-solid legal and tax foundation. We handle complete entity formation across all 50 U.S. states, including Articles of Organization / Incorporation, IRS EIN issuance, S-Corp election (Form 2553), 501(c)(3) non-profit tax exemption, C-Corp structuring, and custom Operating Agreements.",
    subServices: [
      {
        id: "trust-non-profit",
        title: "Trust & Non-Profit Entity Formation",
        formCode: "IRS Form 1023 / Trust Deed",
        badge: "Tax-Exempt & Trust",
        description: "Comprehensive formation for 501(c)(3) tax-exempt non-profit organizations, public charities, foundations, family trusts, and asset protection trust entity structures.",
        highlights: [
          "501(c)(3) IRS Tax-Exempt Status Application (Form 1023 / 1023-EZ)",
          "Non-Profit Articles of Incorporation & Custom Bylaws Drafting",
          "Irrevocable & Revocable Family Trust Document Preparation",
          "State Non-Profit Charitable Solicitation Registration"
        ]
      },
      {
        id: "single-member-llc",
        title: "Single-Member LLC Registration",
        formCode: "Form SS-4 / Articles of Org",
        badge: "Single-Member LLC",
        description: "Fast 24-48 hour Single-Member LLC formation across all 50 U.S. states, including state filing, official IRS EIN issuance, and single-member Operating Agreement.",
        highlights: [
          "State Articles of Organization E-Filing (All 50 US States)",
          "Official IRS Federal EIN Confirmation Letter (CP575)",
          "Single-Member Customized Operating Agreement",
          "Registered Agent Service & State Compliance Setup"
        ]
      },
      {
        id: "s-corp-election",
        title: "S-Corporation Registration & Election",
        formCode: "IRS Form 2553 / S-Corp",
        badge: "S-Corp Election",
        description: "Formation or tax conversion to an S-Corporation structure to legally minimize self-employment taxes (SE tax) through reasonable salary and distribution allocation.",
        highlights: [
          "IRS Form 2553 S-Corporation Tax Election E-Filing",
          "Articles of Incorporation / Organization State Filings",
          "S-Corp Corporate Bylaws & Shareholder Agreement",
          "Reasonable Officer Compensation & Payroll System Setup"
        ]
      },
      {
        id: "c-corp-registration",
        title: "C-Corporation Registration & Structuring",
        formCode: "IRS Form 1120 / C-Corp",
        badge: "C-Corp Formation",
        description: "Complete C-Corporation incorporation for scaling startups, venture-backed companies, multi-shareholder entities, and foreign founders seeking U.S. market entry.",
        highlights: [
          "Certificate / Articles of Incorporation E-Filing (Delaware, Wyoming, Texas, etc.)",
          "Federal Tax ID (EIN) & Corporate Stock Certificate Issuance",
          "Board of Directors Initial Meeting Minutes & Corporate Bylaws",
          "Foreign Founder U.S. Corporate Structuring & Compliance"
        ]
      }
    ],
    features: [
      "501(c)(3) Non-Profit Organization & Trust Document Preparation",
      "Single-Member LLC State Filings & Custom Operating Agreements",
      "S-Corporation Form 2553 Election & Corporate Bylaws Setup",
      "C-Corporation Incorporation (Delaware / Wyoming / All 50 States)",
      "Official Federal EIN / FEIN Tax ID Acquisition (24-48 Hours)",
      "Registered Agent Service Setup across all 50 US States"
    ],
    deliverables: [
      "Approved State Certificate of Formation / Incorporation",
      "Official IRS EIN Confirmation Letter (CP575 / 147C)",
      "Form 2553 S-Corp Acceptance / 501(c)(3) Determination Letter",
      "Custom Operating Agreement & Corporate Bylaws Binder",
      "Registered Agent Designation Document"
    ],
    timeline: "1-3 Business Days",
    idealFor: "New Business Founders, Non-Profits, High-Earner S-Corps, Venture Startups, & Real Estate Investors",
    requiredDocuments: [
      "Desired Company / Non-Profit / Trust Name Options",
      "Owner / Officer Legal Names, Addresses, & Ownership Percentages",
      "Designated Business Street Address (Physical Address)",
      "Brief Description of Business / Non-Profit Activities"
    ],
    faqs: [
      {
        q: "What is the tax advantage of electing S-Corp status?",
        a: "An S-Corp election allows business owners to pay themselves a reasonable W-2 salary and take remaining profits as distributions, saving thousands of dollars in self-employment taxes."
      },
      {
        q: "How long does it take to obtain 501(c)(3) tax-exempt status for a Non-Profit?",
        a: "Form 1023-EZ streamlined applications take about 2-4 weeks, while full Form 1023 applications typically take 3 to 6 months for IRS approval."
      },
      {
        q: "Can non-US citizens or foreign residents form an LLC or C-Corp in the US?",
        a: "Yes! Non-US residents can legally form a US Single-Member LLC or C-Corp without a Social Security Number (SSN)."
      }
    ]
  },
  {
    id: "llc-reactivation",
    category: "forms",
    title: "Forms & LLC Reactivation",
    icon: RefreshCw,
    badge: "Restoration",
    image: "/services/llc-reactivation.jpg",
    shortDesc: "Reinstate administratively dissolved LLCs, clear backlogged annual reports, resolve state tax holds, and restore good standing.",
    longDesc: "If your LLC was administratively dissolved due to missed annual reports or unpaid state fees, we handle full restoration. We file delinquent returns, obtain tax clearance certificates, and bring your entity back into 100% legal good standing.",
    features: [
      "Reinstatement / Reactivation Application Filing",
      "Backlogged Annual Report & Franchise Tax Filings",
      "State Tax Clearance & Good Standing Certificate",
      "Registered Agent Update & Compliance Restoration",
      "Penalty Abatement Requests for Late Filings"
    ],
    deliverables: ["State Certificate of Reinstatement", "Certificate of Good Standing", "Cleared State Tax Ledger", "Updated Compliance Calendar"],
    timeline: "3-7 Business Days",
    idealFor: "Business Owners with Lapsed, Inactive, or Dissolved LLCs",
    requiredDocuments: [
      "Original LLC Name & State Entity ID Number",
      "State Administrative Dissolution Notice (if available)",
      "Updated Business Address & Owner Details"
    ],
    faqs: [
      {
        q: "Why was my LLC administratively dissolved?",
        a: "States dissolve entities if annual report filings or annual franchise taxes are missed. Reactivation restores your legal protection."
      }
    ]
  },
  {
    id: "llc-closure",
    category: "forms",
    title: "Forms & LLC Closure",
    icon: FileX,
    badge: "Clean Exit",
    image: "/services/llc-closure.jpg",
    shortDesc: "Complete LLC dissolution filings, final business tax returns, state tax clearances, and complete liability release forms.",
    longDesc: "Closing a business properly is critical to prevent ongoing annual tax liabilities or personal legal exposure. We prepare and file official Articles of Dissolution, handle final IRS and state tax returns, and ensure a clean, audit-free shutdown.",
    features: [
      "Articles of Dissolution / Cancellation State Filings",
      "Final Federal & State Business Tax Return Preparation",
      "Final Payroll Tax Filings & W-2 / 1099 Clearances",
      "State Tax Clearance Certificate Acquisition",
      "IRS Entity Closure Notice & Bank Account Shutdown Support"
    ],
    deliverables: ["Official State Dissolution Certificate", "Marked Final Tax Filings", "Tax Clearance Documentation", "Final Closure Confirmation"],
    timeline: "2-5 Business Days",
    idealFor: "Business Owners Closing Entities or Liquidating Companies",
    requiredDocuments: [
      "LLC State Registration Details",
      "Final Year Profit & Loss / Balance Sheet",
      "Owner Dissolution Consent Resolution"
    ],
    faqs: [
      {
        q: "What happens if I don't formally dissolve my LLC with the state?",
        a: "The state will continue to assess annual franchise taxes, fees, and penalties against your entity even if you stop operating."
      }
    ]
  }
];

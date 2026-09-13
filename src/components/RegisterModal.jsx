import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, User, Mail, Phone, CheckCircle2, ShieldCheck } from "lucide-react";
import { createRegistration } from "../services/api";
import { useRegisterModal } from "../context/RegisterModalContext";

export default function RegisterModal() {
  const { isOpen, closeRegisterModal, modalStep, setModalStep } = useRegisterModal();

  const [regFormData, setRegFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmittingReg, setIsSubmittingReg] = useState(false);
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegError("");

    const { firstName, lastName, email, phone } = regFormData;

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setRegError("Please fill in all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setRegError("Please enter a valid email address.");
      return;
    }

    setIsSubmittingReg(true);
    const fullName = `${firstName.trim()} ${lastName.trim()}`;

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      fullName,
      email: email.trim(),
      phone: phone.trim(),
      portalStatus: 'Pending Review',
      accountType: 'Business Portal'
    };

    // 1. Save directly to backend Express API & MongoDB Atlas (triggers backend Nodemailer)
    try {
      await createRegistration(payload);
    } catch (err) {
      console.error("Backend registration API error:", err);
    }

    // 2. Dual email dispatch via FormSubmit.co for immediate notification
    try {
      await fetch(`https://formsubmit.co/ajax/c876639a3fb27700cfc0a781a8d4ec5d`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New NEXGEN Client Portal Registration: ${fullName}`,
          "Client Name": fullName,
          "Email Address": email,
          "Phone Number": phone,
          "Account Type": "Business Portal",
          "Portal Status": "Pending Review",
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      });
    } catch (fsErr) {
      console.warn("FormSubmit email error:", fsErr);
    }

    setIsSubmittingReg(false);
    setRegSuccess(true);
    setRegFormData({ firstName: "", lastName: "", email: "", phone: "" });

    setTimeout(() => {
      closeRegisterModal();
      setRegSuccess(false);
      setModalStep(1);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeRegisterModal}
            className="fixed inset-0 bg-brand-dark/50 backdrop-blur-md"
          />

          {/* Modal Card Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-2xl sm:rounded-[2.5rem] shadow-2xl overflow-y-auto custom-scrollbar border border-white/20 flex flex-col md:flex-row my-auto z-10"
          >
            {/* Left Panel: Info & Branding (Hidden on Mobile, Displayed on Desktop) */}
            <div className="hidden md:flex md:w-5/12 bg-brand-purple p-6 sm:p-8 md:p-12 text-white relative overflow-hidden flex-col justify-between shrink-0">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-orange/20 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-8 border border-white/10">
                  <span className="text-xl sm:text-2xl font-black">T</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-brand-orange font-heading">
                  Exclusive Portal Access
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-8 font-sans">
                  Join thousands of businesses and individuals who trust NEXGEN Accounting Group for their financial compliance and growth.
                </p>

                <div className="space-y-2.5 sm:space-y-4">
                  {[
                    "Secure 256-bit SSL Data Encryption",
                    "Real-time Document Tracking",
                    "Expert Consultation Messaging",
                    "Historical Records Access"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold text-white/90 font-sans tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-4 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-brand-purple bg-slate-200" />
                  ))}
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/60">Trusted by 5k+ clients</span>
              </div>
            </div>

            {/* Right Panel: Action / Form */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center relative bg-white">
              <button
                onClick={closeRegisterModal}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 p-2 rounded-full hover:bg-slate-100 transition-colors z-20 text-slate-400 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {modalStep === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="max-w-sm mx-auto w-full pt-4 md:pt-0"
                  >
                    <span className="section-tag mb-3 sm:mb-4">Registration</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-purple mb-3 sm:mb-4 font-heading leading-[1.15]">
                      Get started with <br />
                      <span className="text-brand-orange">NEXGEN Portal</span>
                    </h2>

                    <p className="text-text-mid font-sans mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
                      You're about to be redirected to our secure client registration system. It only takes 2 minutes to set up your account.
                    </p>

                    <div className="flex flex-col gap-4">
                      <button
                        onClick={() => setModalStep(2)}
                        className="w-full py-3 sm:py-3.5 bg-brand-orange text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg shadow-brand-orange/20 hover:bg-brand-orange-dark hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center group cursor-pointer"
                      >
                        Proceed to Register
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <div className="mt-8 sm:mt-12 flex items-center justify-between pt-6 sm:pt-8 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">Portal Online</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secured by MyTaxPortal</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="max-w-md mx-auto w-full pt-4 md:pt-0"
                  >
                    <button
                      onClick={() => setModalStep(1)}
                      className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 flex items-center gap-2 hover:text-brand-orange transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" /> Back
                    </button>

                    <h2 className="text-2xl sm:text-3xl font-black text-brand-purple mb-1.5 sm:mb-2 font-heading">Account Details</h2>
                    <p className="text-text-mid text-xs sm:text-sm mb-6 sm:mb-8 font-sans">Fill in your details to create your secure portal access.</p>

                    {regSuccess ? (
                      <div className="py-8 sm:py-12 text-center">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-500/10">
                          <CheckCircle2 className="w-7 h-7" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">Account Registered!</h3>
                        <p className="text-xs text-slate-500">Your portal access has been created. Redirecting...</p>
                      </div>
                    ) : (
                      <form className="space-y-3.5 sm:space-y-4" onSubmit={handleRegisterSubmit}>
                        {regError && (
                          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium">
                            {regError}
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div className="space-y-1 sm:space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">First Name *</label>
                            <div className="relative group">
                              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                              <input
                                type="text"
                                required
                                placeholder="John"
                                value={regFormData.firstName}
                                onChange={(e) => setRegFormData({ ...regFormData, firstName: e.target.value })}
                                className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:border-brand-purple focus:bg-white focus:outline-none transition-all"
                              />
                            </div>
                          </div>
                          <div className="space-y-1 sm:space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name *</label>
                            <div className="relative group">
                              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                              <input
                                type="text"
                                required
                                placeholder="Doe"
                                value={regFormData.lastName}
                                onChange={(e) => setRegFormData({ ...regFormData, lastName: e.target.value })}
                                className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:border-brand-purple focus:bg-white focus:outline-none transition-all"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address *</label>
                          <div className="relative group">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                            <input
                              type="email"
                              required
                              placeholder="john@example.com"
                              value={regFormData.email}
                              onChange={(e) => setRegFormData({ ...regFormData, email: e.target.value })}
                              className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:border-brand-purple focus:bg-white focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number *</label>
                          <div className="relative group">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                            <input
                              type="tel"
                              required
                              placeholder="+1 (555) 000-0000"
                              value={regFormData.phone}
                              onChange={(e) => setRegFormData({ ...regFormData, phone: e.target.value })}
                              className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:border-brand-purple focus:bg-white focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmittingReg}
                          className="w-full py-3.5 sm:py-4 bg-brand-purple text-white rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-brand-purple/20 hover:bg-brand-purple-light hover:scale-[1.01] active:scale-[0.99] transition-all mt-3 sm:mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {isSubmittingReg ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Creating Account...</span>
                            </>
                          ) : (
                            "Create Portal Account"
                          )}
                        </button>

                        <p className="text-[9px] sm:text-[10px] text-center text-slate-400 font-sans mt-3 sm:mt-4">
                          By creating an account, you agree to our Terms of Service and Privacy Policy.
                        </p>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

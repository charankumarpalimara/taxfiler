import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User, Mail, Phone, ShieldCheck, Clock, FileText, CheckCircle2,
  LogOut, AlertTriangle, RefreshCw, PlusCircle, Lock, ArrowRight,
  BookOpen, Calendar, Menu, Folder, Settings, Upload
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useRegisterModal } from "../context/RegisterModalContext";
import { fetchUserSubmissions, fetchUserProfile } from "../services/api";
import UserDashboardSidebar from "./UserDashboardSidebar";
import UserDashboardFooter from "./UserDashboardFooter";

export default function UserDashboard() {
  const { token, user, isAuthenticated, logout, isJwtExpired } = useAuth();
  const { openRegisterModal } = useRegisterModal();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("profile"); // 'profile' | 'submissions' | 'documents' | 'settings'
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(user);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const rawToken = sessionStorage.getItem("user_token");
    if (!rawToken || isJwtExpired(rawToken)) {
      logout();
      setErrorMsg("Your session has expired or is invalid. Please log in to view your portal.");
      setLoading(false);
      return;
    }

    const loadData = async () => {
      setLoading(true);
      try {
        try {
          const profileRes = await fetchUserProfile();
          if (profileRes && profileRes.data?.user) {
            setProfileData(profileRes.data.user);
          }
        } catch {
          logout();
          setErrorMsg("Your authentication token has expired. Please log in again.");
          setLoading(false);
          return;
        }

        const subRes = await fetchUserSubmissions();
        if (subRes && subRes.data) {
          const userEmail = profileData?.email || user?.email;
          const userSubs = Array.isArray(subRes.data)
            ? subRes.data.filter(s => s.email?.toLowerCase() === userEmail?.toLowerCase())
            : [];
          setSubmissions(userSubs);
        }
      } catch (err) {
        console.error("Dashboard data load error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!isAuthenticated || !token || isJwtExpired(sessionStorage.getItem("user_token"))) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col justify-between font-sans">
        <div className="flex-1 flex items-center justify-center p-4 pt-16 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-brand-purple mb-2 font-heading">
              Access Restricted
            </h2>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {errorMsg || "Please log in to your NEXGEN Client Portal to view your personal dashboard and tax records."}
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => openRegisterModal(2)}
                className="w-full py-3 bg-brand-orange text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-orange/20 hover:bg-brand-orange-dark transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Log In to Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate("/")}
                className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all cursor-pointer"
              >
                Back to Public Website
              </button>
            </div>
          </motion.div>
        </div>
        <UserDashboardFooter />
      </div>
    );
  }

  const currentUser = profileData || user || {};

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">

      {/* Client Portal Sidebar */}
      <UserDashboardSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Content Area (offset by sidebar width on desktop) */}
      <div className="lg:pl-64 flex-1 flex flex-col justify-between">

        {/* Top Header Bar for Mobile & Quick Actions */}
        <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30 px-4 sm:px-8 py-3 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-sm font-bold text-slate-800 font-heading capitalize">
              {activeTab === 'profile' ? 'Overview & Profile' : activeTab === 'submissions' ? 'My Tax Filings' : activeTab === 'documents' ? 'Tax Documents' : 'Account Settings'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Verified Session</span>
            </div>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </header>

        {/* Inner Content Area */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1">

          {/* Banner Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-purple rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-orange/20 rounded-full blur-[80px]" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-orange text-2xl font-black font-heading shrink-0">
                  {(currentUser.fullName || currentUser.name || "C")[0].toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                      {currentUser.accountType || "Client Portal"}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {currentUser.portalStatus || "Active"}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black font-heading text-white">
                    Welcome back, {currentUser.fullName || currentUser.name || "Client"}!
                  </h1>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">
                    Manage your personal tax filings, documents, and consult with specialists.
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="self-start md:self-center px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>

          {/* Dynamic Views */}
          {loading ? (
            <div className="py-20 text-center text-slate-400">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-3 text-brand-purple" />
              <p className="text-sm">Loading your portal information...</p>
            </div>
          ) : activeTab === "profile" ? (
            /* Profile View */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-lg font-black text-brand-purple font-heading">
                    Personal Details
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    ID: {currentUser.id || "NEX-CLIENT"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                      <User className="w-3.5 h-3.5 text-brand-purple" /> Full Name
                    </div>
                    <div className="text-sm font-bold text-slate-800">
                      {currentUser.fullName || currentUser.name || "N/A"}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                      <Mail className="w-3.5 h-3.5 text-brand-purple" /> Email Address
                    </div>
                    <div className="text-sm font-bold text-slate-800">
                      {currentUser.email || "N/A"}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                      <Phone className="w-3.5 h-3.5 text-brand-purple" /> Phone Number
                    </div>
                    <div className="text-sm font-bold text-slate-800">
                      {currentUser.phone || "Not provided"}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-purple" /> Account Status
                    </div>
                    <div className="text-sm font-bold text-emerald-600">
                      {currentUser.portalStatus || "Active"}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-brand-purple uppercase tracking-wider">Session Security</div>
                    <div className="text-xs text-slate-500 mt-0.5">Authenticated via JWT Token in <code>sessionStorage</code></div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    256-Bit Encrypted
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
                <h3 className="text-lg font-black text-brand-purple font-heading border-b border-slate-100 pb-3">
                  Quick Actions
                </h3>

                <button
                  onClick={() => navigate("/contact")}
                  className="w-full p-4 rounded-2xl bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange font-bold text-xs sm:text-sm text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>Request Tax Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate("/services")}
                  className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>Explore Tax Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ) : activeTab === "submissions" ? (
            /* Filings View */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-brand-purple font-heading">
                  My Tax Filings & Submissions
                </h3>
                <button
                  onClick={() => navigate("/contact")}
                  className="px-4 py-2 bg-brand-orange text-white rounded-xl text-xs font-bold shadow-md shadow-brand-orange/20 hover:bg-brand-orange-dark transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>New Consultation</span>
                </button>
              </div>

              {submissions.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                  <FileText className="w-12 h-12 mx-auto mb-3 opacity-40" />
                  <p className="text-sm font-semibold text-slate-600">No active tax filings found for your email.</p>
                  <p className="text-xs text-slate-400 mt-1">Submit a consultation request to start your tax filing with NEXGEN.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {submissions.map((sub, index) => (
                    <div
                      key={sub.id || index}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-brand-purple">
                            {sub.services?.join(", ") || "Tax Service"}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 font-bold border border-blue-200">
                            {sub.status || "In Progress"}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500">
                          Submitted on: {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString() : "Recent"}
                        </div>
                      </div>

                      <div className="text-xs font-medium text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200 self-start sm:self-center">
                        Phone: {sub.phone}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : activeTab === "documents" ? (
            /* Documents View */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4 text-center py-12"
            >
              <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Folder className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-purple font-heading">Tax Documents Hub</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Upload your W2, 1099, or financial records securely to your NEXGEN client vault.
              </p>
              <button className="px-5 py-2.5 bg-brand-purple text-white text-xs font-bold rounded-xl shadow-md hover:bg-brand-purple-light transition-all inline-flex items-center gap-2 cursor-pointer mt-2">
                <Upload className="w-4 h-4 text-brand-orange" />
                <span>Upload Document</span>
              </button>
            </motion.div>
          ) : (
            /* Settings View */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6"
            >
              <h3 className="text-lg font-black text-brand-purple font-heading border-b border-slate-100 pb-3">
                Account Settings
              </h3>

              <div className="space-y-4 max-w-md">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Email</label>
                  <input
                    type="text"
                    disabled
                    value={currentUser.email || ""}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-500 font-medium"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue={currentUser.fullName || currentUser.name || ""}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium focus:outline-none focus:border-brand-purple"
                  />
                </div>
              </div>
            </motion.div>
          )}

        </main>

        {/* Dedicated Portal Footer */}
        <UserDashboardFooter />

      </div>

    </div>
  );
}

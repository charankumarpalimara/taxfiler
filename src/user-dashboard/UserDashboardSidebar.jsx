import { Link, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, FileText, Folder, Settings, Phone, 
  LogOut, ShieldCheck, User, X, ChevronRight
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function UserDashboardSidebar({ 
  activeTab, 
  setActiveTab, 
  isMobileOpen, 
  setIsMobileOpen 
}) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    {
      id: "profile",
      label: "Overview & Profile",
      icon: LayoutDashboard,
    },
    {
      id: "submissions",
      label: "My Tax Filings",
      icon: FileText,
    },
    {
      id: "documents",
      label: "Tax Documents",
      icon: Folder,
    },
    {
      id: "settings",
      label: "Account Settings",
      icon: Settings,
    },
  ];

  const displayName = user?.fullName || user?.name || "Client Portal";

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-slate-900 text-white flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Header & Branding */}
        <div>
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-white p-1.5 rounded-xl shadow-md group-hover:scale-105 transition-transform">
                <img
                  src="/dark-logo.jpeg"
                  alt="NexGen Logo"
                  className="h-8 w-auto object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="font-black text-white text-sm font-heading block">NEXGEN</span>
                <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest block">Client Portal</span>
              </div>
            </Link>

            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5 font-sans">
            <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Main Menu
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 opacity-80" />}
                </button>
              );
            })}

            <div className="px-3 pt-4 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Support
            </div>

            <Link
              to="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all font-sans"
            >
              <Phone className="w-4 h-4 text-slate-400" />
              <span>Contact Representative</span>
            </Link>
          </nav>
        </div>

        {/* Bottom User Info & Logout */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50">
            <div className="w-9 h-9 rounded-xl bg-brand-purple text-white font-bold text-xs flex items-center justify-center font-heading shrink-0">
              {displayName[0].toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-white truncate">{displayName}</div>
              <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified Client</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-red-500/20 text-slate-300 hover:text-red-400 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-700/60"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}

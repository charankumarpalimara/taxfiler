import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Mail, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (path.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    {
      name: "Solutions",
      dropdown: [
        { name: "Bookkeeping", path: "/bookkeeping" },
        { name: "Payroll", path: "/payroll" },
      ],
    },
    { name: "Tax", path: "/taxes" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    { href: "https://www.facebook.com/profile.php?id=61556566266312", d: "M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" },
    { href: "https://www.instagram.com/pumpkin_tax_co/", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { href: "https://twitter.com/PumpkinTaxco", d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
    { href: "https://www.linkedin.com/company/the-pumpkin-taxco/about/", d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">

      {/* ── Top Info Bar ──────────────────────────────────── */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-brand-purple border-b border-white/10 overflow-hidden hidden md:block"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2 text-[12px] font-medium text-white/80">
              <div className="flex items-center gap-6">
                <a href="mailto:info@pumpkintaxco.com" className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
                  <Mail className="w-3 h-3 text-brand-orange" />
                  info@pumpkintaxco.com
                </a>
                <a href="tel:+18777786754" className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
                  <Phone className="w-3 h-3 text-brand-orange" />
                  +1 (877) 778-6754
                </a>
              </div>
              <div className="flex items-center gap-4">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-white/70 hover:text-brand-orange transition-colors">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d={s.d} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Nav Bar ──────────────────────────────────── */}
      <div className={`transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm"
        : "bg-white/80 backdrop-blur-md border-b border-black/5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "py-3" : "py-4"}`}>

            {/* Logo */}
            <a href="/" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-md">
                <span className="font-black text-xl text-white font-heading">P</span>
              </div>
              <span className="text-xl font-black tracking-tight text-brand-purple font-heading">
                Pumpkin <span className="text-brand-orange">Tax Co</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 font-sans">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="relative group">
                    <button
                      className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold text-text-mid hover:text-brand-purple hover:bg-brand-purple/5 transition-all"
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    {/* Dropdown */}
                    <div
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${openDropdown === link.name ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}
                    >
                      <div className="bg-white border border-black/5 rounded-2xl shadow-xl w-48 overflow-hidden py-2">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.path}
                            onClick={(e) => handleNavClick(e, item.path)}
                            className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-text-mid hover:text-brand-purple hover:bg-brand-purple/5 transition-all"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-text-mid hover:text-brand-purple hover:bg-brand-purple/5 transition-all"
                  >
                    {link.name}
                  </a>
                )
              )}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3 font-sans">
              <a
                href="https://pumpkin.mytaxportal.online/#/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-text-mid hover:text-brand-purple px-4 py-2 rounded-xl hover:bg-brand-purple/5 transition-all"
              >
                Register
              </a>
              <a
                href="https://pumpkintaxco.com/book-a-demo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-orange text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-brand-orange-dark transition-all shadow-md hover:-translate-y-0.5"
              >
                Schedule a Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-brand-purple"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-b border-black/5 px-6 py-6 flex flex-col gap-5 shadow-xl font-sans"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.dropdown ? (
                  <div>
                    <p className="text-xs font-bold text-text-light uppercase tracking-widest mb-2 font-heading">{link.name}</p>
                    <div className="flex flex-col gap-1 pl-3 border-l border-black/5">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.path}
                          onClick={(e) => handleNavClick(e, item.path)}
                          className="text-text-dark font-semibold text-lg py-1 hover:text-brand-orange transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="block text-text-dark font-semibold text-xl hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </a>
                )}
              </motion.div>
            ))}

            <div className="pt-4 border-t border-black/5 flex flex-col gap-3">
              <a
                href="https://pumpkin.mytaxportal.online/#/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl border border-black/10 text-brand-purple font-semibold text-sm"
              >
                Register
              </a>
              <a
                href="https://pumpkintaxco.com/book-a-demo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-3 rounded-xl text-sm shadow-md"
              >
                Schedule a Call <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

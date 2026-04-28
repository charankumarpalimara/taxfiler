import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: "Bookkeeping", path: "/bookkeeping" },
      { name: "Payroll", path: "/payroll" },
      { name: "Tax Services", path: "/taxes" },
    ],
    company: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/#about" },
      { name: "Contact", path: "/contact" },
    ],
    social: [
      { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61556566266312", d: "M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" },
      { name: "Instagram", href: "https://www.instagram.com/pumpkin_tax_co/", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
      { name: "Twitter", href: "https://twitter.com/PumpkinTaxco", d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/the-pumpkin-taxco/about/", d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    ]
  };

  return (
    <footer className="bg-brand-purple relative overflow-hidden text-white pt-20 pb-8">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center group-hover:rotate-6 transition-all duration-300">
                <span className="font-black text-xl text-white font-heading">P</span>
              </div>
              <span className="text-xl font-black tracking-tight text-white font-heading">
                Pumpkin <span className="text-brand-orange">Tax Co</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
              Professional accounting, payroll, and tax services designed to simplify your finances and help your business grow.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-orange hover:text-white transition-all hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">Services</h3>
            <ul className="space-y-4">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group font-sans"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange/0 group-hover:text-brand-orange -ml-5 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">Company</h3>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/#') ? (
                    <a
                      href={link.path}
                      className="text-white/60 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group font-sans"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-brand-orange/0 group-hover:text-brand-orange -ml-5 group-hover:ml-0 transition-all" />
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-white/60 hover:text-brand-orange transition-colors text-sm flex items-center gap-2 group font-sans"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-brand-orange/0 group-hover:text-brand-orange -ml-5 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed font-sans">
                  12234 Queenston Blvd., Ste 200<br />
                  Houston, TX 77095
                </span>
              </li>
              <li>
                <a href="tel:+18777786754" className="flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors group">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-sm font-sans">+1 (877) 778-6754</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@pumpkintaxco.com" className="flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors group">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-sm font-sans">info@pumpkintaxco.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-sans text-center md:text-left">
            © {currentYear} Pumpkin Tax Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-white transition-colors font-sans">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors font-sans">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

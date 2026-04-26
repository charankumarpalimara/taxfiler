import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Newsletter / CTA Section */}
        {/* <div className="bg-gradient-to-r from-brand-purple to-brand-dark border border-white/10 rounded-[3rem] p-10 md:p-14 mb-20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to shift gears?</h3>
            <p className="text-brand-light/80 text-lg">
              Contact Pumpkin today for a free consultation and see how we can help you drive towards success.
            </p>
          </div>
          <Link to="/schedule" className="shrink-0 flex items-center gap-3 bg-brand-orange hover:bg-white hover:text-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-brand-orange/20">
            Book a Free Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Info */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center transform group-hover:rotate-[360deg] transition-all duration-700">
                <span className="text-white font-black text-xl">P</span>
              </div>
            <span className="text-2xl font-black tracking-tight text-white font-heading">
                Pumpkin <span className="text-brand-orange">Tax Co</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed text-base">
              AI-powered tax services, bookkeeping, payroll, and accounting solutions. Simplify taxes and grow.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/profile.php?id=61556566266312", path: "M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" },
                { href: "https://www.instagram.com/pumpkin_tax_co/", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { href: "https://twitter.com/PumpkinTaxco", path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                { href: "https://www.linkedin.com/company/the-pumpkin-taxco/about/", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
              ].map((s, idx) => (
                <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-orange hover:text-white hover:border-brand-orange hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-6 flex items-center gap-2 font-heading">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Services
            </h4>
            <ul className="space-y-4">
              {['Bookkeeping', 'Payroll', 'Taxes', 'Industries'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-6 flex items-center gap-2 font-heading">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Company
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Tax Forms', 'Blog', 'Contact Us'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-base mb-6 flex items-center gap-2 font-heading">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Get in Touch
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors">
                  <MapPin className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <a href="https://maps.google.com" className="text-slate-400 hover:text-white transition-colors mt-2">
                  12234 Queenston Blvd., Ste 200 Houston, TX 77095
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors">
                  <Phone className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <a href="tel:+18777786754" className="text-slate-400 hover:text-white transition-colors text-lg font-semibold">
                  +1 (877) 778-6754
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors">
                  <Mail className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:info@pumpkintaxco.com" className="text-slate-400 hover:text-white transition-colors">
                  info@pumpkintaxco.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-medium">
            © {new Date().getFullYear()} Pumpkin Tax Co. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-sm font-medium text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-sm font-medium text-slate-500 hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

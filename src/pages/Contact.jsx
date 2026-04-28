import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61556566266312",
    color: "#1877F2",
    svg: <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pumpkin_tax_co/",
    color: "#E1306C",
    svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/PumpkinTaxco",
    color: "#1DA1F2",
    svg: <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/the-pumpkin-taxco/about/",
    color: "#0A66C2",
    svg: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-bg-light pt-24">

      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag border-brand-orange text-brand-orange bg-brand-orange/5"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-brand-purple leading-tight mb-6 font-heading"
          >
            Let's Talk<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-dark">Business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-mid max-w-xl mx-auto font-sans"
          >
            Reach out anytime — our team is ready to simplify your taxes and accounting needs.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Details Grid ─────────────────────────────── */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              {
                icon: <MapPin className="w-6 h-6" />,
                label: "Visit Us",
                value: "12234 Queenston Blvd., Ste 200\nHouston, TX 77095",
                href: "https://www.google.com/maps/place/12234+Queenston+Blvd+%23200,+Houston,+TX+77095",
                cta: "Get Directions",
                accent: "bg-brand-purple",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                label: "Email Us",
                value: "info@pumpkintaxco.com",
                href: "mailto:info@pumpkintaxco.com",
                cta: "Send Email",
                accent: "bg-brand-orange",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                label: "Call Us",
                value: "+1 (877) 778-6754",
                href: "tel:+18777786754",
                cta: "Call Now",
                accent: "bg-brand-purple",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                label: "Business Hours",
                value: "Mon – Fri\n9:00 AM – 6:00 PM CST",
                href: null,
                cta: null,
                accent: "bg-brand-orange",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card group p-8 relative overflow-hidden"
              >
                <div className={`w-12 h-12 ${item.accent} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-black/10`}>
                  {item.icon}
                </div>
                <p className="text-text-light text-xs font-bold uppercase tracking-widest mb-2 font-heading">{item.label}</p>
                <p className="text-brand-purple font-bold text-base leading-relaxed whitespace-pre-line mb-5 font-sans">{item.value}</p>
                {item.href && item.cta && (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold text-brand-orange hover:text-brand-orange-dark transition-colors font-sans"
                  >
                    {item.cta} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────────────────── */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden border border-black/5 shadow-2xl h-[420px]"
          >
            <iframe
              title="Pumpkin Tax Co Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.5!2d-95.6739945!3d29.9465986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d42711f1f7fb%3A0xdac1dbea997fc0db!2s12234%20Queenston%20Blvd%20%23200%2C%20Houston%2C%20TX%2077095!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(10%) contrast(1.05)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Social Media ─────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-black/5 pt-12">
            <div>
              <h3 className="text-2xl font-bold text-brand-purple font-heading mb-1">Follow Along</h3>
              <p className="text-text-mid text-sm font-sans">Get tax tips, updates & company news.</p>
            </div>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="w-12 h-12 bg-white border border-black/5 rounded-2xl flex items-center justify-center text-text-light hover:text-brand-orange hover:border-brand-orange/50 transition-all shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">{s.svg}</svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

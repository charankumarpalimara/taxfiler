import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Office Location",
    value: "12234 Queenston Blvd., Ste 200\nHouston, TX 77095",
    href: "https://www.google.com/maps/place/12234+Queenston+Blvd+%23200,+Houston,+TX+77095",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone Number",
    value: "+1 (877) 778-6754",
    href: "tel:+18777786754",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email Address",
    value: "info@pumpkintaxco.com",
    href: "mailto:info@pumpkintaxco.com",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Business Hours",
    value: "Mon – Fri: 9AM – 6PM CST",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 relative overflow-hidden bg-brand-dark border-t border-white/5">
      {/* Background blurs */}
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-40 -right-20 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-brand-orange/40 text-brand-orange text-xs font-semibold tracking-widest uppercase mb-5">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-heading">
            Let's Start a Conversation
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
            Have a question or need a custom tax solution? Fill out the form and our team will respond shortly.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-6">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Info cards */}
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-brand-orange/30 hover:bg-white/8 transition-all"
              >
                <div className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1 font-heading">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-brand-orange transition-colors whitespace-pre-line leading-snug"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium whitespace-pre-line leading-snug">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA to full contact page */}
            <Link
              to="/contact"
              className="group mt-2 flex items-center justify-between bg-gradient-to-r from-brand-orange to-[#e67c00] rounded-2xl p-5 hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-orange/20"
            >
              <div>
                <p className="text-white font-bold font-heading text-sm">Visit our full contact page</p>
                <p className="text-white/70 text-xs mt-0.5">Map, social media & more</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-xl font-bold text-white mb-6 font-heading">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:border-brand-orange focus:bg-white/8 focus:outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:border-brand-orange focus:bg-white/8 focus:outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:border-brand-orange focus:bg-white/8 focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:border-brand-orange focus:bg-white/8 focus:outline-none transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm focus:border-brand-orange focus:outline-none transition-all">
                  <option value="" className="bg-brand-dark">Select a service...</option>
                  <option value="bookkeeping" className="bg-brand-dark">Bookkeeping</option>
                  <option value="payroll" className="bg-brand-dark">Payroll</option>
                  <option value="taxes" className="bg-brand-dark">Tax Filing</option>
                  <option value="planning" className="bg-brand-dark">Tax Planning</option>
                  <option value="other" className="bg-brand-dark">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:border-brand-orange focus:bg-white/8 focus:outline-none transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="button"
                className="group w-full flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-[#e67c00] transition-all shadow-lg shadow-brand-orange/20 hover:-translate-y-0.5"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

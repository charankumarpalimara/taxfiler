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
    <section id="contact" className="py-20 relative overflow-hidden bg-bg-light border-y border-black/5">
      {/* Background blurs */}
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-40 -right-20 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-tag border-brand-orange text-brand-orange bg-brand-orange/5 mb-5">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-3 font-heading">
            Let's Start a Conversation
          </h2>
          <p className="text-text-mid max-w-lg mx-auto text-sm leading-relaxed font-sans">
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
                className="glass-card group p-5 flex items-start gap-4 transition-all"
              >
                <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-text-light uppercase tracking-widest mb-1 font-heading">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-brand-purple text-sm font-medium hover:text-brand-orange transition-colors whitespace-pre-line leading-snug font-sans"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-brand-purple text-sm font-medium whitespace-pre-line leading-snug font-sans">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA to full contact page */}
            <Link
              to="/contact"
              className="group mt-2 flex items-center justify-between bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-2xl p-5 hover:-translate-y-0.5 transition-all shadow-lg shadow-brand-orange/20"
            >
              <div>
                <p className="text-white font-bold font-heading text-sm">Visit our full contact page</p>
                <p className="text-white/80 text-xs mt-0.5 font-sans">Map, social media & more</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <h3 className="text-xl font-bold text-brand-purple mb-6 font-heading">Send us a Message</h3>
            <form className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-light uppercase tracking-widest mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-bg-subtle border border-black/5 text-text-dark text-sm placeholder-text-light/50 focus:border-brand-orange focus:bg-white focus:outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-light uppercase tracking-widest mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-bg-subtle border border-black/5 text-text-dark text-sm placeholder-text-light/50 focus:border-brand-orange focus:bg-white focus:outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-light uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-bg-subtle border border-black/5 text-text-dark text-sm placeholder-text-light/50 focus:border-brand-orange focus:bg-white focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-light uppercase tracking-widest mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-bg-subtle border border-black/5 text-text-dark text-sm placeholder-text-light/50 focus:border-brand-orange focus:bg-white focus:outline-none transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-light uppercase tracking-widest mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl bg-bg-subtle border border-black/5 text-text-mid text-sm focus:border-brand-orange focus:bg-white focus:outline-none transition-all">
                  <option value="" className="bg-white">Select a service...</option>
                  <option value="bookkeeping" className="bg-white">Bookkeeping</option>
                  <option value="payroll" className="bg-white">Payroll</option>
                  <option value="taxes" className="bg-white">Tax Filing</option>
                  <option value="planning" className="bg-white">Tax Planning</option>
                  <option value="other" className="bg-white">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-light uppercase tracking-widest mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-bg-subtle border border-black/5 text-text-dark text-sm placeholder-text-light/50 focus:border-brand-orange focus:bg-white focus:outline-none transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="button"
                className="group w-full flex items-center justify-center gap-2 btn-primary rounded-xl"
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

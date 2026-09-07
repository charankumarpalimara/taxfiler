import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Calendar, CheckCircle2, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo, useRef, useEffect } from "react";

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
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/the-pumpkin-taxco/about/",
    color: "#0A66C2",
    svg: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />,
  },
];

const timeSlots = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"];

export default function Contact() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState("");
  const [calendarDate, setCalendarDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const calendarDays = useMemo(() => {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const days = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ day: daysInPrevMonth - i, currentMonth: false, date: new Date(year, month - 1, daysInPrevMonth - i) });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, currentMonth: true, date: new Date(year, month, i) });
    }
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ day: i, currentMonth: false, date: new Date(year, month + 1, i) });
    }
    return days;
  }, [calendarDate]);

  const isSameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const prevMonth = () => setCalendarDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const nextMonth = () => setCalendarDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-tag border-brand-orange text-brand-orange bg-brand-orange/5"
            >
              Contact & Support
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-brand-purple mb-6 font-heading"
            >
              How can we <span className="gradient-text">help you?</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-mid font-sans"
            >
              Whether you're looking for tax advice, bookkeeping services, or need help with business formation, our experts are here for you.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* ── Left Column: Form & Info ─────────────────────────────── */}
          <div className="lg:col-span-7 space-y-12">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 md:p-12 shadow-premium border border-slate-100 relative overflow-hidden"
            >
              {/* Subtle background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-3xl font-black text-brand-purple mb-2 font-heading">Send us a Message</h2>
                <p className="text-text-mid text-sm mb-10 font-sans">Our experts typically respond within 2-4 business hours.</p>

                <form className="space-y-6 font-sans">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-brand-purple">Full Name</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                        <input
                          type="text"
                          className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-200 text-text-dark placeholder:text-slate-400 focus:border-brand-purple focus:bg-white focus:ring-4 focus:ring-brand-purple/5 focus:outline-none transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-brand-purple">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                        <input
                          type="email"
                          className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-200 text-text-dark placeholder:text-slate-400 focus:border-brand-purple focus:bg-white focus:ring-4 focus:ring-brand-purple/5 focus:outline-none transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-brand-purple">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                        <input
                          type="tel"
                          className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-200 text-text-dark placeholder:text-slate-400 focus:border-brand-purple focus:bg-white focus:ring-4 focus:ring-brand-purple/5 focus:outline-none transition-all duration-300"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-brand-purple">Service Interest</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-brand-purple transition-colors" />
                        <select className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-200 text-text-dark focus:border-brand-purple focus:bg-white focus:ring-4 focus:ring-brand-purple/5 focus:outline-none transition-all duration-300 appearance-none">
                          <option>Individual Tax Filing</option>
                          <option>Business Tax Filing</option>
                          <option>Bookkeeping & Accounting</option>
                          <option>Payroll Services</option>
                          <option>Business Formation</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5 transition-colors group-focus-within:text-brand-purple">Your Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50/50 border border-slate-200 text-text-dark placeholder:text-slate-400 focus:border-brand-purple focus:bg-white focus:ring-4 focus:ring-brand-purple/5 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-2xl group shadow-xl shadow-brand-secondary/20 hover:shadow-2xl hover:shadow-brand-secondary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 flex items-center justify-center">
                    Send Secure Message
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Details Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-md border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-purple mb-2 font-heading">US Office</h3>
                <p className="text-text-mid text-sm leading-relaxed mb-4 font-sans">
                  12234 Queenston Blvd., Ste 200<br />
                  Houston, TX 77095
                </p>
                <a href="tel:+18777786754" className="text-brand-purple font-bold text-sm hover:text-brand-orange transition-colors">+1 (877) 778-6754</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-md border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-purple mb-2 font-heading">Email Support</h3>
                <p className="text-text-mid text-sm leading-relaxed mb-4 font-sans">
                  For general inquiries and support,<br />
                  reach out to our global team.
                </p>
                <a href="mailto:info@pumpkintaxco.com" className="text-brand-purple font-bold text-sm hover:text-brand-orange transition-colors">info@pumpkintaxco.com</a>
              </motion.div>
            </div>
          </div>

          {/* ── Right Column: Appointment Scheduler ─────────────────────────────── */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32 bg-brand-purple rounded-lg p-8 md:p-12 shadow-2xl text-white overflow-visible"
            >
              {/* Background accents (wrapped in overflow-hidden to prevent mobile overflow) */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/10 rounded-full -ml-24 -mb-24 blur-[60px]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="w-6 h-6 text-brand-orange" />
                  <h2 className="text-2xl font-bold text-white">Book a Consultation</h2>
                </div>

                <p className="text-white/80 text-sm mb-8 font-sans">
                  Schedule a free 15-minute discovery call with one of our tax experts to discuss your needs.
                </p>

                <div className="space-y-6">
                  {/* Date Picker — Trigger Button + Dropdown */}
                  <div ref={calendarRef} className="relative">
                    <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Select Date</label>

                    {/* Trigger Button */}
                    <button
                      onClick={() => setIsCalendarOpen(o => !o)}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200"
                      style={{
                        background: isCalendarOpen ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.08)',
                        border: `1px solid ${isCalendarOpen ? 'rgba(249,115,22,0.7)' : 'rgba(255,255,255,0.18)'}`,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 shrink-0" style={{ color: '#F97316' }} />
                        <span className="text-sm font-semibold text-white">
                          {selectedDate
                            ? selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
                            : 'Pick a date'}
                        </span>
                      </div>
                      <ChevronRight
                        className="w-4 h-4 transition-transform duration-200 shrink-0"
                        style={{
                          color: 'rgba(255,255,255,0.5)',
                          transform: isCalendarOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>

                    {/* Dropdown Calendar */}
                    {isCalendarOpen && (
                      <div
                        className="absolute top-full left-0 right-0 mt-2 rounded-2xl z-[999] shadow-2xl border border-slate-200 overflow-hidden backdrop-blur-xl"
                        style={{
                          background: 'rgba(255,255,255,0.95)',
                        }}
                      >
                        {/* Month Nav */}
                        <div
                          className="flex items-center justify-between px-4 py-3 border-b border-slate-200"
                        >
                          <button
                            onClick={prevMonth}
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-slate-100 hover:bg-slate-200"
                          >
                            <ChevronLeft className="w-4 h-4 text-slate-700" />
                          </button>

                          <span className="text-sm font-bold text-slate-800 tracking-wide">
                            {monthNames[calendarDate.getMonth()]} {calendarDate.getFullYear()}
                          </span>

                          <button
                            onClick={nextMonth}
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 bg-slate-100 hover:bg-slate-200"
                          >
                            <ChevronRight className="w-4 h-4 text-slate-700" />
                          </button>
                        </div>

                        {/* Day Labels */}
                        <div className="grid grid-cols-7 px-3 pt-3 pb-2">
                          {dayNames.map(d => (
                            <div
                              key={d}
                              className="text-center text-[10px] font-bold uppercase tracking-wider text-slate-400"
                            >
                              {d}
                            </div>
                          ))}
                        </div>

                        {/* Days Grid */}
                        <div className="grid grid-cols-7 gap-1 px-3 pb-4">
                          {calendarDays.map((item, idx) => {
                            const isSelected = isSameDay(item.date, selectedDate);
                            const isToday = isSameDay(item.date, today);

                            return (
                              <button
                                key={idx}
                                onClick={() => {
                                  setSelectedDate(item.date);
                                  setIsCalendarOpen(false);
                                }}
                                className="aspect-square rounded-xl text-[12px] font-semibold transition-all duration-200 hover:scale-105"
                                style={{
                                  background: isSelected
                                    ? '#7C3AED'
                                    : isToday
                                      ? '#EDE9FE'
                                      : 'transparent',

                                  color: isSelected
                                    ? '#fff'
                                    : item.currentMonth
                                      ? '#1E293B'
                                      : '#CBD5E1',

                                  border: isToday && !isSelected
                                    ? '1px solid #A78BFA'
                                    : '1px solid transparent',
                                }}
                              >
                                {item.day}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-3">Available Slots (CST)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border ${selectedTime === time
                            ? "bg-brand-orange border-brand-orange text-white"
                            : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                            }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button className="w-full text-lg py-2 font-bold text-white bg-brand-orange rounded-2xl shadow-lg shadow-black/20 hover:bg-brand-orange-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                    Confirm Appointment
                  </button>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                      No commitment required
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/60 mt-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                      CPA-led consultation
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-slate-50 rounded-3xl p-8 border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-brand-purple" />
                <h3 className="font-bold text-brand-purple font-heading">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-text-mid font-sans">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-bold">9:00 AM – 6:00 PM CST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-500 font-bold">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Socials Section */}
      <section className="mt-24 pt-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-brand-purple mb-8 font-heading">Follow our journey</h3>
          <div className="flex justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-text-light hover:text-brand-purple hover:shadow-xl transition-all border border-slate-100"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">{social.svg}</svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

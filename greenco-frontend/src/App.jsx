import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Toaster } from "react-hot-toast";
// Global base styles
import './index.css'

// Global components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SocialBand from './components/SocialBand'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Careers from './pages/Careers'
import PartnerWithUs from './pages/PartnerWithUs'
import ProjectDetail from './pages/ProjectDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import Rera from './pages/Rera'

// Admin components
import AdminLayout from './admin/AdminLayout'
import AdminDashboard from './admin/AdminDashboard'
import ManageProjects from './admin/ManageProjects'
import ProjectForm from './admin/ProjectForm'
import ManageEnquiries from './admin/ManageEnquiries'
import ManageGallery from './admin/ManageGallery'
import GalleryForm from './admin/GalleryForm'
import AdminProfile from './admin/AdminProfile'
import ProtectedRoute from './admin/ProtectedRoute'
import LoginPage from './admin/LoginPage'

const ClientLayout = ({ children }) => (
  <div className="app">
    <Navbar />
    <SocialBand />
    {children}
    <Footer />
  </div>
);

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
      offset: 60,
    });

    // --- 1. OPTIMIZED SCROLL REVEAL (Intersection Observer) ---
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, { threshold: 0.15 });

    const refreshObservers = () => {
      const reveals = document.querySelectorAll('.scroll-reveal:not(.revealed)');
      reveals.forEach(el => revealObserver.observe(el));
    };

    refreshObservers();

    // --- 2. OPTIMIZED PARALLAX & MOUSE TRACKING (Throttled via rAF) ---
    let tick = false;
    let lastScrollY = window.pageYOffset;
    let lastMouse = { x: 0, y: 0 };

    // Cache elements for this route
    const heroBgImg = document.querySelector('.hero-bg img');
    const hoverCards = document.querySelectorAll('.hover-lift');

    const updateAnimations = () => {
      // Parallax
      if (heroBgImg) {
        const rate = lastScrollY * -0.5;
        heroBgImg.style.transform = `translateY(${rate}px) scale(${1 + lastScrollY * 0.0002})`;
      }

      // Mouse Move Hover Effects
      hoverCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = lastMouse.x - rect.left;
        const y = lastMouse.y - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });

      tick = false;
    };

    const requestTick = () => {
      if (!tick) {
        requestAnimationFrame(updateAnimations);
        tick = true;
      }
    };

    const handleScroll = () => {
      lastScrollY = window.pageYOffset;
      requestTick();
    };

    const handleMouseMove = (e) => {
      lastMouse.x = e.clientX;
      lastMouse.y = e.clientY;
      requestTick();
    };

    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleAnchorClick);
      revealObserver.disconnect();
    };
  }, [location.pathname]); // Re-run when route changes to catch new elements

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout><Home /></ClientLayout>} />
        <Route path="/about" element={<ClientLayout><About /></ClientLayout>} />
        <Route path="/projects" element={<ClientLayout><Projects /></ClientLayout>} />
        <Route path="/gallery" element={<ClientLayout><Gallery /></ClientLayout>} />
        <Route path="/news" element={<ClientLayout><News /></ClientLayout>} />
        <Route path="/careers" element={<ClientLayout><Careers /></ClientLayout>} />
        <Route path="/partner" element={<ClientLayout><PartnerWithUs /></ClientLayout>} />
        <Route path="/project/:id" element={<ClientLayout><ProjectDetail /></ClientLayout>} />
        <Route path="/contact" element={<ClientLayout><Contact /></ClientLayout>} />
        <Route path="/privacy" element={<ClientLayout><PrivacyPolicy /></ClientLayout>} />
        <Route path="/terms" element={<ClientLayout><TermsConditions /></ClientLayout>} />
        <Route path="/rera" element={<ClientLayout><Rera /></ClientLayout>} />

        {/* Auth Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<ManageProjects />} />
          <Route path="projects/new" element={<ProjectForm />} />
          <Route path="projects/edit/:id" element={<ProjectForm />} />
          <Route path="enquiries" element={<ManageEnquiries />} />
          <Route path="gallery" element={<ManageGallery />} />
          <Route path="gallery/new" element={<GalleryForm />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  )
}

export default App

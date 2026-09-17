import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import SideBar from "./components/SideBar";
import Contact from './pages/Contact';
import Bookkeeping from "./pages/Bookkeeping";
import Payroll from "./pages/Payroll";
import Taxes from "./pages/Taxes";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Industries from "./pages/Industries";
import Forms from "./pages/Forms";
import { RegisterModalProvider } from "./context/RegisterModalContext";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookkeeping" element={<Bookkeeping />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/taxes" element={<Taxes />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <SideBar />
      </div>
    </Router>
  );
}

export default App;

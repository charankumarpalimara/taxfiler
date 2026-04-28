import { useNavigate, NavLink } from 'react-router-dom';
import { LayoutDashboard, Building2, MessageSquare, PlusCircle, ArrowLeft, X, Image as ImageIcon, User, LogOut } from 'lucide-react';
import { toast } from 'react-hot-toast';
import './Admin.css';

const AdminSidebar = ({ isMobileOpen, onClose }) => {
    const navigate = useNavigate();

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

            <aside className={`admin-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
                <div className="admin-logo">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flex: 1 }}>
                        <span className="logo-icon">GC</span>
                        <h2>GreenCo Admin</h2>
                    </div>
                    <button className="mobile-close-btn" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <nav className="admin-nav">
                    <NavLink to="/admin" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/admin/projects" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <Building2 size={20} />
                        <span>Manage Projects</span>
                    </NavLink>
                    <NavLink to="/admin/enquiries" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <MessageSquare size={20} />
                        <span>Enquiries</span>
                    </NavLink>
                    <NavLink to="/admin/gallery" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                        <ImageIcon size={20} />
                        <span>Gallery</span>
                    </NavLink>
                    {/* <NavLink to="/admin/projects/new" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <PlusCircle size={20} />
                    <span>Add Project</span>
                </NavLink> */}
                </nav>

            </aside>
        </>
    );
};

export default AdminSidebar;

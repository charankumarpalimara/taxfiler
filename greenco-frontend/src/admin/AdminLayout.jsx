import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { toast } from 'react-hot-toast';
import AdminSidebar from './AdminSidebar';
import './Admin.css';

const AdminLayout = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        toast.success('Logged out successfully');
        navigate('/login');
    };

    return (
        <div className="admin-container">
            <AdminSidebar isMobileOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
            <main className="admin-content">
                <header className="admin-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button 
                            className="mobile-toggle" 
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <h1>Admin Dashboard</h1>
                    </div>
                    <div className="admin-user-container" ref={dropdownRef} style={{ position: 'relative' }}>
                        <button 
                            className="admin-user" 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem', borderRadius: '8px' }}
                        >
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(27, 67, 50, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <User size={18} color="var(--admin-primary)" />
                            </div>
                            <span style={{ fontWeight: 600, color: 'var(--admin-primary)' }}>Welcome, Admin</span>
                        </button>

                        {isDropdownOpen && (
                            <div className="admin-profile-dropdown" style={{
                                position: 'absolute', top: 'calc(100% + 10px)', right: 0,
                                background: '#fff', borderRadius: '12px', padding: '0.5rem',
                                minWidth: '200px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                border: '1px solid var(--admin-border)', zIndex: 100,
                                display: 'flex', flexDirection: 'column', gap: '0.2rem',
                                animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                            }}>
                                <Link 
                                    to="/admin/profile" 
                                    className="dropdown-item" 
                                    onClick={() => setIsDropdownOpen(false)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1rem', textDecoration: 'none', color: '#4a5568', borderRadius: '8px', transition: 'all 0.2s', fontSize: '0.95rem', fontWeight: 500 }}
                                >
                                    <Settings size={18} color="#718096" />
                                    <span>Account Settings</span>
                                </Link>
                                <div style={{ height: '1px', background: 'var(--admin-border)', margin: '0.2rem 0' }}></div>
                                <button 
                                    onClick={handleLogout}
                                    className="dropdown-item text-danger"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1rem', background: 'none', border: 'none', width: '100%', cursor: 'pointer', color: '#e53e3e', borderRadius: '8px', transition: 'all 0.2s', fontSize: '0.95rem', fontWeight: 600, textAlign: 'left' }}
                                >
                                    <LogOut size={18} />
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        )}
                    </div>
                </header>
                <div className="admin-body">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;

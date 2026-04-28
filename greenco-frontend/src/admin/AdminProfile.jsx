import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Shield, Calendar, Settings, LogOut } from 'lucide-react';
import { toast } from 'react-hot-toast';
import './Admin.css';

const AdminProfile = () => {
    const navigate = useNavigate();
    const storedUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    const adminUser = {
        name: storedUser.name || 'Administrator',
        email: storedUser.email || 'admin@greenco.in',
        role: 'Super Admin',
        joinedDate: storedUser.createdAt ? new Date(storedUser.createdAt).toLocaleDateString() : 'Jan 2024',
        lastLogin: 'Today'
    };

    const handleLogout = () => {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        toast.success('Logged out successfully');
        navigate('/login');
    };

    return (
        <div className="admin-profile-page">
            <div className="profile-hero">
                <div className="profile-cover"></div>
                <div className="profile-id-section">
                    <div className="profile-avatar">
                        <User size={60} color="white" />
                    </div>
                    <div className="profile-main-info">
                        <h2>{adminUser.name}</h2>
                        <span className="role-badge">{adminUser.role}</span>
                    </div>
                </div>
            </div>

            <div className="profile-grid">
                <div className="profile-card info-card">
                    <h3>Account Details</h3>
                    <div className="info-list">
                        <div className="info-item">
                            <Mail size={18} />
                            <div>
                                <label>Email Address</label>
                                <p>{adminUser.email}</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Shield size={18} />
                            <div>
                                <label>Security Level</label>
                                <p>Maximum Permission</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Calendar size={18} />
                            <div>
                                <label>Administrator Since</label>
                                <p>{adminUser.joinedDate}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-card actions-card">
                    <h3>Quick Settings</h3>
                    <div className="settings-grid">
                        <button className="settings-btn">
                            <Settings size={20} />
                            <span>Preferences</span>
                        </button>
                        <button className="settings-btn" onClick={handleLogout}>
                            <LogOut size={20} color="#ff4d4f" />
                            <span style={{ color: '#ff4d4f' }}>Sign Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;

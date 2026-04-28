import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { api } from './adminApi/api';
import axios from "axios";
import './Admin.css';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await api.post('/auth/login', credentials);

            if (response.data.success) {
                localStorage.setItem('adminLoggedIn', 'true');
                localStorage.setItem('adminToken', response.data.data.token);
                localStorage.setItem('adminUser', JSON.stringify(response.data.data.user));

                toast.success('Welcome back, Admin!');
                navigate('/admin');
            } else {
                toast.error(response.data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login Error:', error);
            const errorMsg = error.response?.data?.message || 'Invalid credentials or server error';
            toast.error(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-visual-panel">
                <div className="visual-content">
                    <ShieldCheck size={64} className="visual-icon" />
                    <h1>Secure Access</h1>
                    <p>GreenCo Estate Administration Management Portal</p>
                </div>
            </div>

            <div className="login-form-panel">
                <div className="login-card-modern">
                    <div className="login-header-modern">
                        <div className="login-logo-wrap">GC</div>
                        <h2>Admin Login</h2>
                        <p>Please enter your administrative credentials</p>
                    </div>

                    <form onSubmit={handleLogin} className="login-form-modern">
                        <div className="form-group-modern-login">
                            <label>Email Address</label>
                            <div className="input-with-icon">
                                <Mail size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    placeholder="admin@greenco.in"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group-modern-login">
                            <label>Secure Password</label>
                            <div className="input-with-icon">
                                <Lock size={18} />
                                <input
                                    type="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn-login-modern"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Verifying...' : 'Access Dashboard'}
                            {!isLoading && <ArrowRight size={18} />}
                        </button>
                    </form>

                    <div className="login-footer-text">
                        <p>Authorized personnel only. All access is logged.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

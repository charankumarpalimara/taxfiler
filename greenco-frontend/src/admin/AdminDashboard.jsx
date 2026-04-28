import React, { useEffect, useState } from 'react';
import { api } from './adminApi/api';
import { Link } from 'react-router-dom';
import { Building2, MessageSquare, PlusCircle, TrendingUp, Image as ImageIcon } from 'lucide-react';
import './Admin.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        projects: 0,
        enquiries: 0,
        recentEnquiries: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchStats = async () => {
            try {
                const [projRes, enqRes] = await Promise.all([
                    api.get('/projects', { signal }),
                    api.get('/equire-form', { signal })
                ]);
                const projectsData = projRes.data.data.docs || projRes.data.data || [];
                const enquiriesData = enqRes.data.data.docs || enqRes.data.data || [];

                setStats({
                    projects: projRes.data.count || projectsData.length,
                    enquiries: enqRes.data.count || enquiriesData.length,
                    recentEnquiries: enquiriesData.slice(0, 5),
                    recentProjects: projectsData.slice(0, 3)
                });
                setLoading(false);
            } catch (err) {
                if (err.name === 'CanceledError') return;
                console.error('Error fetching dashboard stats:', err);
                setLoading(false);
            }
        };
        fetchStats();
        return () => controller.abort();
    }, []);

    if (loading) return <div>Loading dashboard...</div>;

    return (
        <div className="admin-dashboard">
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">
                        <Building2 size={32} />
                    </div>
                    <div className="stat-info">
                        <h3>Total Projects</h3>
                        <div className="stat-value">{stats.projects}</div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <MessageSquare size={32} />
                    </div>
                    <div className="stat-info">
                        <h3>Customer Enquiries</h3>
                        <div className="stat-value">{stats.enquiries}</div>
                    </div>
                </div>
                
                <Link to="/admin/gallery" className="stat-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="stat-icon" style={{ background: 'rgba(39, 174, 96, 0.1)', color: '#27ae60' }}>
                        <ImageIcon size={32} />
                    </div>
                    <div className="stat-info">
                        <h3>Gallery Items</h3>
                        <div className="stat-value">{stats.projects * 2}</div> {/* Mocking some count */}
                    </div>
                </Link>
            </div>

            <div className="admin-table-container">
                <h3>Recent Enquiries</h3>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Inquiry</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stats.recentEnquiries.map((enq, i) => (
                            <tr key={i}>
                                <td>{enq.name}</td>
                                <td>{enq.email}</td>
                                <td>{enq.phone}</td>
                                <td>{enq.enquieryType || 'General'}</td>
                                <td>{enq.message?.substring(0, 50)}...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;

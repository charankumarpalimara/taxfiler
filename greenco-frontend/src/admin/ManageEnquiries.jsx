import React, { useEffect, useState } from 'react';
import { api } from './adminApi/api';
import { Trash2, Phone, Mail, MessageCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import './Admin.css';

const ManageEnquiries = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchEnquiries = async (signal) => {
        try {
            setLoading(true);
            const response = await api.get(`/equire-form?page=${page}&limit=10`, { signal });
            setEnquiries(response.data.data.docs || response.data.data);
            setTotalPages(response.data.data.totalPages || 1);
            setLoading(false);
        } catch (err) {
            if (err.name === 'CanceledError') return;
            console.error('Error fetching enquiries:', err);
            toast.error('Failed to load enquiries');
            setLoading(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchEnquiries(controller.signal);
        return () => controller.abort();
    }, [page]);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
        try {
            await api.delete(`/equire-form/${id}`);
            toast.success('Enquiry deleted');
            fetchEnquiries();
        } catch (err) {
            toast.error('Failed to delete enquiry');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="manage-enquiries-page">
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--admin-primary)' }}>Customer Enquiries</h2>
                    <p style={{ color: '#666', marginTop: '0.4rem' }}>Managing inquiries from the contact form</p>
                </div>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Contact Info</th>
                            <th>Inquiry Type</th>
                            <th>Message</th>

                            {/* <th></th> */}
                            {/* <th>Status</th> */}
                            <th>Date and Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enquiries.length > 0 ? enquiries.map((enq) => (
                            <tr key={enq._id}>
                                <td>
                                    <div style={{ fontWeight: 600 }}>{enq.name}</div>
                                </td>
                                <td>
                                    <div className="contact-list">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <Mail size={14} /> {enq.email}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <Phone size={14} /> {enq.phone}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge-type">{enq.enquieryType || 'General'}</span>
                                </td>
                                <td>{enq.message}</td>
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>{enq.createdAt || 'General'}</td>
                                </tr>
                                {/* <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>No enquiries found</td>
                                </tr> */}
                                <td>
                                    <div className="action-btns">
                                        <button
                                            className="btn-icon btn-delete"
                                            onClick={() => handleDelete(enq._id)}
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>No enquiries found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="pagination" style={{ display: 'flex', gap: '1rem', marginTop: '2.4rem', justifyContent: 'center' }}>
                    <button
                        className="btn-admin btn-admin-outline"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <div style={{ alignSelf: 'center', padding: '0.5rem 1rem', background: 'white', borderRadius: '12px', border: '1px solid var(--admin-border)', fontSize: '0.9rem' }}>
                        Page <strong>{page}</strong> of {totalPages}
                    </div>
                    <button
                        className="btn-admin btn-admin-outline"
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default ManageEnquiries;

import React, { useEffect, useState } from 'react';
import { api, getImageUrl } from './adminApi/api';
import { Edit, Trash2, Plus, X } from 'lucide-react';
import { toast } from 'react-hot-toast';
import ProjectForm from './ProjectForm';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const ManageProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    const fetchProjects = async (signal) => {
        try {
            setLoading(true);
            const response = await api.get(`/projects?page=${page}&limit=10`, { signal });
            setProjects(response.data.data);
            setTotalPages(response.data.pages || 1);
            setLoading(false);
        } catch (err) {
            if (err.name === 'CanceledError') return;
            console.error('Error fetching projects:', err);
            toast.error('Failed to load projects');
            setLoading(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchProjects(controller.signal);
        return () => controller.abort();
    }, [page]);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this project?')) return;
        try {
            await api.delete(`/projects/${id}`);
            toast.success('Project deleted');
            fetchProjects();
        } catch (err) {
            toast.error('Failed to delete project');
        }
    };

    if (loading) return <div className="admin-body">Loading projects...</div>;

    return (
        <div className="manage-projects-page">
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--admin-primary)' }}>Manage Projects</h2>
                    <p style={{ color: '#666', marginTop: '0.4rem' }}>View and manage your property listings</p>
                </div>
                <button
                    onClick={() => navigate('/admin/projects/new')}
                    className="btn-admin btn-admin-primary"
                    style={{ borderRadius: '12px', padding: '0.8rem 1.5rem' }}
                >
                    <Plus size={20} /> Add New Project
                </button>
            </div>

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length > 0 ? projects.map((proj) => (
                            <tr key={proj._id}>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '45px', height: '45px', borderRadius: '10px', overflow: 'hidden' }}>
                                            <img src={getImageUrl(proj.image)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, color: 'var(--admin-primary)' }}>{proj.title}</div>
                                            <div style={{ fontSize: '0.75rem', color: '#888' }}>ID: {proj.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{proj.location}</td>
                                <td>
                                    <span className="badge-type">{proj.type}</span>
                                </td>
                                <td>
                                    <span style={{
                                        padding: '0.3rem 0.6rem',
                                        borderRadius: '6px',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        background: proj.status === 'Ongoing' ? '#e8f5e9' : '#fff3e0',
                                        color: proj.status === 'Ongoing' ? '#2e7d32' : '#ef6c00'
                                    }}>
                                        {proj.status}
                                    </span>
                                </td>
                                <td style={{ fontWeight: 600 }}>{proj.price}</td>
                                <td>
                                    <div className="action-btns">
                                        <button
                                            onClick={() => navigate(`/admin/projects/edit/${proj._id}`)}
                                            className="btn-icon btn-edit"
                                            title="Edit"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            className="btn-icon btn-delete"
                                            onClick={() => handleDelete(proj._id)}
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
                                    No projects found. Use the button above to add one.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 0 && (
                <div className="pagination" style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}>
                    <button
                        className="btn-admin btn-admin-outline"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <div style={{ alignSelf: 'center', padding: '0.5rem 1rem', background: 'white', borderRadius: '8px', border: '1px solid var(--admin-border)', fontSize: '0.9rem' }}>
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

export default ManageProjects;

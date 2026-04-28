import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, getImageUrl } from './adminApi/api';
import { Trash2, Plus } from 'lucide-react';
import { toast } from 'react-hot-toast';
import './Admin.css';

const ManageGallery = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchGallery = async (signal) => {
        try {
            setLoading(true);
            const response = await api.get('/gallery', { signal });
            setItems(response.data.data);
            setLoading(false);
        } catch (err) {
            if (err.name === 'CanceledError') return;
            console.error('Error fetching gallery:', err);
            toast.error('Failed to load gallery');
            setLoading(false);
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchGallery(controller.signal);
        return () => controller.abort();
    }, []);


    const handleDelete = async (id) => {
        if (!window.confirm('Delete this image from gallery?')) return;
        try {
            await api.delete(`/gallery/${id}`);
            toast.success('Image removed');
            fetchGallery();
        } catch (err) {
            toast.error('Failed to delete image');
        }
    };

    if (loading) return <div className="admin-body">Loading gallery...</div>;

    return (
        <div className="manage-gallery-page">
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--admin-primary)' }}>Manage Gallery</h2>
                    <p style={{ color: '#666', marginTop: '0.4rem' }}>Managing photographs across all categories</p>
                </div>
                <button onClick={() => navigate('/admin/gallery/new')} className="btn-admin btn-admin-primary">
                    <Plus size={20} /> Add New Image
                </button>
            </div>

            <div className="gallery-admin-grid">
                {items.map((item) => (
                    <div key={item._id} className="gallery-admin-card">
                        <div className="gallery-admin-img">
                            <img src={getImageUrl(item.image)} alt={item.title} />
                            <div className="gallery-admin-overlay">
                                <button onClick={() => handleDelete(item._id)} className="btn-icon btn-delete-white">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="gallery-admin-info">
                            <h4>{item.title}</h4>
                            <span className="badge-type">{item.category}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ManageGallery;

import React, { useState } from 'react';
import { api, getImageUrl } from './adminApi/api';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Save, ArrowLeft, Image as ImageIcon, Plus } from 'lucide-react';
import './Admin.css';

const GalleryForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        image: '', // Use this for URL
        category: 'apartments'
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploadMode, setUploadMode] = useState('file'); // 'file' or 'url'
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            setFormData({ ...formData, image: '' }); // Clear URL if file selected
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = new FormData();
            data.append('title', formData.title);
            data.append('desc', formData.desc);
            data.append('category', formData.category);

            if (uploadMode === 'file') {
                if (!selectedFile) {
                    toast.error('Please select an image file to upload.');
                    setLoading(false);
                    return;
                }
                data.append('image', selectedFile);
            } else {
                if (!formData.image || !formData.image.startsWith('http')) {
                    toast.error('Please provide a valid image URL.');
                    setLoading(false);
                    return;
                }
                data.append('image', formData.image);
            }

            await api.post('/gallery', data);

            toast.success('Image added to gallery');
            navigate('/admin/gallery');
        } catch (err) {
            toast.error(err.response?.data?.message || 'Failed to add image');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="project-form-modal-inner">
            <div className="page-header" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button onClick={() => navigate('/admin/gallery')} className="btn-icon" title="Go Back">
                        <ArrowLeft size={24} />
                    </button>
                    <h2 style={{ margin: 0 }}>Add New Gallery Image</h2>
                </div>
            </div>

            <div className="admin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label style={{ marginBottom: '0.8rem', display: 'block' }}>Image Source</label>

                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--admin-border)' }}>
                            <button
                                type="button"
                                onClick={() => { setUploadMode('file'); setFormData({ ...formData, image: '' }); }}
                                style={{
                                    background: 'none', border: 'none', padding: '0.6rem 1rem', cursor: 'pointer',
                                    borderBottom: uploadMode === 'file' ? '2px solid var(--admin-primary)' : '2px solid transparent',
                                    color: uploadMode === 'file' ? 'var(--admin-primary)' : '#888',
                                    fontWeight: uploadMode === 'file' ? 600 : 400,
                                    fontSize: '0.9rem', outline: 'none'
                                }}
                            >
                                Upload File
                            </button>
                            <button
                                type="button"
                                onClick={() => { setUploadMode('url'); setSelectedFile(null); setPreviewUrl(null); }}
                                style={{
                                    background: 'none', border: 'none', padding: '0.6rem 1rem', cursor: 'pointer',
                                    borderBottom: uploadMode === 'url' ? '2px solid var(--admin-primary)' : '2px solid transparent',
                                    color: uploadMode === 'url' ? 'var(--admin-primary)' : '#888',
                                    fontWeight: uploadMode === 'url' ? 600 : 400,
                                    fontSize: '0.9rem', outline: 'none'
                                }}
                            >
                                Image URL
                            </button>
                        </div>

                        <div style={{ marginTop: '0.8rem' }}>
                            {uploadMode === 'url' ? (
                                <div>
                                    <input
                                        type="text"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleInputChange}
                                        placeholder="https://example.com/image.jpg"
                                        style={{
                                            width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--admin-border)',
                                            borderRadius: '8px', fontSize: '0.95rem', outline: 'none',
                                            color: 'var(--admin-primary)'
                                        }}
                                    />
                                    <span style={{ fontSize: '0.8rem', color: '#718096', display: 'block', marginTop: '0.5rem' }}>
                                        Must be a direct link to an image (e.g., .jpg, .png)
                                    </span>
                                </div>
                            ) : (
                                <div>
                                    <label style={{
                                        display: 'flex', alignItems: 'center', gap: '0.8rem',
                                        padding: '0.8rem 1rem', border: '1px solid var(--admin-border)',
                                        borderRadius: '8px', cursor: 'pointer', background: '#f8faf9',
                                        transition: 'all 0.2s', width: 'fit-content'
                                    }}>
                                        <Plus size={18} color="var(--admin-primary)" />
                                        <span style={{ fontSize: '0.95rem', color: selectedFile ? 'var(--admin-primary)' : '#718096', fontWeight: selectedFile ? 500 : 400 }}>
                                            {selectedFile ? selectedFile.name : 'Choose a file (PNG, JPG up to 5MB)'}
                                        </span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            style={{ display: 'none' }}
                                        />
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* {(previewUrl || formData.image) && (
                        <div className="image-preview-admin" style={{ marginTop: '1.5rem', marginBottom: '1.5rem', height: '180px' }}>
                            <img src={previewUrl || getImageUrl(formData.image)} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    )} */}

                    <div className="form-group">
                        <label>Title</label>
                        <input name="title" value={formData.title} onChange={handleInputChange} placeholder="e.g. Exterior View" required />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" value={formData.category} onChange={handleInputChange}>
                            <option value="apartments">Apartments</option>
                            <option value="plots">Open Plots</option>
                            <option value="interiors">Interiors</option>
                            <option value="construction">Construction</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea name="desc" value={formData.desc} onChange={handleInputChange} rows="3" placeholder="Brief description..." required></textarea>
                    </div>

                    <div className="form-actions" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <button type="submit" className="btn-admin btn-admin-primary" disabled={loading} style={{ flex: 1 }}>
                            <Save size={18} /> {loading ? 'Saving...' : 'Add to Gallery'}
                        </button>
                        <button type="button" className="btn-admin btn-admin-outline" onClick={() => navigate('/admin/gallery')} style={{ flex: 1 }}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GalleryForm;

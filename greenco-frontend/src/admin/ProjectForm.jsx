import React, { useState, useEffect } from 'react';
import { api, getImageUrl } from './adminApi/api';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, X, ArrowLeft, Image as ImageIcon, Plus } from 'lucide-react';
import './Admin.css';


const ProjectForm = ({ editId, onClose, onSuccess }) => {
    const { id: paramId } = useParams();
    const navigate = useNavigate();
    const id = editId || paramId;
    const isEdit = !!id;
    console.log("isEdit", paramId);

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        location: '',
        type: 'Apartment',
        status: 'Ongoing',
        image: '',
        price: '',
        area: '',
        fullDesc: '',
        featured: false,
        highlights: [],
        amenities: [],
        specs: [],
        locationAdvantages: [],
        stats: []
    });

    const [loading, setLoading] = useState(false);
    const [uploadMode, setUploadMode] = useState('file'); // 'file' or 'url'
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    // Array field inputs
    const [highlightInput, setHighlightInput] = useState('');
    const [amenityInput, setAmenityInput] = useState('');
    const [specInput, setSpecInput] = useState({ category: '', detail: '' });
    const [locAdvInput, setLocAdvInput] = useState({ place: '', time: '' });
    const [statInput, setStatInput] = useState({ label: '', value: '' });

    const handleAddArrayItem = (field, item, setInputState, emptyState) => {
        if (!item || (typeof item === 'object' && !Object.values(item).some(v => v))) return;
        setFormData(prev => ({
            ...prev,
            [field]: [...(prev[field] || []), item]
        }));
        setInputState(emptyState);
    };

    const handleRemoveArrayItem = (field, index) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            setFormData(prev => ({ ...prev, image: '' })); // Clear URL if file selected
        }
    };

    useEffect(() => {
        if (!isEdit) return;
        const controller = new AbortController();
        fetchProject(controller.signal);
        return () => controller.abort();
    }, [id, isEdit]);

    const fetchProject = async (signal) => {
        try {
            const response = await api.get(`/projects/${id}`, { signal });
            if (response.data.data) {
                setFormData(response.data.data);
                if (response.data.data.image) {
                    setUploadMode('url');
                }
            } else {
                toast.error('Project not found');
                if (!onClose) navigate('/admin/projects');
                else onClose();
            }
        } catch (error) {
            if (error.name === 'CanceledError') return;
            console.error('Error fetching project:', error);
            toast.error('Error loading project details');
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = new FormData();

            Object.keys(formData).forEach(key => {
                if (key !== 'image') {
                    if (['highlights', 'amenities', 'specs', 'locationAdvantages', 'stats'].includes(key)) {
                        data.append(key, JSON.stringify(formData[key] || []));
                    } else {
                        // Convert boolean to string for FormData
                        data.append(key, formData[key] === true ? 'true' : formData[key] === false ? 'false' : formData[key]);
                    }
                }
            });

            if (uploadMode === 'file') {
                if (selectedFile) {
                    data.append('image', selectedFile);
                } else if (!isEdit) {
                    toast.error('Please select an image file to upload.');
                    setLoading(false);
                    return;
                }
            } else {
                if (!formData.image && !isEdit) {
                    toast.error('Please provide a valid image URL.');
                    setLoading(false);
                    return;
                }
                if (formData.image) {
                    data.append('image', formData.image);
                }
            }

            if (isEdit) {
                await api.put(`/projects/${id}`, data);
                toast.success('Project updated');
            } else {
                await api.post('/projects', data);
                toast.success('Project created');
            }
            if (onSuccess) onSuccess();
            if (onClose) onClose();
            if (!onClose) navigate('/admin/projects');
        } catch (err) {
            console.error('Error saving project:', err);
            toast.error(err.response?.data?.message || 'Error saving project');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="project-form-modal-inner">
            <div className="page-header" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button onClick={() => navigate('/admin/projects')} className="btn-icon" title="Go Back">
                        <ArrowLeft size={24} />
                    </button>
                    <h2 style={{ margin: 0 }}>{isEdit ? 'Edit Project' : 'Add New Project'}</h2>
                </div>
            </div>

            <div className="admin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Slug (URL Path)</label>
                            <input
                                name="slug"
                                value={formData.slug}
                                onChange={handleInputChange}
                                placeholder="e.g. greenco-glow"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Project Title</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="e.g. GreenCo Glow"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Location</label>
                            <input
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="e.g. Hyderabad City"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Project Type</label>
                            <select name="type" value={formData.type} onChange={handleInputChange}>
                                <option value="Apartment">Apartment</option>
                                <option value="Land Layout">Land Layout</option>
                                <option value="Villa">Villa</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Status</label>
                            <select name="status" value={formData.status} onChange={handleInputChange}>
                                <option value="Upcoming">Upcoming</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Ready to Occupancy">Ready to Occupy</option>
                                <option value="Ready to Construct">Ready to Construct</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Featured Project</label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <input
                                    type="checkbox"
                                    name="featured"
                                    checked={formData.featured}
                                    onChange={handleInputChange}
                                    style={{ width: 'auto' }}
                                />
                                <span>Show on Home Page</span>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Price Range</label>
                            <input
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                placeholder="e.g. ₹40L - ₹75L"
                            />
                        </div>
                        <div className="form-group">
                            <label>Area / Dimensions</label>
                            <input
                                name="area"
                                value={formData.area}
                                onChange={handleInputChange}
                                placeholder="e.g. 1100 - 1800 sq ft"
                            />
                        </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label style={{ marginBottom: '0.8rem', display: 'block' }}>Hero Image Source</label>

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
                                            {selectedFile ? selectedFile.name : 'Choose a hero image file (PNG, JPG)'}
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

                    {(previewUrl || formData.image) && (
                        <div className="image-preview-admin" style={{ marginTop: '1rem', marginBottom: '2rem', height: '220px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--admin-border)' }}>
                            <img
                                src={previewUrl || getImageUrl(formData.image)}
                                alt="Hero Preview"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label>Project Description</label>
                        <textarea
                            name="fullDesc"
                            value={formData.fullDesc}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="Describe the project..."
                            required
                        ></textarea>
                    </div>

                    {/* Highlights */}
                    <div className="form-group" style={{ marginTop: '2rem' }}>
                        <label>Project Highlights</label>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <input
                                value={highlightInput}
                                onChange={e => setHighlightInput(e.target.value)}
                                placeholder="E.g. 100% Vastu Compliant"
                            />
                            <button
                                type="button"
                                className="btn-admin btn-admin-outline"
                                onClick={() => handleAddArrayItem('highlights', highlightInput, setHighlightInput, '')}
                            >
                                Add
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {formData.highlights?.map((h, i) => (
                                <span key={i} style={{ background: '#e2e8f0', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {h}
                                    <X size={14} style={{ cursor: 'pointer' }} onClick={() => handleRemoveArrayItem('highlights', i)} />
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Amenities */}
                    <div className="form-group" style={{ marginTop: '1.5rem' }}>
                        <label>Amenities</label>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <input
                                value={amenityInput}
                                onChange={e => setAmenityInput(e.target.value)}
                                placeholder="E.g. Swimming Pool"
                            />
                            <button
                                type="button"
                                className="btn-admin btn-admin-outline"
                                onClick={() => handleAddArrayItem('amenities', amenityInput ? { name: amenityInput } : null, setAmenityInput, '')}
                            >
                                Add
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {formData.amenities?.map((a, i) => (
                                <span key={i} style={{ background: '#e2e8f0', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {a.name}
                                    <X size={14} style={{ cursor: 'pointer' }} onClick={() => handleRemoveArrayItem('amenities', i)} />
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Specifications */}
                    <div className="form-group" style={{ marginTop: '1.5rem' }}>
                        <label>Specifications</label>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <input
                                value={specInput.category}
                                onChange={e => setSpecInput({ ...specInput, category: e.target.value })}
                                placeholder="Category (e.g. Flooring)"
                                style={{ flex: 1 }}
                            />
                            <input
                                value={specInput.detail}
                                onChange={e => setSpecInput({ ...specInput, detail: e.target.value })}
                                placeholder="Detail"
                                style={{ flex: 2 }}
                            />
                            <button
                                type="button"
                                className="btn-admin btn-admin-outline"
                                onClick={() => handleAddArrayItem('specs', specInput.category ? specInput : null, setSpecInput, { category: '', detail: '' })}
                            >
                                Add
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {formData.specs?.map((s, i) => (
                                <div key={i} style={{ background: '#f8fafc', padding: '0.5rem', borderRadius: '4px', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e2e8f0' }}>
                                    <span><strong>{s.category}:</strong> {s.detail}</span>
                                    <X size={16} color="#ef4444" style={{ cursor: 'pointer' }} onClick={() => handleRemoveArrayItem('specs', i)} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Location Advantages */}
                    <div className="form-group" style={{ marginTop: '1.5rem' }}>
                        <label>Location Advantages</label>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <input
                                value={locAdvInput.place}
                                onChange={e => setLocAdvInput({ ...locAdvInput, place: e.target.value })}
                                placeholder="Place (e.g. Airport)"
                                style={{ flex: 2 }}
                            />
                            <input
                                value={locAdvInput.time}
                                onChange={e => setLocAdvInput({ ...locAdvInput, time: e.target.value })}
                                placeholder="Time (e.g. 15 Mins)"
                                style={{ flex: 1 }}
                            />
                            <button
                                type="button"
                                className="btn-admin btn-admin-outline"
                                onClick={() => handleAddArrayItem('locationAdvantages', locAdvInput.place ? locAdvInput : null, setLocAdvInput, { place: '', time: '' })}
                            >
                                Add
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {formData.locationAdvantages?.map((l, i) => (
                                <span key={i} style={{ background: '#e2e8f0', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {l.place} - {l.time}
                                    <X size={14} style={{ cursor: 'pointer' }} onClick={() => handleRemoveArrayItem('locationAdvantages', i)} />
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="form-group" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                        <label>Project Statistics</label>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <input
                                value={statInput.label}
                                onChange={e => setStatInput({ ...statInput, label: e.target.value })}
                                placeholder="Label (e.g. Total Area)"
                                style={{ flex: 2 }}
                            />
                            <input
                                value={statInput.value}
                                onChange={e => setStatInput({ ...statInput, value: e.target.value })}
                                placeholder="Value (e.g. 10 Acres)"
                                style={{ flex: 1 }}
                            />
                            <button
                                type="button"
                                className="btn-admin btn-admin-outline"
                                onClick={() => handleAddArrayItem('stats', statInput.label ? statInput : null, setStatInput, { label: '', value: '' })}
                            >
                                Add
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {formData.stats?.map((s, i) => (
                                <span key={i} style={{ background: '#e2e8f0', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {s.label}: {s.value}
                                    <X size={14} style={{ cursor: 'pointer' }} onClick={() => handleRemoveArrayItem('stats', i)} />
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="form-actions" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <button type="submit" className="btn-admin btn-admin-primary" disabled={loading} style={{ flex: 1 }}>
                            <Save size={18} /> {loading ? 'Saving...' : (isEdit ? 'Update Project' : 'Create Project')}
                        </button>
                        {onClose && (
                            <button type="button" className="btn-admin btn-admin-outline" onClick={onClose} style={{ flex: 1 }}>
                                Cancel
                            </button>
                        )}
                        {!onClose && (
                            <button type="button" className="btn-admin btn-admin-outline" onClick={() => navigate('/admin/projects')} style={{ flex: 1 }}>
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;

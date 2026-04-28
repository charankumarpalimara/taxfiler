import React, { useState, useEffect } from 'react';
import { Maximize2, X } from 'lucide-react';
import { api, getImageUrl } from '../../apiService/api';
import '../styles/gallery.css';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const fetchGallery = async () => {
            try {
                const response = await api.get('/gallery', { signal: controller.signal });
                setGalleryItems(response.data.data);
                setLoading(false);
            } catch (err) {
                if (err.name === 'CanceledError') return;
                console.error('Error fetching gallery:', err);
                setLoading(false);
            }
        };
        fetchGallery();
        return () => controller.abort();
    }, []);

    const filters = [
        { id: 'all', label: 'All Photos' },
        { id: 'apartments', label: 'Apartments' },
        { id: 'plots', label: 'Open Plots' },
        { id: 'interiors', label: 'Interiors' },
        { id: 'construction', label: 'Construction' }
    ];

    // Pick 5 images for the strip hero
    // const heroStrip = galleryItems.slice(0, 5);
    const heroStrip = [
        {
            title: "first image",
            image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1920&auto=format&fit=crop"
        },
        {
            title: "second image",
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1920&auto=format&fit=crop"
        },
        {
            title: "third image",
            image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1920&auto=format&fit=crop"
        },
        {
            title: "fourth image",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop"
        },
        {
            title: "fifth image",
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1920&auto=format&fit=crop"
        }
    ];

    const filteredItems = activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <main className="gallery-page">

            {/* ── UNIQUE HERO: Image Strip ─────────────────── */}
            <section className="gallery-hero-strip">
                {/* 5 images fill the width */}
                <div className="gallery-strip-images">
                    {heroStrip.map((item, i) => (
                        <div key={i} className="gallery-strip-img">
                            <img src={item.image} alt={item.title} />
                        </div>
                    ))}
                    {/* Dark gradient over all */}
                    <div className="gallery-strip-overlay" />
                </div>

                {/* Centered title floating over strips */}
                <div className="gallery-strip-content">
                    <div className="gallery-strip-eyebrow" data-aos="fade-down">Visual Portfolio</div>
                    <h1 className="gallery-strip-title" data-aos="fade-up">
                        Our Journey in <em>Pictures</em>
                    </h1>
                    <p className="gallery-strip-desc" data-aos="fade-up" data-aos-delay="100">
                        {galleryItems.length} photographs across apartments, plots, interiors & construction
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section className="gallery-section">
                <div className="container">
                    <div className="gallery-controls" data-aos="fade-up">
                        <div className="gallery-tabs">
                            {filters.map(filter => (
                                <button
                                    key={filter.id}
                                    className={`gallery-tab ${activeFilter === filter.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="gallery-grid">
                        {filteredItems.map((item, i) => (
                            <div key={item.id} className="gallery-item" data-aos="fade-up" data-aos-delay={i * 80} onClick={() => setSelectedImage(item)}>
                                <img src={getImageUrl(item.image)} alt={item.title} />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="gallery-view-btn"><Maximize2 size={18} /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="lightbox-close" onClick={() => setSelectedImage(null)}><X size={28} /></button>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={getImageUrl(selectedImage.image)} alt={selectedImage.title} />
                        <div className="lightbox-caption">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Gallery;

import { motion } from 'framer-motion';
import { userImages } from '../constants/images';
import Lightbox from './Lightbox';
import { useState, useEffect } from 'react';

const IMAGES_PER_PAGE = 12;

const getColumnCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
};

const Gallery = () => {
    const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [columnCount, setColumnCount] = useState(getColumnCount);

    useEffect(() => {
        const handleResize = () => setColumnCount(getColumnCount());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const displayedImages = userImages.slice(0, visibleCount);

    // Distribute images into fixed columns by index. Because each image's column
    // is determined solely by its position, loading more only appends to the
    // bottom of each column — already-visible images never reshuffle.
    const columns = Array.from({ length: columnCount }, () => []);
    displayedImages.forEach((fileName, index) => {
        columns[index % columnCount].push({ fileName, index });
    });

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + IMAGES_PER_PAGE);
    };

    const openLightbox = (index) => setSelectedImageIndex(index);
    const closeLightbox = () => setSelectedImageIndex(null);

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % userImages.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + userImages.length) % userImages.length);
    };

    return (
        <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="mb-12 border-b border-tech-muted/60 pb-6">
                <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-tech-accent">
                    Selected Work
                </h2>
                <p className="text-tech-secondary mt-3">
                    Live music, festivals, and portraits.
                </p>
            </div>

            <div className="flex gap-6 items-start">
                {columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex-1 flex flex-col gap-6 min-w-0">
                        {column.map(({ fileName, index }) => (
                            <motion.div
                                key={`${fileName}-${index}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                                className="group relative overflow-hidden cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <motion.img
                                    src={`/images_optimized/${fileName}`}
                                    alt={`Concert photograph ${index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300"></div>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Load More */}
            {visibleCount < userImages.length && (
                <div className="mt-16 text-center">
                    <button
                        onClick={handleLoadMore}
                        className="px-8 py-3 border border-tech-primary/40 text-tech-primary text-sm tracking-wide hover:bg-tech-primary hover:text-black transition-colors"
                    >
                        Load More
                    </button>
                    <p className="mt-4 text-tech-secondary text-sm">
                        Showing {displayedImages.length} of {userImages.length}
                    </p>
                </div>
            )}

            {/* Lightbox */}
            {selectedImageIndex !== null && (
                <Lightbox
                    image={userImages[selectedImageIndex]}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </section>
    );
};

export default Gallery;

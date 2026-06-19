import { motion } from 'framer-motion';
import { userImages } from '../constants/images';
import Lightbox from './Lightbox';
import { useState } from 'react';

const IMAGES_PER_PAGE = 12;

const Gallery = () => {
    const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const displayedImages = userImages.slice(0, visibleCount);

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

    // Animation variants for scroll/load effect
    const imageVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (i % 3) * 0.08,
                duration: 0.7,
                ease: [0.215, 0.61, 0.355, 1],
            },
        }),
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

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {displayedImages.map((fileName, index) => (
                    <motion.div
                        key={`${fileName}-${index}`}
                        custom={index}
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="group relative overflow-hidden cursor-pointer break-inside-avoid"
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

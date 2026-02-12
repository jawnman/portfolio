import { motion, AnimatePresence } from 'framer-motion';
import { userImages } from '../constants/images';
import Lightbox from './Lightbox';
import { useState } from 'react'; // Added useState import

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
        hidden: { opacity: 0, y: 100 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (i % 3) * 0.1,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for "smooth" controlled feel
            },
        }),
    };

    return (
        <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="mb-12 flex items-end gap-4 border-b border-tech-muted pb-4">
                <h2 className="text-3xl md:text-5xl font-bold font-mono text-tech-accent uppercase">
                    01 // SELECTED_WORKS
                </h2>
                <span className="text-tech-primary font-mono text-sm hidden md:block animate-pulse">
          // LIVE_FEED
                </span>
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
                        className="group relative overflow-hidden cursor-pointer tech-border break-inside-avoid"
                        onClick={() => openLightbox(index)}
                    >
                        <motion.img
                            src={`/images_optimized/${fileName}`}
                            alt={`Gallery Image ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            initial={{ filter: "grayscale(100%)", scale: 1 }}
                            whileInView={{ filter: "grayscale(0%)" }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-auto object-cover transition-transform duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-sm font-bold text-white font-mono truncate">{fileName.split('.')[0]}</h3>
                                <p className="text-tech-primary text-xs font-mono mt-1">
                                    RAW_DATA
                                </p>
                            </div>
                        </div>

                        {/* Tech Corners */}
                        <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-tech-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-tech-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-tech-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-tech-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < userImages.length && (
                <div className="mt-16 text-center">
                    <button
                        onClick={handleLoadMore}
                        className="group relative px-8 py-3 bg-transparent border border-tech-primary/50 text-tech-primary font-mono text-sm uppercase tracking-widest overflow-hidden hover:text-black transition-colors"
                    >
                        <span className="absolute inset-0 w-0 bg-tech-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative z-10">LOAD_MORE_DATA [+]</span>
                    </button>
                    <p className="mt-4 text-tech-muted text-xs font-mono">
                        SHOWING {displayedImages.length} OF {userImages.length} ASSETS
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

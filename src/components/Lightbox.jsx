import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ image, onClose, onNext, onPrev }) => {
    // Lock body scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
                onClick={onClose}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-[110]"
                    onClick={onClose}
                >
                    <X size={32} />
                </button>

                {/* Navigation Buttons */}
                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[110] hidden md:block"
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                >
                    <ChevronLeft size={48} />
                </button>
                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-[110] hidden md:block"
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                >
                    <ChevronRight size={48} />
                </button>

                {/* Main Image */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative max-w-[90vw] max-h-[90vh] pointer-events-none select-none"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={`/images_optimized/${image}`}
                        alt="Full size view"
                        className="max-w-full max-h-[90vh] object-contain tech-border"
                    />
                    <div className="absolute bottom-[-40px] left-0 right-0 text-center font-mono text-tech-primary text-sm">
                        {image}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;

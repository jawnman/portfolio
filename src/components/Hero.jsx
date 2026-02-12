import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TextDecrypt from './TextDecrypt';
import WarpText from './WarpText';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Single Landscape Background - Changed to a different shot */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images_optimized/DSC04662.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-30 bg-fixed"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-tech-bg"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-tech-primary font-mono mb-6 text-sm md:text-base tracking-[0.2em] uppercase">
                        <TextDecrypt text="Philadelphia / Worldwide" />
                    </h2>

                    {/* Replaced TextDecrypt on Name with WarpText as requested */}
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mix-blend-difference will-change-transform">
                            <WarpText text="NICK ROEHM" />
                        </h1>
                    </div>

                    <p className="text-gray-400 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-10">
                        CONCERT PHOTOGRAPHER & FILMMAKER
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link to="/photos" className="group relative px-8 py-3 bg-transparent border border-tech-primary/50 text-tech-primary font-mono text-sm uppercase tracking-widest overflow-hidden hover:text-black transition-colors">
                        <span className="absolute inset-0 w-0 bg-tech-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative z-10">View Portfolio</span>
                    </Link>
                    <Link to="/about" className="group px-8 py-3 text-gray-400 font-mono text-sm uppercase tracking-widest hover:text-white transition-colors">
                        <span className="border-b border-transparent group-hover:border-white transition-all pb-1">About Me</span>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 font-mono text-xs"
            >
                SCROLL_DOWN
            </motion.div>
        </section>
    );
};

export default Hero;

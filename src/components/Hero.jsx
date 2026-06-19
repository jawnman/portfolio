import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images_optimized/DSC04662.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-tech-bg"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-tech-primary mb-6 text-xs md:text-sm tracking-[0.35em] uppercase">
                        Philadelphia · Worldwide
                    </p>

                    <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
                        Nick Roehm
                    </h1>

                    <p className="text-tech-secondary text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-10">
                        Concert photographer &amp; filmmaker
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        to="/photos"
                        className="px-8 py-3 bg-tech-primary text-black text-sm tracking-wide font-medium hover:bg-white transition-colors"
                    >
                        View Portfolio
                    </Link>
                    <Link
                        to="/about"
                        className="group px-8 py-3 text-tech-secondary text-sm tracking-wide hover:text-white transition-colors"
                    >
                        <span className="border-b border-transparent group-hover:border-white/60 transition-all pb-1">About Me</span>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-tech-secondary/70 text-xs tracking-[0.3em] uppercase"
            >
                Scroll
            </motion.div>
        </section>
    );
};

export default Hero;

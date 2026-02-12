import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Film } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Hero />

            {/* Featured Preview Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Photos Link Card */}
                    <Link to="/photos" className="group relative block overflow-hidden tech-border aspect-video">
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                initial={{ filter: "grayscale(100%)" }}
                                whileInView={{ filter: "grayscale(0%)" }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1.5 }}
                                className="w-full h-full bg-[url('/images_optimized/DSC09277.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            ></motion.div>
                        </div>
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                            <Camera size={48} className="text-tech-primary mb-4 opacity-80 group-hover:scale-110 transition-transform" />
                            <h2 className="text-3xl font-bold font-mono text-white mb-2 tracking-tighter">PHOTOGRAPHY</h2>
                            <p className="text-gray-400 font-mono text-sm mb-6 max-w-xs">Explore the gallery of live concert and portrait work.</p>

                            <span className="inline-flex items-center gap-2 text-tech-primary font-mono text-xs uppercase tracking-widest border border-tech-primary/50 px-4 py-2 hover:bg-tech-primary hover:text-black transition-colors">
                                Enter Gallery <ArrowRight size={14} />
                            </span>
                        </div>
                    </Link>

                    {/* Video Link Card */}
                    <Link to="/video" className="group relative block overflow-hidden tech-border aspect-video">
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                initial={{ filter: "grayscale(100%)" }}
                                whileInView={{ filter: "grayscale(0%)" }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1.5 }}
                                className="w-full h-full bg-[url('/images_optimized/DSC02607.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            ></motion.div>
                        </div>
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                            <Film size={48} className="text-tech-secondary mb-4 opacity-80 group-hover:scale-110 transition-transform" />
                            <h2 className="text-3xl font-bold font-mono text-white mb-2 tracking-tighter">MOTION_PICTURE</h2>
                            <p className="text-gray-400 font-mono text-sm mb-6 max-w-xs">Cinematic recaps, music videos, and tour diaries.</p>

                            <span className="inline-flex items-center gap-2 text-tech-secondary font-mono text-xs uppercase tracking-widest border border-tech-secondary/50 px-4 py-2 hover:bg-tech-secondary hover:text-black transition-colors">
                                Watch Videos <ArrowRight size={14} />
                            </span>
                        </div>
                    </Link>

                </div>
            </section>
        </div>
    );
};

export default Home;

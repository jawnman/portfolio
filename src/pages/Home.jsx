import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Film } from 'lucide-react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Hero />

            {/* Featured preview — Photography & Motion */}
            <section id="explore" className="scroll-mt-24 pt-14 pb-24 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-tech-primary text-xs tracking-[0.35em] uppercase mb-3">Explore</p>
                    <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white">
                        Photography &amp; Motion
                    </h2>
                    <p className="text-tech-secondary mt-4 max-w-xl mx-auto">
                        Two ways into the work — stills from the pit and films from the road. Pick one to dive in.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Photos */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Link to="/photos" className="group relative block overflow-hidden tech-border aspect-video transition-transform duration-300 hover:-translate-y-1">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="w-full h-full bg-[url('/images_optimized/DSC09277.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                            </div>
                            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors duration-300"></div>

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                                <Camera size={40} className="text-tech-primary mb-4 opacity-90" />
                                <h2 className="font-display text-3xl font-semibold tracking-tight text-white mb-2">Photography</h2>
                                <p className="text-tech-secondary text-sm mb-6 max-w-xs">Live concert and portrait work.</p>

                                <span className="inline-flex items-center gap-2 text-tech-primary text-xs uppercase tracking-widest border border-tech-primary/40 px-4 py-2 group-hover:bg-tech-primary group-hover:text-black transition-colors">
                                    View Gallery <ArrowRight size={14} />
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link to="/video" className="group relative block overflow-hidden tech-border aspect-video transition-transform duration-300 hover:-translate-y-1">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="w-full h-full bg-[url('/images_optimized/DSC02607.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                            </div>
                            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors duration-300"></div>

                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                                <Film size={40} className="text-tech-primary mb-4 opacity-90" />
                                <h2 className="font-display text-3xl font-semibold tracking-tight text-white mb-2">Motion</h2>
                                <p className="text-tech-secondary text-sm mb-6 max-w-xs">Cinematic recaps, music videos, and tour diaries.</p>

                                <span className="inline-flex items-center gap-2 text-tech-primary text-xs uppercase tracking-widest border border-tech-primary/40 px-4 py-2 group-hover:bg-tech-primary group-hover:text-black transition-colors">
                                    Watch Videos <ArrowRight size={14} />
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Home;

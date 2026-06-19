import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Film } from 'lucide-react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Hero />

            {/* Featured preview section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Photos */}
                    <Link to="/photos" className="group relative block overflow-hidden tech-border aspect-video">
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

                    {/* Video */}
                    <Link to="/video" className="group relative block overflow-hidden tech-border aspect-video">
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

                </div>
            </section>
        </div>
    );
};

export default Home;

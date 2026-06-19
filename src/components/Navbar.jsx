import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, Film, User, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/', icon: User },
        { name: 'Photos', path: '/photos', icon: Camera },
        { name: 'Video', path: '/video', icon: Film },
        { name: 'About', path: '/about', icon: User },
    ];

    return (
        <nav className="fixed w-full z-50 bg-tech-bg/80 backdrop-blur-md border-b border-tech-muted/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="font-display text-xl font-semibold tracking-tight text-tech-accent hover:text-white transition-colors">
                            Nick Roehm
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative py-2 text-sm tracking-wide transition-colors ${location.pathname === link.path ? 'text-tech-primary' : 'text-tech-secondary hover:text-tech-accent'}`}
                                >
                                    <span>{link.name}</span>
                                    <span className={`absolute bottom-0 left-0 h-px bg-tech-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 hover:w-full'}`}></span>
                                </Link>
                            ))}
                            <a
                                href="https://www.instagram.com/nick.roehm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-tech-secondary hover:text-tech-accent transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-tech-accent hover:text-tech-primary transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-tech-bg border-b border-tech-muted/60 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-4 text-base tracking-wide transition-colors ${location.pathname === link.path ? 'text-tech-primary' : 'text-tech-secondary hover:text-tech-accent'}`}
                                >
                                    <link.icon size={18} />
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://www.instagram.com/nick.roehm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-3 py-4 text-base tracking-wide text-tech-secondary hover:text-tech-accent transition-colors"
                            >
                                <Instagram size={18} />
                                Instagram
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

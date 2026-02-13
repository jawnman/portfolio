import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, Film, User, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WarpText from './WarpText';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'HOME', path: '/', icon: User },
        { name: 'PHOTOS', path: '/photos', icon: Camera },
        { name: 'VIDEO', path: '/video', icon: Film },
        { name: 'ABOUT', path: '/about', icon: User },
    ];

    return (
        <nav className="fixed w-full z-50 bg-tech-bg/90 backdrop-blur-md border-b border-tech-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link to="/" className="text-2xl font-bold font-mono tracking-tighter">
                            <WarpText text="NICK ROEHM" className="!py-0" hoverRange={50} />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`group relative px-3 py-2 text-sm font-medium font-mono transition-colors ${location.pathname === link.path ? 'text-tech-primary' : 'text-tech-accent hover:text-tech-primary'}`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <link.icon size={16} className={`transition-opacity -ml-6 absolute ${location.pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                        <span className={`transition-transform duration-300 ${location.pathname === link.path ? 'translate-x-4' : 'group-hover:translate-x-4'}`}>{link.name}</span>
                                    </span>
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-tech-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            ))}
                            <a
                                href="https://www.instagram.com/nick.roehm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-3 py-2 text-sm font-medium font-mono text-tech-accent hover:text-tech-primary transition-colors"
                            >
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-tech-accent hover:text-tech-primary transition-colors"
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
                        className="md:hidden bg-tech-bg border-b border-tech-muted overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-4 text-base font-medium font-mono transition-colors ${location.pathname === link.path ? 'bg-tech-muted text-tech-primary' : 'hover:bg-tech-muted hover:text-tech-primary'}`}
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
                                className="flex items-center gap-3 px-3 py-4 text-base font-medium font-mono hover:bg-tech-muted hover:text-tech-primary transition-colors"
                            >
                                <Instagram size={18} />
                                INSTAGRAM
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

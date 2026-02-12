import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const experience = [
        {
            role: "Touring Photographer & Videographer",
            company: "Of Mice & Men",
            period: "2024–Present",
            details: [
                "On-the-road photo + video documentation (shows, backstage, travel days)",
                "Nightly/overnight turnaround edits when needed",
                "Tour-ready workflow designed for speed, consistency, and story-driven content"
            ]
        },
        {
            role: "House Photographer & Videographer",
            company: "The Ave",
            period: "2025–Present",
            details: [
                "Photo + video coverage for concerts and events",
                "Creation of recap content and promotional assets",
                "Quick delivery built for social posting timelines"
            ]
        },
        {
            role: "House Photographer",
            company: "Live Nation Philadelphia",
            period: "2020–Present",
            details: [
                "Venues: The Fillmore Philadelphia, The Met Philadelphia, Theatre of Living Arts (TLA)",
                "Photo coverage for live concerts and events",
                "Fast turnaround delivery for promoters, talent teams, and venue marketing",
                "Consistent performance in high-pressure, live-event environments"
            ]
        }
    ];

    return (
        <section id="about" className="py-20 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 md:sticky md:top-24">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-tech-primary to-tech-secondary opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative aspect-[3/4] overflow-hidden tech-border bg-black">
                        <img
                            src="/images_optimized/DSC03843.jpg"
                            alt="Nick Roehm Profile"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-2/3">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-tech-accent uppercase mb-8">
                        03 // ABOUT_ME
                    </h2>

                    <div className="space-y-6 font-light text-lg text-gray-300 mb-12">
                        <p className="leading-relaxed">
                            I’m a Philadelphia-based photographer and videographer creating <span className="text-tech-primary">dreamy, cinematic visuals</span> for artists and brands. I’ve been editing video since 2017, and I’ve been touring since 2024. I’m no stranger to fast timelines, high pressure, and delivering consistently when it matters most.
                        </p>
                        <p className="leading-relaxed">
                            My work lives between real and surreal: clean, emotional, and built to feel like a moment you can step back into. Whether I’m shooting a show, documenting a weekend on the road, or building a full recap from scratch, I focus on <span className="text-white font-bold">atmosphere, story, and detail.</span>
                        </p>
                        <p className="leading-relaxed">
                            Touring has shaped how I work: quick communication, calm execution, and overnight turnarounds when needed. If you need someone who can capture the energy and deliver fast without cutting corners, I’m your guy.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold font-mono text-white uppercase mb-6 border-b border-tech-muted pb-2">
                        // WORK_EXPERIENCE
                    </h3>

                    <div className="space-y-8">
                        {experience.map((job, index) => (
                            <div key={index} className="group">
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                    <h4 className="text-xl font-bold text-white group-hover:text-tech-primary transition-colors">{job.role}</h4>
                                    <span className="font-mono text-tech-accent text-sm">{job.period}</span>
                                </div>
                                <h5 className="text-tech-secondary font-mono mb-3">{job.company}</h5>
                                <ul className="space-y-2">
                                    {job.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-tech-muted group-hover:bg-tech-primary transition-colors rounded-full flex-shrink-0"></span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="pt-12">
                        <a href="mailto:nickroehmxyz@gmail.com" className="inline-block px-8 py-3 bg-white text-black font-mono font-bold hover:bg-tech-primary hover:text-black transition-colors clip-path-polygon">
                            INITIATE_CONTACT
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

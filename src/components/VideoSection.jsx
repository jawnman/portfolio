import React from 'react';

const featured = {
    title: 'Show Reel — 2025/2026',
    src: 'https://www.youtube.com/embed/3wN78qVXH0I',
};

const videos = [
    { id: 11, title: 'People Watching 156 / Silence', src: 'https://www.youtube.com/embed/zTL2pVTJ9vE' },
    { id: 1, title: 'Ave Recap', src: 'https://www.youtube.com/embed/0AUxnl_QlXI' },
    { id: 2, title: 'Of Mice & Men — Recap', src: 'https://www.youtube.com/embed/m2vRPprt8X0' },
    { id: 3, title: 'Of Mice & Men — Recap', src: 'https://www.youtube.com/embed/vg_PD5wGqdI' },
    { id: 4, title: 'Warped Tour Orlando — Recap', src: 'https://www.youtube.com/embed/kPEWA7M4MD8' },
    { id: 5, title: 'Of Mice & Men — Promo', src: 'https://www.youtube.com/embed/Uzo6mYRcHcQ' },
    { id: 6, title: 'Crowd Lights — Atmosphere', src: 'https://www.youtube.com/embed/U_JrrFIf8sE' },
];

const VideoSection = () => {
    return (
        <section id="video" className="py-20 px-4 max-w-7xl mx-auto">
            <div className="mb-12 border-b border-tech-muted/60 pb-6">
                <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-tech-accent">
                    Video
                </h2>
                <p className="text-tech-secondary mt-3">
                    Recaps, music videos, and tour films.
                </p>
            </div>

            <div className="mb-16">
                <div className="relative aspect-video overflow-hidden bg-black tech-border">
                    <iframe
                        className="w-full h-full"
                        src={featured.src}
                        title={featured.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-medium text-tech-accent">
                    {featured.title}
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                    <div key={video.id} className="group">
                        <div className="relative aspect-[9/16] md:aspect-[3/4] overflow-hidden bg-black tech-border">
                            <iframe
                                className="w-full h-full"
                                src={video.src}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h3 className="mt-4 text-base font-medium text-tech-accent group-hover:text-tech-primary transition-colors truncate">
                            {video.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoSection;

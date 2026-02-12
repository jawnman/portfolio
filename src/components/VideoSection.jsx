import React from 'react';

const videos = [
    { id: 1, title: 'ERRA', src: 'https://www.youtube.com/embed/JLAcv_s7q4s' },
    { id: 2, title: 'OF MICE & MEN // PROMO_LOOP', src: 'https://www.youtube.com/embed/Uzo6mYRcHcQ' },
    { id: 3, title: 'OF MICE & MEN // RECAP', src: 'https://www.youtube.com/embed/vg_PD5wGqdI' },
    { id: 4, title: 'CROWD_LIGHTS // ATMOSPHERE', src: 'https://www.youtube.com/embed/U_JrrFIf8sE' },
    { id: 5, title: 'LIVE_CLIP // YOU_MAKE_ME_SICK', src: 'https://www.youtube.com/embed/b8DcEpMp7bs' },
    { id: 6, title: 'ODD MOB // LIVE_CLIP', src: 'https://www.youtube.com/embed/61FvqWC0J90' },
    { id: 7, title: 'MOTION_DESIGN', src: 'https://www.youtube.com/embed/dVETCKq1U-8' },
];

const VideoSection = () => {
    return (
        <section id="video" className="py-20 px-4 max-w-7xl mx-auto bg-tech-muted/10">
            <div className="mb-12 border-b border-tech-muted pb-4 text-right">
                <h2 className="text-3xl md:text-5xl font-bold font-mono text-tech-secondary uppercase">
                    02 // VIDEO
                </h2>
                <span className="text-tech-muted font-mono text-sm hidden md:inline-block">
                    // RECENT_CAPTURES
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                    <div key={video.id} className="tech-border bg-black p-2 group">
                        {/* 
                           YouTube Shorts are vertical (9:16). 
                           To display them well without massive black bars, we can use a taller aspect ratio container 
                           or just standard video aspect. Standard is safer for mixed content, but let's try a vertical-friendly aspect 
                           since ALL of them are shorts. 
                           Actually, YouTube iframe embeds for Shorts are often still best served in standard players 
                           unless we force a specific size. Let's use a flexible vertical aspect ratio for these.
                        */}
                        <div className="relative aspect-[9/16] md:aspect-[3/4] overflow-hidden bg-gray-900">
                            <iframe
                                className="w-full h-full transition-all duration-500"
                                src={video.src}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="mt-4 flex flex-col px-2">
                            <h3 className="text-base font-bold font-mono text-white group-hover:text-tech-secondary transition-colors truncate">
                                {video.title}
                            </h3>
                            <div className="w-full h-[1px] bg-tech-muted/30 my-2"></div>
                            <span className="text-xs text-tech-primary font-mono self-end">SHORTS // RAW</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoSection;

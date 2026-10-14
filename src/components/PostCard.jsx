import { useEffect, useRef } from 'react';

// A single looping post card: muted, no controls, loops forever.
// Only plays while on-screen (IntersectionObserver) so a page full of
// clips stays smooth and doesn't decode everything at once.
const PostCard = ({ src, poster, title, orientation = 'vertical' }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const play = video.play();
                    if (play && typeof play.catch === 'function') play.catch(() => {});
                } else {
                    video.pause();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`group relative overflow-hidden tech-border bg-black ${
                orientation === 'horizontal' ? 'aspect-video' : 'aspect-[9/16]'
            }`}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
                aria-label={title}
                className="w-full h-full object-cover"
            />
            {/* subtle vignette so the grid reads as one piece */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5"></div>
        </div>
    );
};

export default PostCard;

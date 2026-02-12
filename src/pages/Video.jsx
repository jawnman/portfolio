import React, { useEffect } from 'react';
import VideoSection from '../components/VideoSection';

const Video = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <VideoSection />
        </div>
    );
};

export default Video;
